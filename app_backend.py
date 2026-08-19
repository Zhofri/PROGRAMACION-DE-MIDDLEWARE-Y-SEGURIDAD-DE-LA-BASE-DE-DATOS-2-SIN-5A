import smtplib
from email.message import EmailMessage
from flask import Flask, request, jsonify
import pymysql

app = Flask(__name__)

# Configuración de la Base de Datos (XAMPP / MariaDB)
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'materials_fadrell',
    'cursorclass': pymysql.cursors.DictCursor
}

# Configuración de Correo (Gmail SMTP)
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465
EMAIL_SENDER = "zhofri77@gmail.com"
EMAIL_PASSWORD = "gjhbusynyzlabfis"

@app.route('/api/contacto', methods=['POST'])
def registrar_contacto():
    try:
        # Obtener los datos del formulario (enviados como JSON desde JS)
        data = request.json
        nombre = data.get('nombre')
        email = data.get('email')
        mensaje = data.get('mensaje')

        if not nombre or not email or not mensaje:
            return jsonify({"status": "error", "message": "Todos los campos son obligatorios"}), 400

        # Paso 1: Guardar en la Base de Datos
        conexion = pymysql.connect(**DB_CONFIG)
        try:
            with conexion.cursor() as cursor:
                sql = "INSERT INTO contacto (nombre, email, mensaje) VALUES (%s, %s, %s)"
                cursor.execute(sql, (nombre, email, mensaje))
            conexion.commit()
        finally:
            conexion.close()

        # Paso 2: Enviar el Acuse de Recibido por correo
        enviar_correo_confirmacion(email, nombre)

        return jsonify({"status": "success", "message": "Mensaje recibido correctamente. Revisa tu correo."}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"status": "error", "message": "Ocurrió un error en el servidor."}), 500

def enviar_correo_confirmacion(destinatario, nombre):
    try:
        msg = EmailMessage()
        msg['Subject'] = 'Acuse de Recibo - Materials Fadrell'
        msg['From'] = EMAIL_SENDER
        msg['To'] = destinatario
        
        cuerpo_mensaje = f"""
        Hola {nombre},
        
        Hemos recibido tu mensaje correctamente a través de nuestro portal de contacto.
        Nos pondremos en contacto contigo lo más pronto posible.
        
        Atentamente,
        El equipo de Materials Fadrell
        """
        msg.set_content(cuerpo_mensaje)
        
        # Conectar al servidor SMTP usando SSL
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
            server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            server.send_message(msg)
            
    except Exception as e:
        print(f"Error al enviar el correo: {e}")
        # En un proyecto real se registraría el error, para esta tarea dejamos pasar para no bloquear
        pass

@app.route('/api/productos', methods=['GET'])
def obtener_productos():
    try:
        conexion = pymysql.connect(**DB_CONFIG)
        try:
            with conexion.cursor() as cursor:
                # Obtener todos los productos junto con su categoria
                sql = """
                    SELECT p.id, p.nombre, p.descripcion, p.precio, p.stock, 
                           c.nombre as categoria, p.imagen_url 
                    FROM productos p 
                    LEFT JOIN categorias c ON p.categoria_id = c.id
                """
                cursor.execute(sql)
                productos = cursor.fetchall()
            return jsonify(productos), 200
        finally:
            conexion.close()
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"status": "error", "message": "Ocurrió un error al obtener productos."}), 500

@app.route('/api/ofertas', methods=['GET'])
def obtener_ofertas():
    try:
        conexion = pymysql.connect(**DB_CONFIG)
        try:
            with conexion.cursor() as cursor:
                # Obtener productos con ofertas activas
                sql = """
                    SELECT p.id, p.nombre, p.descripcion, p.precio, o.descuento_porcentaje, 
                           (p.precio - (p.precio * o.descuento_porcentaje / 100)) as precio_oferta, 
                           o.fecha_fin, p.imagen_url, o.descripcion as oferta_descripcion
                    FROM ofertas o
                    JOIN productos p ON o.producto_id = p.id
                    WHERE CURRENT_DATE BETWEEN o.fecha_inicio AND o.fecha_fin
                """
                cursor.execute(sql)
                ofertas = cursor.fetchall()
            return jsonify(ofertas), 200
        finally:
            conexion.close()
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"status": "error", "message": "Ocurrió un error al obtener ofertas."}), 500

@app.route('/api/noticias', methods=['GET'])
def obtener_noticias():
    try:
        conexion = pymysql.connect(**DB_CONFIG)
        try:
            with conexion.cursor() as cursor:
                # Consultar todas las noticias ordenadas de la mas reciente a la mas antigua
                sql = "SELECT id, fecha, titulo, contenido, imagen_url FROM noticias ORDER BY fecha DESC"
                cursor.execute(sql)
                noticias = cursor.fetchall()
            return jsonify(noticias), 200
        finally:
            conexion.close()
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"status": "error", "message": "Ocurrió un error al obtener noticias."}), 500


# Habilitar CORS manualmente para desarrollo si el frontend corre en otro puerto, 
# pero como asumimos que el front llamara a localhost:5000 lo manejamos asi.
# En produccion se instalaria flask-cors.
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST')
    return response

if __name__ == '__main__':
    app.run(debug=True, port=5000)

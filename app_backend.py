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

if __name__ == '__main__':
    # Habilitar CORS manualmente para desarrollo si el frontend corre en otro puerto, 
    # pero como asuminos que el front llamará a localhost:5000 lo manejamos así.
    # En producción se instalaría flask-cors.
    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response
        
    app.run(debug=True, port=5000)

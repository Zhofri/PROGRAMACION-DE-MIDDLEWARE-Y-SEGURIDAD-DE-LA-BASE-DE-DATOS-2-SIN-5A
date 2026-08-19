# Aprendizaje Autónomo 1: Portal Web y Base de Datos "Materials Fadrell"

Este repositorio contiene los archivos de código fuente correspondientes al desarrollo práctico del **Aprendizaje Autónomo 1** de la asignatura **Programación de Middleware y Seguridad de la Base de Datos**.

---

## 🎓 Información Académica
*   **Institución:** Universidad Internacional del Ecuador (UIDE)
*   **Carrera:** Sistemas de la Información
*   **Asignatura:** Programación de Middleware y Seguridad de la Base de Datos 2-SIN-5A
*   **Estudiante:** Zhofri Joel Guamán Quichimbo
*   **Docente:** HECTOR GUILLERMO AVALOS SILVA
*   **Año:** 2026

---

## 🏢 Descripción del Proyecto
**Materials Fadrell** es un emprendimiento digital diseñado para la comercialización de materiales de construcción (cementos, aceros, bloques, herramientas, etc.). El proyecto integra un frontend interactivo y dinámico junto con un diseño relacional de base de datos optimizado para la gestión de productos, clientes, pedidos y ofertas.

---

## 🛠️ Tecnologías Utilizadas
1.  **HTML5:** Estructura web estructurada y semántica.
2.  **CSS3:** Estilos visuales adaptativos (Flexbox y Grid) con diseño moderno y responsivo.
3.  **JavaScript & jQuery:** Dinamismo, carga de contenidos sin recarga de página y consumo de APIs externas mediante `fetch`.
4.  **MariaDB / MySQL:** Motor de base de datos relacional para la persistencia transaccional.
5.  **Python (Flask):** Micro-framework utilizado para el backend, procesando peticiones HTTP y ejecutando consultas en BD mediante `pymysql`.
6.  **APIs y Librerías:** `smtplib` para envío de correos, `ftplib` para subida de archivos al servidor, y consumo de OpenWeatherMap API para el reporte meteorológico.

---

## 📂 Estructura del Repositorio
*   `index.html`: Estructura base del portal web.
*   `style.css`: Hojas de estilo para la presentación responsiva.
*   `app.js`: Lógica jQuery que controla transiciones y consumo de OpenWeatherMap.
*   `app_backend.py`: Servidor backend en Python/Flask que maneja el registro en BD y envío de correos.
*   `subir_ftp.py`: Script Python para comprimir y desplegar el proyecto mediante FTP.
*   `script.sql` / `script_aa2.sql`: Scripts DDL para creación de tablas, incluyendo la tabla `contacto`.
*   `assets/`: Carpeta de recursos gráficos.

---

## 🚀 Instrucciones de Ejecución

### 1. Portal Web (Frontend)
Para ejecutar la página web interactiva:
1.  Descarga o clona este repositorio.
2.  Abre el archivo `index.html` en cualquier navegador web moderno (Edge, Chrome, Firefox).
3.  Utiliza la barra de navegación para interactuar con las distintas pestañas (Home, Empresa, Productos, Oferta, Localización, Contacto y Noticias) sin que la página se recargue.

### 2. Base de Datos (Backend SQL)
Para montar y probar la base de datos relacional en MariaDB utilizando XAMPP:
1.  Inicia el módulo **MySQL** desde el Panel de Control de XAMPP.
2.  Entra en tu navegador a `http://localhost/phpmyadmin/`.
3.  Ejecuta primero `script.sql` y luego `script_aa2.sql` para actualizar el esquema e incluir la tabla de `contacto`.

### 3. Backend (Python/Flask)
Para que el formulario de contacto funcione y envíe el acuse de recibo:
1. Asegúrate de tener Python instalado y las dependencias requeridas (`pip install flask pymysql`).
2. En la terminal, ejecuta el servidor backend: `python app_backend.py`.
3. El servidor correrá en `http://127.0.0.1:5000`. Ya puedes enviar el formulario desde la web.

### 4. Automatización FTP
Para subir el proyecto a un servidor mediante el módulo nativo `ftplib`, ejecuta en consola `python subir_ftp.py`. El script comprimirá el código fuente y lo enviará al destino configurado.

---

## 📊 Diseño y Normalización de la Base de Datos

La base de datos se normalizó hasta la **Tercera Forma Normal (3FN)** para evitar redundancias y anomalías lógicas:

### 1. Entidades y Atributos Identificados
*   **Categorias:** `(id [PK], nombre, descripcion)`
*   **Productos:** `(id [PK], nombre, descripcion, precio, stock, categoria_id [FK])`
*   **Clientes:** `(id [PK], cedula_ruc [UQ], nombre, telefono, email, direccion)`
*   **Pedidos:** `(id [PK], cliente_id [FK], fecha, total, estado)`
*   **Detalle_Pedido:** `(id [PK], pedido_id [FK], producto_id [FK], cantidad, precio_unitario)`
*   **Ofertas:** `(id [PK], producto_id [FK], descuento_porcentaje, fecha_inicio, fecha_fin, descripcion)`

### 2. Resumen del Proceso de Normalización
*   **1FN:** Se eliminaron los campos repetitivos (lista de productos dentro de un mismo pedido) separándolos en una tabla de detalles (`detalle_pedido`) vinculada a la cabecera.
*   **2FN:** Se extrajeron los datos de los productos que solo dependían parcialmente de la clave del pedido, creando la entidad independiente `productos`.
*   **3FN:** Se eliminaron las dependencias transitivas. Los datos del cliente (nombre, dirección) se extrajeron a la entidad `clientes` ya que no dependían de la clave del pedido sino del RUC/Cédula del comprador.

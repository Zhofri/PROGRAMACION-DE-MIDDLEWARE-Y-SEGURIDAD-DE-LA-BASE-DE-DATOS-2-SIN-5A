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
3.  **JavaScript & jQuery:** Dinamismo, carga de contenidos sin recarga de página (Single Page Application simulada), filtros en catálogo y validación de formularios en el cliente.
4.  **MariaDB / MySQL:** Motor de base de datos relacional para la persistencia transaccional.

---

## 📂 Estructura del Repositorio
*   `index.html`: Estructura base del portal web (Cabecera, Navegación, Cuerpo dinámico y Pie de página).
*   `style.css`: Hojas de estilo para la presentación responsiva del portal.
*   `app.js`: Lógica jQuery que controla las transiciones y dinamismo de la página.
*   `script.sql`: Script de base de datos relacional (DDL para creación de tablas y DML para operaciones CRUD de prueba).
*   `assets/`: Carpeta de recursos gráficos (logotipo e imágenes).

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
3.  Crea una nueva base de datos llamada `materials_fadrell` o simplemente ve a la pestaña **SQL**.
4.  Copia y pega el contenido del archivo `script.sql` en la caja de consultas SQL de phpMyAdmin.
5.  Ejecuta la consulta. Se crearán automáticamente las tablas, restricciones de integridad, se insertarán los datos iniciales y se ejecutarán las consultas CRUD demostrativas.

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

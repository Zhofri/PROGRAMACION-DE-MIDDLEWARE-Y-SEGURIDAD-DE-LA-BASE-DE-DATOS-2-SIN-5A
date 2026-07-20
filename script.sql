-- ==========================================================================
-- UNIVERSIDAD INTERNACIONAL DEL ECUADOR
-- CARRERA DE SISTEMAS DE LA INFORMACIÓN
-- ASIGNATURA: Programación de Middleware y Seguridad de la Base de Datos 2-SIN-5A
-- TEMA: Script SQL de Base de Datos para el Emprendimiento "Materials Fadrell"
-- AUTOR: Zhofri Joel Guamán Quichimbo
-- DOCENTE: HECTOR GUILLERMO AVALOS SILVA
-- MOTOR: MariaDB / MySQL
-- ==========================================================================

-- --------------------------------------------------------------------------
-- 1. CREACIÓN DE LA BASE DE DATOS Y USO
-- --------------------------------------------------------------------------
DROP DATABASE IF EXISTS materials_fadrell;
CREATE DATABASE materials_fadrell CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE materials_fadrell;

-- --------------------------------------------------------------------------
-- 2. DEFINICIÓN DE TABLAS (OPERACIONES DDL - CREATE)
-- --------------------------------------------------------------------------

-- Tabla: CATEGORIAS (Clasificación de materiales)
CREATE TABLE categorias (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    CONSTRAINT pk_categorias PRIMARY KEY (id),
    CONSTRAINT uq_categoria_nombre UNIQUE (nombre)
) ENGINE=InnoDB;

-- Tabla: PRODUCTOS (Catálogo de materiales de construcción)
CREATE TABLE productos (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    categoria_id INT,
    CONSTRAINT pk_productos PRIMARY KEY (id),
    CONSTRAINT chk_precio_positivo CHECK (precio >= 0.00),
    CONSTRAINT chk_stock_positivo CHECK (stock >= 0),
    CONSTRAINT fk_productos_categorias FOREIGN KEY (categoria_id) 
        REFERENCES categorias(id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Tabla: CLIENTES (Compradores particulares o constructoras)
CREATE TABLE clientes (
    id INT AUTO_INCREMENT,
    cedula_ruc VARCHAR(13) NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    telefono VARCHAR(15),
    email VARCHAR(150),
    direccion TEXT,
    CONSTRAINT pk_clientes PRIMARY KEY (id),
    CONSTRAINT uq_cliente_ruc UNIQUE (cedula_ruc),
    CONSTRAINT chk_email_formato CHECK (email LIKE '%@%.%')
) ENGINE=InnoDB;

-- Tabla: PEDIDOS (Cabecera de transacciones de compra)
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    estado VARCHAR(20) DEFAULT 'Pendiente',
    CONSTRAINT pk_pedidos PRIMARY KEY (id),
    CONSTRAINT chk_pedido_total CHECK (total >= 0.00),
    CONSTRAINT chk_pedido_estado CHECK (estado IN ('Pendiente', 'Pagado', 'Entregado', 'Cancelado')),
    CONSTRAINT fk_pedidos_clientes FOREIGN KEY (cliente_id) 
        REFERENCES clientes(id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Tabla: DETALLE_PEDIDO (Relación de productos comprados)
CREATE TABLE detalle_pedido (
    id INT AUTO_INCREMENT,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    CONSTRAINT pk_detalle_pedido PRIMARY KEY (id),
    CONSTRAINT chk_detalle_cantidad CHECK (cantidad > 0),
    CONSTRAINT chk_detalle_precio CHECK (precio_unitario >= 0.00),
    CONSTRAINT fk_detalle_pedidos FOREIGN KEY (pedido_id) 
        REFERENCES pedidos(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_detalle_productos FOREIGN KEY (producto_id) 
        REFERENCES productos(id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Tabla: OFERTAS (Descuentos especiales de productos en el mes)
CREATE TABLE ofertas (
    id INT AUTO_INCREMENT,
    producto_id INT NOT NULL,
    descuento_porcentaje DECIMAL(5, 2) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    descripcion TEXT,
    CONSTRAINT pk_ofertas PRIMARY KEY (id),
    CONSTRAINT chk_descuento_rango CHECK (descuento_porcentaje > 0.00 AND descuento_porcentaje <= 100.00),
    CONSTRAINT chk_rango_fechas CHECK (fecha_fin >= fecha_inicio),
    CONSTRAINT fk_ofertas_productos FOREIGN KEY (producto_id) 
        REFERENCES productos(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;


-- --------------------------------------------------------------------------
-- 3. INSERCIÓN DE DATOS DE PRUEBA (OPERACIONES DML - INSERT/CREATE)
-- --------------------------------------------------------------------------

-- Insertar Categorías
INSERT INTO categorias (nombre, descripcion) VALUES
('Cementos', 'Cementos grises, blancos y aditivos de fraguado'),
('Aceros', 'Varillas corrugadas de diferentes diámetros, alambres y mallas de refuerzo'),
('Bloques y Ladrillos', 'Bloques de hormigón prensado y ladrillo artesanal panelón lojano'),
('Herramientas', 'Herramientas manuales para albañilería y carpintería');

-- Insertar Productos
INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id) VALUES
('Cemento Chimborazo IP', 'Saco de cemento Portland tipo IP de 50 Kg', 8.50, 450, 1),
('Cemento Holcim Fuerte', 'Saco de cemento Holcim de alta resistencia de 50 Kg', 9.20, 300, 1),
('Varilla Corrugada 12mm', 'Varilla de acero corrugado de 12 mm x 12 metros', 12.80, 150, 2),
('Varilla Corrugada 10mm', 'Varilla de acero corrugado de 10 mm x 12 metros', 8.90, 200, 2),
('Bloque de Hormigón 15x20x40', 'Bloque de hormigón prensado estructural', 0.45, 2500, 3),
('Ladrillo Panelón Lojano', 'Ladrillo cocido tradicional de arcilla para fachadas y paredes', 0.28, 5000, 3),
('Pala Metálica Truper', 'Pala de punta redonda con mango de madera de alta resistencia', 18.50, 45, 4),
('Flexómetro Stanley 8m', 'Cinta métrica profesional de 8 metros de largo', 11.20, 60, 4);

-- Insertar Clientes
INSERT INTO clientes (cedula_ruc, nombre, telefono, email, direccion) VALUES
('1104567890', 'Juan Fernando Pérez Valdivieso', '0991234567', 'juan.perez@email.com', 'Av. Orillas del Zamora y Guayaquil, Loja'),
('1190012345001', 'Constructora Loja & Asociados S.A.', '072571122', 'contacto@lojaasociados.com', 'Av. Cuxibamba y Salvador Bustamante Celi, Loja'),
('1107894561', 'María Augusta Sarango Ortega', '0987654321', 'maria.sarango@email.com', 'Calle Sucre y Lourdes, Loja');

-- Insertar Oferta del Mes (Cemento Chimborazo IP con descuento)
INSERT INTO ofertas (producto_id, descuento_porcentaje, fecha_inicio, fecha_fin, descripcion) VALUES
(1, 15.29, '2026-07-01', '2026-07-31', 'Oferta especial de Julio. El saco de Cemento Chimborazo IP baja de $8.50 a $7.20 neto por compras mayores a 50 unidades.');

-- Insertar un Pedido Inicial (Cabecera)
INSERT INTO pedidos (cliente_id, total, estado) VALUES
(2, 477.50, 'Pagado');

-- Insertar Detalles del Pedido
INSERT INTO detalle_pedido (pedido_id, producto_id, cantidad, precio_unitario) VALUES
(1, 1, 50, 7.20), -- Cemento Chimborazo con el precio de la oferta
(1, 3, 10, 11.75); -- Varillas de 12mm con un descuento especial por volumen


-- --------------------------------------------------------------------------
-- 4. OPERACIONES DE CONSULTA (OPERACIONES DML - READ)
-- --------------------------------------------------------------------------

-- Consulta 1: Catálogo completo de productos con sus respectivas categorías (JOIN)
SELECT 
    p.id AS Código,
    p.nombre AS Producto,
    c.nombre AS Categoría,
    p.precio AS 'Precio Normal',
    p.stock AS Existencias
FROM productos p
INNER JOIN categorias c ON p.categoria_id = c.id
ORDER BY c.nombre, p.nombre;

-- Consulta 2: Productos que se encuentran actualmente en oferta y su precio promocional calculado
SELECT 
    p.nombre AS Producto,
    p.precio AS 'Precio Lista',
    o.descuento_porcentaje AS '% Descuento',
    ROUND(p.precio * (1 - (o.descuento_porcentaje / 100)), 2) AS 'Precio Oferta',
    o.fecha_fin AS 'Válido Hasta',
    o.descripcion AS 'Detalle Oferta'
FROM ofertas o
INNER JOIN productos p ON o.producto_id = p.id
WHERE CURRENT_DATE BETWEEN o.fecha_inicio AND o.fecha_fin;

-- Consulta 3: Historial detallado de compras por cliente
SELECT 
    pe.id AS 'Num Pedido',
    c.nombre AS Cliente,
    pe.fecha AS 'Fecha Compra',
    p.nombre AS Producto,
    dp.cantidad AS Cantidad,
    dp.precio_unitario AS 'P. Unitario',
    (dp.cantidad * dp.precio_unitario) AS Subtotal,
    pe.estado AS Estado
FROM pedidos pe
INNER JOIN clientes c ON pe.cliente_id = c.id
INNER JOIN detalle_pedido dp ON dp.pedido_id = pe.id
INNER JOIN productos p ON dp.producto_id = p.id
ORDER BY pe.fecha DESC;


-- --------------------------------------------------------------------------
-- 5. OPERACIONES DE ACTUALIZACIÓN (OPERACIONES DML - UPDATE)
-- --------------------------------------------------------------------------

-- Actualización 1: Reducir el stock de productos tras una venta simulada
UPDATE productos 
SET stock = stock - 50 
WHERE id = 1;

-- Actualización 2: Cambiar la dirección y el teléfono de un cliente específico
UPDATE clientes 
SET direccion = 'Calle Bolívar e Imbabura, Edificio El Centro Of. 201, Loja',
    telefono = '0984561230'
WHERE cedula_ruc = '1104567890';

-- Actualización 3: Actualizar el precio de un producto por inflación del acero
UPDATE productos 
SET precio = 13.50 
WHERE id = 3;


-- --------------------------------------------------------------------------
-- 6. OPERACIONES DE ELIMINACIÓN (OPERACIONES DML - DELETE)
-- --------------------------------------------------------------------------

-- Eliminación 1: Borrado físico de una oferta expirada (Simulación)
DELETE FROM ofertas 
WHERE fecha_fin < '2026-07-01';

-- Eliminación 2: Borrado físico de un cliente que no tiene historial de compras (Seguridad por FK)
-- Para asegurar el borrado, primero se comprueba que no tenga compras vinculadas
DELETE FROM clientes 
WHERE id = 3 
  AND id NOT IN (SELECT DISTINCT cliente_id FROM pedidos);

-- Fin del script

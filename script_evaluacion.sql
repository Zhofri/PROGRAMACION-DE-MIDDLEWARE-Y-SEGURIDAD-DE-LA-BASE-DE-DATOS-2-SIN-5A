-- Script de Evaluacion - Zhofri Joel Guaman Quichimbo
-- Profesor: HECTOR GUILLERMO AVALOS SILVA
-- UIDE Sede Loja - Materials Fadrell

-- 1. Usar la base de datos
USE `materials_fadrell`;

-- 2. Añadir columna imagen_url a la tabla productos
ALTER TABLE `productos` ADD COLUMN `imagen_url` VARCHAR(255) DEFAULT NULL;

-- 3. Crear tabla noticias
CREATE TABLE IF NOT EXISTS `noticias` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `fecha` DATE NOT NULL,
    `titulo` VARCHAR(200) NOT NULL,
    `contenido` TEXT NOT NULL,
    `imagen_url` VARCHAR(255) DEFAULT NULL
);

-- 4. Actualizar productos con las imagenes
UPDATE `productos` SET `imagen_url` = 'assets/producto_cemento.jpg' WHERE `id` IN (1, 2);
UPDATE `productos` SET `imagen_url` = 'assets/producto_varillas.jpg' WHERE `id` IN (3, 4);
UPDATE `productos` SET `imagen_url` = 'assets/producto_bloques.jpg' WHERE `id` IN (5, 6);
UPDATE `productos` SET `imagen_url` = 'assets/producto_herramientas.jpg' WHERE `id` IN (7, 8);

-- 5. Actualizar ofertas al mes de agosto de 2026
UPDATE `ofertas` 
SET `fecha_inicio` = '2026-08-01', 
    `fecha_fin` = '2026-08-31',
    `descripcion` = REPLACE(`descripcion`, 'Julio', 'Agosto');

-- 6. Insertar 3 noticias con fechas realistas
INSERT INTO `noticias` (`fecha`, `titulo`, `contenido`, `imagen_url`) VALUES
('2026-08-10', 'Nuevos Cementos Ecologicos con Baja Huella de Carbono', 'Hemos traido una nueva linea de cementos ecologicos que ayudan a cuidar el medio ambiente.', 'assets/noticia_eco.jpg'),
('2026-07-28', 'Materials Fadrell amplia su flota de entrega a domicilio', 'Ahora contamos con mas camiones para entregar tus materiales de construccion mucho mas rapido en todo Loja.', 'assets/noticia_flota.jpg'),
('2026-07-15', 'Taller Gratuito: Dosificacion Correcta de Hormigon', 'Te invitamos a participar en nuestro taller gratuito para maestros de obra sobre como preparar el mejor hormigon.', 'assets/noticia_taller.jpg');

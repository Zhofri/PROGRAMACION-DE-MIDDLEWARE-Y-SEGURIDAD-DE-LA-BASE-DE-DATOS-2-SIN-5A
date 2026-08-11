-- Script de actualización para Aprendizaje Autónomo 2
-- Proyecto: Materials Fadrell
-- Base de Datos: materials_fadrell

USE materials_fadrell;

-- Crear la tabla Contacto (E/R) solicitada en el Paso 1
CREATE TABLE IF NOT EXISTS contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- (Opcional) Registro de prueba para verificar funcionamiento manual
-- INSERT INTO contacto (nombre, email, mensaje) VALUES ('Usuario Prueba', 'prueba@email.com', 'Mensaje de validación.');

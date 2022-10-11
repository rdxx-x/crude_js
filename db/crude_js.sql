CREATE DATABASE IF NOT EXISTS crude_js;

USE crude_js;

CREATE TABLE IF NOT EXISTS alumno (
    boleta VARCHAR(10) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    grupo VARCHAR(5) NOT NULL,
    telefono VARCHAR(15),
    correo VARCHAR(30)
);
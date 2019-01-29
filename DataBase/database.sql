CREATE DATABASE productos_db;

use productos_db;

CREATE table productos(
_id  SERIAL PRIMARY KEY,
nombre varchar(180),
descripcion varchar(250),
proveedor varchar(180),
precio decimal,
unidades int,
imagen varchar(200),
creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
estado int
);
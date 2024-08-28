const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./databases/config');

// CREAR EL SERVIDOR EXPRESS
const app = express();

// CONEXION CON LA BASE DE DATOS DE MONGODB USANDO MONGOOSE
dbConnection();

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Ruta para el Backend
// todo: Ruta para authenticacion crear, login, renew, logout
app.use('/api/auth', require('./routes/auth'));


// todo: Ruta CRUD


// EXPORTAR EL SERVIDOR

app.listen(process.env.PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${process.env.PORT}`);
});
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const productosRoutes = require('./routes/productos');
const indexRoutes = require('./routes/index'); // Nuevo

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);  // Nueva ruta para el home y detalles de productos
app.use('/productos', productosRoutes);

app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));

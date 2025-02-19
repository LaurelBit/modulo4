const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const clienteRoutes = require('./routes/clienteRoutes');
const Cliente = require('./models/clienteModel'); // Asegura que este modelo esté bien definido


// Crear servidor
const app = express();

// cambios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar motor de plantillas---------
app.set('view engine', 'ejs');

// Rutas
app.use('/clientes', clienteRoutes);

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/clientesDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch(err => console.log(err));

// Servir archivos estáticos (Bootstrap)
app.use(express.static('public'));

// Ruta principal
app.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find(); // Obtener todos los clientes de MongoDB
    res.render('index', { clientes }); // Enviar clientes a la vista
  } catch (err) {
    res.status(500).send('Error al obtener los clientes');
  }
});

// Iniciar el servidor
app.listen(3001, () => {
  console.log('Servidor en puerto 3001');
});

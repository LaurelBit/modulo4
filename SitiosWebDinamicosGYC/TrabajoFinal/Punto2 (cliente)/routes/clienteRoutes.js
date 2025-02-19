const express = require('express');
const Cliente = require('../models/clienteModel');
const router = express.Router();

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.render('index', { clientes });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Mostrar formulario para agregar cliente
router.get('/add', (req, res) => {
  res.render('addClient');
});

// Agregar cliente
router.post('/add', async (req, res) => {
  const { ci, nombres, apellidos, celular, correo } = req.body;
  try {
    const nuevoCliente = new Cliente({ ci, nombres, apellidos, celular, correo });
    await nuevoCliente.save();
    res.redirect('/clientes');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Editar cliente
router.get('/edit/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    res.render('editClient', { cliente });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Actualizar cliente
router.post('/edit/:id', async (req, res) => {
  const { ci, nombres, apellidos, celular, correo } = req.body;
  try {
    await Cliente.findByIdAndUpdate(req.params.id, { ci, nombres, apellidos, celular, correo });
    res.redirect('/clientes');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Eliminar cliente
router.get('/delete/:id', async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.redirect('/clientes');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

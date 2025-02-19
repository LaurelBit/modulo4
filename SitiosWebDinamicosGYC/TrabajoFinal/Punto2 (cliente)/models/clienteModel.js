const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  ci: String,
  nombres: String,
  apellidos: String,
  celular: String,
  correo: String
});

module.exports = mongoose.model('Cliente', clienteSchema);

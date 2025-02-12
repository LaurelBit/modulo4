const Agenda = require('../models/agendaModel');

// Obtener todos los registros
exports.getAllAgendas = (req, res) => {
  Agenda.getAll((err, data) => {
    if (err) throw err;
    res.render('index', { agendas: data });
  });
};

// Crear un nuevo registro
exports.createAgenda = (req, res) => {
  const { nombres, apellidos, direccion, telefono } = req.body;
  Agenda.create({ nombres, apellidos, direccion, telefono }, (err, data) => {
    if (err) throw err;
    res.redirect('/');
  });
};

// Editar un registro
exports.editAgenda = (req, res) => {
  const { id } = req.params;
  Agenda.getAll((err, data) => {
    if (err) throw err;
    const agenda = data.find(item => item.id === parseInt(id));
    res.render('edit', { agenda });
  });
};

// Actualizar un registro
exports.updateAgenda = (req, res) => {
  const { id } = req.params;
  const { nombres, apellidos, direccion, telefono } = req.body;
  Agenda.update(id, { nombres, apellidos, direccion, telefono }, (err, data) => {
    if (err) throw err;
    res.redirect('/');
  });
};

// Eliminar un registro
exports.deleteAgenda = (req, res) => {
  const { id } = req.params;
  Agenda.delete(id, (err, data) => {
    if (err) throw err;
    res.redirect('/');
  });
};

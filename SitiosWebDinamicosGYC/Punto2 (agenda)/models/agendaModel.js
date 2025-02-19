const db = require('../config/db');

const Agenda = {
  getAll: (callback) => {
    db.query('SELECT * FROM agenda', (err, results) => {
      callback(err, results);
    });
  },

  create: (agendaData, callback) => {
    const { nombres, apellidos, direccion, telefono } = agendaData;
    db.query('INSERT INTO agenda (nombres, apellidos, direccion, telefono) VALUES (?, ?, ?, ?)', 
      [nombres, apellidos, direccion, telefono], (err, results) => {
        callback(err, results);
      });
  },

  update: (id, agendaData, callback) => {
    const { nombres, apellidos, direccion, telefono } = agendaData;
    db.query('UPDATE agenda SET nombres = ?, apellidos = ?, direccion = ?, telefono = ? WHERE id = ?', 
      [nombres, apellidos, direccion, telefono, id], (err, results) => {
        callback(err, results);
      });
  },

  delete: (id, callback) => {
    db.query('DELETE FROM agenda WHERE id = ?', [id], (err, results) => {
      callback(err, results);
    });
  }
};

module.exports = Agenda;

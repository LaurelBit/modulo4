const express = require('express');
const router = express.Router();
const db = require('../database/db');
const upload = require('../middlewares/upload');

// Mostrar productos
router.get('/', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) throw err;
        res.render('index', { productos: results });
    });
});

// Formulario para agregar producto
router.get('/nuevo', (req, res) => {
    res.render('form', { producto: {} });
});

// Guardar nuevo producto con imagen
router.post('/guardar', upload, (req, res) => {
    const { nombre, precio, detalle } = req.body;
    const imagen = req.file ? req.file.filename : 'default.jpg'; // Usa imagen subida o una predeterminada

    db.query('INSERT INTO productos (nombre, precio, imagen, detalle) VALUES (?, ?, ?, ?)', 
        [nombre, precio, imagen, detalle], 
        (err) => {
            if (err) throw err;
            res.redirect('/productos');
        }
    );
});

// Editar producto
router.get('/editar/:id', (req, res) => {
    db.query('SELECT * FROM productos WHERE id = ?', [req.params.id], (err, results) => {
        if (err) throw err;
        res.render('form', { producto: results[0] });
    });
});

// Actualizar producto con imagen
router.post('/actualizar/:id', upload, (req, res) => {
    const { nombre, precio, detalle } = req.body;
    let imagen = req.file ? req.file.filename : req.body.imagen_actual;

    db.query('UPDATE productos SET nombre=?, precio=?, imagen=?, detalle=? WHERE id=?', 
        [nombre, precio, imagen, detalle, req.params.id], 
        (err) => {
            if (err) throw err;
            res.redirect('/productos');
        }
    );
});

// Eliminar producto
router.get('/eliminar/:id', (req, res) => {
    db.query('DELETE FROM productos WHERE id = ?', [req.params.id], (err) => {
        if (err) throw err;
        res.redirect('/productos');
    });
});

module.exports = router;

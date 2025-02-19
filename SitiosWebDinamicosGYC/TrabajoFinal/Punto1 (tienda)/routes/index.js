const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Página de inicio con el catálogo de productos
router.get('/', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) throw err;
        res.render('home', { productos: results });
    });
});

// Página de detalles de un producto
router.get('/producto/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.render('detalle', { producto: results[0] });
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;

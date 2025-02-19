// Importar módulos
const express = require('express');
const app = express();
const path = require('path');

// Configuración del servidor
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Ruta principal - Calculadora
app.get('/', (req, res) => {
    res.render('index', { resultado: null });
});

// Ruta para calcular resultado
app.post('/calcular', (req, res) => {
    const { a, b, operacion } = req.body;
    let resultado;

    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
        resultado = 'Error: Ingrese valores numéricos válidos';
    } else {
        switch (operacion) {
            case 'sumar':
                resultado = numA + numB;
                break;
            case 'restar':
                resultado = numA - numB;
                break;
            case 'multiplicar':
                resultado = numA * numB;
                break;
            case 'dividir':
                resultado = numB !== 0 ? numA / numB : 'Error: División por cero';
                break;
            default:
                resultado = 'Operación no válida';
        }
    }

    res.render('index', { resultado });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

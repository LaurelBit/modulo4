const multer = require('multer');
const path = require('path');

// Configurar almacenamiento
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Ejemplo: imagenNro.jpg
    }
});

// Filtros de archivos (solo imágenes)
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext === '.jpg' || ext === '.png' || ext === '.jpeg') {
        cb(null, true);
    } else {
        cb(new Error('Solo se permiten archivos .jpg, .jpeg, .png'), false);
    }
};

// Middleware de carga
const upload = multer({
    storage,
    fileFilter
}).single('imagen');

module.exports = upload;

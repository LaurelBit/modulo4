const   fs = require('fs');
const data = 'Esto se escribirá en el archivo';

fs.readFile('MiArchivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
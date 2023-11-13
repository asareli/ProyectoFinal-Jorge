const fs = require('fs')

const rutaJson = 'lista.json';

fs.readFile(rutaJson, 'utf8', (error, data) => {
    if (error) {
        console.error('Error al leer el archivo JSON:', error);
        return;
    }
    const libros = JSON.parse(data);
    console.log(libros);
    libros.forEach(libro => {
        console.log(libro.resena);
    })
})
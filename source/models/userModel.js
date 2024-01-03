const fs = require('fs');
const path = require('path');

const userM = {
    fileRoute: path.join(__dirname, '../data/users.json'),

    findAll: () => {
        // Buscamos el contenido del archivo JSON
        const jsonData = fs.readFileSync(modelo.fileRoute, 'utf-8');
        // Convertimos el JSON en Javascript
        const products = JSON.parse(jsonData);

        return products;
    }
};

module.exports = userM;


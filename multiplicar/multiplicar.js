const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.red);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El dato '${base}' no es un numero`)
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla${base}.txt`)
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};
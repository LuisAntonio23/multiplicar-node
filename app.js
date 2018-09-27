const colors = require('colors')
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivoRes => {
            console.log(`Archivo creado: ${archivoRes}`.green);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('comando no reconosido');
}

// console.log(argv.base);
// console.log(argv.limite);


// crearArchivo(base).then(archivoRes => {
//     console.log(`Archivo creado: ${archivoRes}`);
// }).catch(err => {
//     console.log(err);
// });
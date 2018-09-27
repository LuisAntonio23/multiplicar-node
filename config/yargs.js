const ops = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', ops)
    .command('crear', 'crea un archivo von la tabla de multiplicar', ops)
    .help().argv;

module.exports = {
    argv
}
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the base of the multiplication'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Shows the table in the console'
    })
    .option('r', {
        alias: 'range',
        type: 'number',
        default: 10,
        describe: 'The range of number for the table'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'The base must be a number'
        }else if ( isNaN(argv.r) ) {
            throw 'The range must be a number'
        }
        return true
    })
    .argv;


module.exports = argv;
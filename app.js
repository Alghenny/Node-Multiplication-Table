
const { createFile } = require('./helpers/mult');
const argv = require('./config/yargs');


console.clear();

createFile( argv.b, argv.l, argv.r )
    .then( file => console.log(file, 'creado'))
    .catch( err => console.log(err));
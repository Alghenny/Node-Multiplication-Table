const fs = require('fs');
const colors = require('colors');


const createFile = async( base, list, range ) => {

    try {
        console.log('=================='.yellow);
        console.log('  Tabla del:'.cyan, colors.blue( base ));
        console.log('=================='.yellow);
    
        let output = '';
        let cons = '';
    
        for(let i = 1; i <= range; i++){
            output += `${ base } x ${ i } = ${ base * i }\n`;
            cons += `${ base } ${'x'.green} ${ i } ${'='.green} ${colors.green.underline(`${base * i}`)}\n`;
        }
        
        list ? console.log(cons) : null;
    
        fs.writeFileSync(`./output/tabla-${base}.txt`, output);
    
        return `tabla-${ base }.txt`;
    } catch (error) {
       throw error 
    }
}

module.exports = {
    createFile
}
const fs = require('fs');


const crearArchivoTabla = ( base = 5) => {
    console.log('==================================');
    console.log(`Tabla de Multiplicar del ${base}`);
    console.log('==================================');

    let salida = '';

    for (let index = 1; index <=10; index++) {
        salida += `${ base } x ${ index } = ${ base * index }\n`;    
    }

    console.log(salida);

    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
            console.log(`tabla-${base}.txt creado`);
        },
     )
};

module.exports = {
    crearArchivoTabla
}
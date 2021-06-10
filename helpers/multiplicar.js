const fs = require('fs');


const crearArchivoTabla = async( base = 5) => {
   
    try{
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
            },
         )
    
         return `tabla-${base}.txt`;
    }catch(err){
        throw err;
    }
};

module.exports = {
    crearArchivoTabla
}
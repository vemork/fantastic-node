
const { crearArchivoTabla } = require('./helpers/multiplicar')

console.clear();

const base = 5;

crearArchivoTabla(base)
.then( nombreArchivo => console.log(`El archivo ${ nombreArchivo } fue creado`))
.catch( err => console.log(`Se ha generado un error ${err}`) );
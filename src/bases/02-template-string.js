// Template string
const nombre = 'Marcelo';
const apellido = 'Cartagena';

// const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = ` 
${nombre} 
${apellido}
${1 + 1}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(` ${getSaludo(nombre)} `);
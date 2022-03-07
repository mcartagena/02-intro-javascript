// variables y constantes

const nombre = 'Marcelo';
const apellido = 'Cartagena';

let valordado = 6;
valordado = 5;

console.log(nombre, apellido, valordado);

// No se debe utilizar var
if(true){
    let valorDado = 6;
    const nombre = "Peter";

    console.log(valorDado);
    console.log(nombre);
}

console.log(valordado);
console.log(nombre);
// funciones

// function saludar(nombre) {
// const saludar = function(nombre){
//     return `Hola ${nombre}, como estas?`;
// }

// const saludar = (nombre) => {
//     return `Hola ${nombre}, como estas?`;
// };

// const saludar = (nombre) => `Hola ${nombre}, como estas?`;

const saludar = () => 'Hola Mundo!';


// saludar = 30;

// console.log(saludar('Marcelo'));
console.log(saludar);
console.log(saludar());

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'marce',
//     };
// }

const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'marce',
    });


console.log(getUser());

// Tarea:
// 1.- Transforme a una funcion de flecha
// 2.- Tiene que retornar un objeto implicito
// 3.- Pruebas

// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     };
// }
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuariioActivo = getUsuarioActivo('Marcelo');
console.log(usuariioActivo);


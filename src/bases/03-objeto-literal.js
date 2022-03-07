// objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 2344574,
        lat: 13.2323,
        lng: 34.8737467,
    }
};

// console.table(persona);
// const persona2 = persona; // copiamos la referencia del objeto por lo que es el mismo objeto
const persona2 = {...persona};

persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);

// Destructuracion
// Asignacion Destructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const { edad, nombre, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const userContext = ({clave, nombre, edad, rango = 'capitan'}) => {
    // console.log(usuario);
    // console.log(nombre);
    // console.log(edad);
    // console.log(rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    };
};

const {nombreClave, anios, latlng: {lat, lng}} = userContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
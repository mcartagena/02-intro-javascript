import getHeroById from "08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroById(2);
//         console.log(p1);
//         resolve(p1);
//         // reject('No se encontro el heroe... ');
//     }, 2000);
// });
//
//
// promesa.then((heroe) => {
//     console.log('Then de la promesa, heroe', heroe);
// }).catch(err => console.warn(err));

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroById(id);
            console.log(p1);
            // if(p1 == undefined) {
            //     reject('No se encontro el heroe... ');
            // } else {
            //     resolve(p1);
            // }
            if (p1) {
                resolve(p1);
            } else {
                reject('No se encontro el heroe... ');
            }
        }, 2000);
    });
};

getHeroByIdAsync(1)
    .then(console.log)
    // .catch(err => console.warn(err));
    .catch(console.warn);
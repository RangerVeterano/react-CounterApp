import { getHeroeById } from "./bases/08-imp-exp";

//una promesa funciona por medio de callbacks
//resolve ->  la promesa se ha cumplido
//rejetct -> la promesa no se ha podido cumplir

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         //La promesa se cumple
//         //Y le mandamo un parámetro
//         resolve(heroe); 

//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa
//     .then((data) => {
//         console.log('then de la promesa');
//         console.log(data);
//     }).catch((err) => {
//         console.warn(err);
//     });

//Con esta funcion lo que conseguimos es poder mandar el id para realizar la busqueda
const getHeroeByIdAsync = (id) => {

    //Le decimos que tiene que hacer el return de la promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            if (heroe) {
                //La promesa se cumple
                //Y le mandamo un parámetro
                resolve(heroe);

            } else {
                reject(`no se ha podido encontrar el heroe con id: ${id}`);
            }


            // reject('No se pudo encontrar el heroe');
        }, 2000);
    });
};
getHeroeByIdAsync(3)
    .then(console.log) //Imprime por pantalla lo primero que reciba la fucncion
    .catch(console.warn);


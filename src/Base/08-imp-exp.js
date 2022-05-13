//si necesitamos importar algo de un archivo que ya tiene una exportacion por defecto podemos
//desestructurar la importacion para extraer lo que solo necesitamos

import cualquierCosaArr from '../data/heroes';  // Otro tipo de importacion

//Cuando importamos algo de un sitio donde tiene como exportacion por definido una cosa, 
//no es necesario indicar que es lo que queremos exportar, sino que con indicar como lo queremos
//llamar dentro del fichero nos sobra

export const getHeroeById = (id) => cualquierCosaArr.find(heroe => heroe.id === id);

// console.log(getHeroeById(2));

export const getHeroeByOwner = owner => cualquierCosaArr.filter(heroe => heroe.owner === owner);

// console.log(getHeroeByOwner('Marvel'));
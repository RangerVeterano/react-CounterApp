const personajes = ['Ignacio', 'Jorge', 'Topo', 'Mauro'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);
// console.log(personajes[3]);

//para la destructuracion de arreglos es practicamente igual que la de objetos
//poniendo comas vacias indicamos que se salte elementos del arreglo

const [, , humano] = personajes;

console.log(humano);

export const devuelveArreglo = () => ['ABC', 123];

const [letras, numeros] = devuelveArreglo();

console.log(letras, numeros);

//tarea

const estado = (valor) => [valor, () => { console.log('Hola Mundo'); }];

const [nombre, setNombre] = estado('Ignacio');

console.log(nombre);

setNombre();


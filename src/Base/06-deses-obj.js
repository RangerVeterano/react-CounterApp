//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'ignacio',
    edad: 23,
    clave: 'RangerVeterano',
    rango: 'Ranger del desierto'
};

//Esto es tedioso para ver toda la informacion
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)

//Extraemos los valores que solo queremos de persona, en este caso solo nombre
//Entonces esto crea una constante llamada "nombre"
//con el valor de persona.nombre

const { nombre, clave, edad } = persona;


//Si por X tenemos la variable "nombre" usada le podemos dar otro nombre
// const { nombre:nombre2 } = persona;

//Podemos desestructurar como argumentos de la funcion
// const devolverPersona = (usuario) => {
//Con esto solo extraemos el nombre y lo demás es ignorado
const context = ({ nombre, edad, clave, rango = 'Capitan' }) => {

    // console.log(nombre,edad,rango)
    return {
        nombreClave: clave,
        anyos: edad,
        latlng: {
            lat: 123,
            lng: 321
        }
    };
};

//Para si necesitamos poder desestrutar un objeto dentro de un objeto
//Con los : {} le decimos que busque primero la propiedad y luego acceda a sus valores
// const { nombreClave, anyos, latlng: { lng, lat } } = context(persona);

//lo de abajo es lo mismo pero en dos lineas
const { nombreClave, anyos, latlng } = context(persona);
const { lng, lat } = latlng;

console.log(nombreClave, anyos);
console.log(lng, lat);
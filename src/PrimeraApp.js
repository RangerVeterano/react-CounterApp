import React from "react";


import PropTypes from 'prop-types';

//Los componentes en react se usan el upperCamelCase

//importamos Fragment, nos permite ahorrarnos un div
// import { Fragment } from "react";

//Esto es un FC FunctionalComponent 

//Indicamos en los parametros de la funcions lo que queremos recibir
//podemos indicar un valor por defecto si no se manda nada
//Lo suyo es coger los datos de forma desestructurada
const PrimeraApp = ({ saludo, subtitulo }) => {

    // if(!saludo) {
    //     throw new Error('El saludo es necesario');
    // }


    // const saludo =  {
    //     nombre : 'ignacio',
    //     edad: 23
    // };

    // const saludo = 'Hola mundo';


    //Creamos, o mejor en este caso devolvemos una etiqueta para renderizar

    //para poder retornar más de una linea lo devolvemos entre parentesis

    //Con Fragment podemos ahorrarnos poner el div y de esta forma podemos poner
    //los dos elementos sin necesidad de insertarlos dentro de un div

    //De forma alternativa podemos dejar llaves vacias para conseguir el mismo
    //Efecto que con fragment 

    //para imprimir variables ponemos {}, casi cualquier expresión de js
    return (
        <React.StrictMode>
            <>
                <h1>{saludo}</h1>
                {/* <pre>{JSON.stringify(saludo, null,3)}</pre> */}
                <p>{subtitulo}</p>
            </>
        </React.StrictMode>
    );

};

//indicamos el tipado de las propiedades que tiene que recibir el hijo
//indicamos si son requeridas u opcionales (por defecto son opcionales)
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired, //con isRequired indicamos que tiene que ser requerido, por defecto no lo se 

};

//podemos indicar los valores por defecto de las propiedades
PrimeraApp.defaultProps = {
    subtitulo : 'Soy un subtitulo'
}

//indicamos cual va a ser la exportacion por defecto
export default PrimeraApp;
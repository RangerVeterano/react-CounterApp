
//importacion para tipar los props
import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({ value }) => {

    //Esto es como un getter y un setter
    //El useState devuelve un arreglo que el primer valor es el valor enviado y el segundo valor es la funcion que permite cambiar la variable recibida
    const [counter, setCounter] = useState(0);

    // handleAdd
    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    };

    const handleSubstract = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(0); 
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            {/* Para indicar un evento tenemos que indicar una funcion */}
            {/* La funcion recibe el evento "e" */}
            {/* Como solo recibe un parametro podemos dejar la referencia de la funcion unicamente */}
            {/* Lo de arriba quiere decir lo mismo que esto : (e) => {handleAdd(e)} */}
            <button onClick={handleAdd}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleSubstract}>+1</button>
        </>
    );

};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

//Exportamos como predeterminado nuestra funcion
export default CounterApp;
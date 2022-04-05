
//importacion para tipar los props
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    // handleAdd
    const handleAdd = (e) => {
        console.log(e);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            {/* Para indicar un evento tenemos que indicar una funcion */}
            {/* La funcion recibe el evento "e" */}
            {/* Como solo recibe un parametro podemos dejar la referencia de la funcion unicamente */}
            {/* Lo de arriba quiere decir lo mismo que esto : (e) => {handleAdd(e)} */}
            <button onClick={handleAdd}>+1</button>
        </>
    );

};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

//Exportamos como predeterminado nuestra funcion
export default CounterApp;
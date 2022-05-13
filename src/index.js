// import React from "react";

//para poder renderizar elementos se emplea ahora el createRoot
import { createRoot } from "react-dom/client";

//importamos el componente que hemos creado
// import PrimeraApp from "./PrimeraApp";


import CounterApp from "./CounterApp";

//importamos el archivo de estilos, hay que especificar la extension 
import "./index.css"


//hacemos la referecia al div donde va a ser el contenedor
const contenedor = document.querySelector('#root');

//Creamos el contenedor del elemento que hemos recogido
const root = createRoot(contenedor);

//Renderizamos el componente
//podemos mandar numeros con una expresion de js saludo={123}
root.render(<CounterApp value={54321} />); 

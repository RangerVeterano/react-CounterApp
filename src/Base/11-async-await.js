// const getImagenPromesa = () =>
//     new Promise(resolve => resolve('http://hijdsaijhdsahjdsajhsda.com'));

// getImagenPromesa().then(console.log);

const getImagen = async () => {

    //Para poder gestionar un error en una funcion asincrona tenemos que usar 
    //La estrucutra trycatch

    try {
        const apiKey = 'kBTw10XFyKgf8XnCTXsiVsPTQ7HRGHa0';
        // await se espera a que la promesa se cumpla
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
        const { data } = await resp.json(); //Desestructuramos data
        const { url } = data.images.original; //Desestructuramos data

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        //manejo del error
        console.log(error)
    }


};

getImagen();





// //Las promesas se pueden encadenar sin problemas
// peticion.then((resp) => resp.json())
//     //Desestructuramos para solo coger la data
//     .then(({ data }) => {

//         //Extraemos solo la url

//
//     })
//     .catch(console.warn); 
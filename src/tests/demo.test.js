// console.log('hola mundo')

describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben de ser iguales los strings', () => {

        //1. inicializacion
        const mensaje = 'Hola Mundo';

        //2. estímulo
        const mensaje2 = `Hola Mundo`;

        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);

    });
});

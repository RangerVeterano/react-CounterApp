import { devuelveArreglo } from "../../Base/07-deses-arr";

describe('Pruebas de desestrucutracion', () => {
    test('debe de retornar un numero y un string', () => {

        const [letras, numeros] = devuelveArreglo();

        expect(letras).toBe('ABC')
        expect(numeros).toBe(123)

    });
});
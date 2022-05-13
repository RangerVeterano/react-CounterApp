import '@testing-library/jest-dom';

import { getSaludo } from "../../Base/02-template-string";

describe('Pruebasen 02-template-string.js', () => {

    test('getSaludo debe de retornar hola fernando', () => {
        const nombre = 'ignacio';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    });

    test('getSaludo debe de rertornar hola carlos si no tiene valor', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    });

});
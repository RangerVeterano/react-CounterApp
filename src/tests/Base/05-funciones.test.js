import { getUser, getUsuarioActivo } from "../../Base/05-funciones";

describe('Purebas en 05-funciones', () => {

    test('debe de retornar un objeto', () => {

        const userTest = {
            uid: '6969',
            username: 'RangerVeterano'
        };

        const user = getUser();

        expect(user).toStrictEqual(userTest);

    });

    test('getUserActivo', () => {

        const nombre = 'Paco'

        const active = {
            uid: 'ABC1234', username: nombre
        };

        const activeUser = getUsuarioActivo(nombre);

        expect(activeUser).toStrictEqual(active)

    });

});
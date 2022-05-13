import { getHeroeById, getHeroeByOwner } from "../../Base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {

    test('Debe de retornar un heroe por id', () => {

        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    });

    test('Debe de retornar un undefined si heroe no existe', () => {

        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });

    test('Debe de todos los heroes de dc', () => {

        const owner = 'DC';

        const heroesS = getHeroeByOwner(owner)

        const heroesa = heroes.filter(h => h.owner === owner);

        expect(heroesS).toEqual(heroesa);

    });

    test('Debe de todos los heroes de Marvel en numero', () => {

        const owner = 'Marvel';

        const heroe= getHeroeByOwner(owner)

        expect(heroe.length).toBe(2);

    });

});
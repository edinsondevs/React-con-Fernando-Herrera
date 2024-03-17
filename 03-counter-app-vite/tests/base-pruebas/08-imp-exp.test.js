import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () =>
{


    test('getHeroeById debe retornar un heroe por ID', () =>
    {
        const id = 1;
        const heroe = getHeroeById(id)
        expect(heroe).toEqual({ "id": 1, "name": "Batman", "owner": "DC" })
    });

    test('getHeroeById debe retornar undefined si no existe', () =>
    {
        const id = 100;
        const heroe = getHeroeById(id)
        expect(heroe).toBeFalsy();
    });

    test('getHeroeByOwner debe retornar arreglo con los heroes de DC', () =>
    {
        const owner = "DC"
        const resp = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]
        const heroe = getHeroesByOwner(owner)
        expect(heroe).toEqual(resp)
        expect(heroe).toHaveLength(3)
    });

    test('getHeroeByOwner ', () =>
    {
        const owner = "Marvel";
        const resp = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]
        const heroe = getHeroesByOwner(owner)
        expect(heroe).toHaveLength(2)
        expect(heroe).toEqual(resp)
    });
})
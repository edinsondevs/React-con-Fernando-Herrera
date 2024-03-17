import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en archivo 02', () =>
{

    test('get Saludo debe retornar "Hola Edinson"', () =>
    {
        const name = "Edinson";
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    })
})
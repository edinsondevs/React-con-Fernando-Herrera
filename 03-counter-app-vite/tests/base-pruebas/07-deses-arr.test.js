import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('07 Pruebas-deses-arr', () =>
{

    test('debe retornar un string y un numero', () =>
    {
        const [letters, numbers] = retornaArreglo()
        // console.log(typeof letters)
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')
    })

})
import { getImagen } from "../../src/base-pruebas/11-async-await";

const getImagenError = () => {
    return "No se encontro la imagen..."
}
describe('Pruebas en 11-async-await', () => {

    test('getImagen debe retornar url de la imagen', async () =>  {
        const url = await getImagen()
        expect(typeof url).toBe('string')
    });
    
    test('getImagen debe retornar error por no encontrar la imagen', async () =>  {
        const url = getImagenError()
        expect( url ).toBe("No se encontro la imagen...")
    });
})
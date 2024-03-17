import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Test 06-desestructuracion objetos', () =>
{

    test('Esta prueba debe desestructurar  un objeto', () =>
    {

        const objeto = {
            nombreClave: "Papilla",
            anios: 39,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const getObjeto = usContext({ clave: "Papilla", nombre: "Edinson", edad: 39 })
        expect(getObjeto).toEqual(objeto)
    })
})
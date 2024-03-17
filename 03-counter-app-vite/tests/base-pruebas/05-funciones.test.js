import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Test Funciones', () =>
{

    test('getUser debe retornar un objeto', () =>
    {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser(testUser)
        expect(testUser).toEqual(user)
    })
})

describe('Test de Tarea', () =>
{

    test('GetUsuario debe retornar un objeto', () =>
    {
        const name = "Juan"

        const getUsuario = getUsuarioActivo(name)
        expect(getUsuario.username).toEqual(name)
        expect(getUsuario).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
})
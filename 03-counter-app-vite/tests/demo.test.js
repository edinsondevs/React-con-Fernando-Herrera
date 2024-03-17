
describe('Pruebas en DemoComponent', () => {
    test('Esta es una prueba', () => { 
        // 1. Inicializar
        const message1 = "Hola Mundo"
        // 2. Estimulo
        const message2 = message1.trim()
        // 3. Observar el comportamiento
        expect( message1 ).toBe( message2 )
    })
})
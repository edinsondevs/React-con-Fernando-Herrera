import { authSlice, checkingCredentials, login, logout } from "../../../store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";


describe('pruebas en el authSlice', () => {
    
    test('debe regresar el estado inicial y llamarse auth ', () => {
        expect(authSlice.name).toEqual('auth');
    });
    
    test('Comprobando el estado inicial ', () => {
        // Comprobando el estado inicial
        const state = authSlice.reducer(initialState, {});
        expect( state ).toEqual(initialState);    
    });
    
    test('Debe realizar la autenticación ', () => {
        // Suponiendo que ya esta autenticado, le paso los datos del usuario que se quiere autenticar
        const state = authSlice.reducer(initialState, login( demoUser ));
        // Espero a que la respuesta sea los datos del usuario autenticado
        expect(state).toEqual( authenticatedState );
    });
    
    test('Debe realizar la logout sin argumentos ', () => {
        // Realizar el logout sin argumentos y el estado inicial es usuario autenticado
        const state = authSlice.reducer(authenticatedState, logout( ));
        // Espero a que la respuesta sea los datos como no autenticado
        expect(state).toEqual( notAuthenticatedState );
    });
    
    test('Debe realizar la logout y mostrar mensaje de error ', () => {
        // Realizar el logout enviando argumento del mensaje de error y el estado inicial es usuario autenticado
        const error = { errorMessage : 'Not Authenticated' };
        const state = authSlice.reducer(authenticatedState, logout( error ));
        // Espero a que la respuesta sea los datos del usuario autenticado
        expect(state).toEqual( {
            status: 'not-authenticated', 
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: error.errorMessage
        })
    });
    
    test('Debe cambiar el estado a checking ', () => {
        // Verificar que el status cambie a checking
        const state = authSlice.reducer(authenticatedState, checkingCredentials( ));
        // Espero a que la respuesta sea los datos como no autenticado
        expect(state.status).toEqual( 'checking' );
    });
})
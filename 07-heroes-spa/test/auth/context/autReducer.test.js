import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";


describe('Pruebas en AuthReducer', () =>{

    const initialState = {
        logged: false,
        user: null
    }    
    // * debe de retornar el estado por defecto
    
    
    test('debe de retornar el estado por defecto ', () =>
    {
        const state = authReducer(initialState.logged, {});
        expect(state).toEqual(false);
    
    });

    test('debe el login llamar el login autenticar y estrablecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'John',
                id: '123'
            }
        }
        const state = authReducer(initialState , action );
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    });

    test('debe el logout borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        }
        const state = authReducer(initialState, action);
        expect(state).toEqual({
            logged: false,
        });
    });
});
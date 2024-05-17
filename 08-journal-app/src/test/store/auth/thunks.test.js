import { loginWithEmailAndPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../../firebase/providers";
import { checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../store/auth";
import { checkingAuthentication } from "../../../store/auth/thunks";
import { demoUser } from './../../fixtures/authFixtures';
import { startCreatingUserWithEmailPassword } from './../../../store/auth/thunks';
import { clearNotesLogout } from "../../../store/journal";

// Mock de todos los providers
jest.mock("../../../firebase/providers.js");

describe('Pruebas en AuthTunks', () => {
    const dispatch = jest.fn();
    
    beforeEach(() => jest.clearAllMocks());

    test('Debe de invocar checkingCredentials ', async () => {
        await checkingAuthentication()( dispatch );
        expect( dispatch ).toHaveBeenCalledTimes(1);
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    });

    test('startGoogleSignIn debe llamar checkinCredentials y login - Exito', async () => {
                
        // Mockeo la respuesta de la llamada a google
        const loginData = { ok: true, ...demoUser };
        await singInWithGoogle.mockResolvedValue( loginData );
        
        // Llamo a la funcion startGoogleSignIn
        await startGoogleSignIn()( dispatch );

        // Espero a que sean llamados en el dispatch checkingCredentials y login
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) );
    });

    test('startGoogleSignIn debe llamar checkinCredentials y login - Fallido', async () => {
        
        // Mockeo la respuesta de la llamada a google
        const loginData = {ok: false, error: 'login failed'};    
        await singInWithGoogle.mockResolvedValue( loginData );
        
        // Llamo a la funcion startGoogleSignIn
        await startGoogleSignIn()( dispatch );
        
        // Espero a que sean llamados en el dispatch checkingCredentials y login
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.error))

    });

    //TODO: REVISAR Y COMPLETAR
    test('startLoginWithEmailPassword debe llamar checkinCredentials y login - Exitoso', async () => {
        // Mockeo la respuesta de la llamada a google
        const loginData = { "ok": true, email: "test@test.com", "uid": "ZZPGt5Q77NcURSB5904UO8aD8op1" };
        
        const formData  = { email: demoUser.email, password: '123456'}
        
        await loginWithEmailAndPassword.mockResolvedValue( loginData );
        
        // Llamo a la funcion startLoginWithEmailPassword
        await startLoginWithEmailPassword(formData)( dispatch );
        
        // Espero a que sean llamados en el dispatch checkingCredentials y login
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(formData))

    });

    test('startCreatingUserWithEmailPassword debe llamar checkinCredentials, registerUserWithEmailPassword y login', async () => {
        
        // const loginData = { ok: true, ...demoUser };
        const loginData = { "ok": true, ...demoUser }
        const formData = { email: demoUser.email, password: '123456'}
        // Mockeo la respuesta de la llamada a google        
        await registerUserWithEmailPassword.mockResolvedValue( loginData );
        
        // Llamo a la funcion registerUserWithEmailPassword
        await startCreatingUserWithEmailPassword( formData )( dispatch );
        
        // Espero a que sean llamados en el dispatch checkingCredentials y login
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login({...demoUser}))

    });

    test('startLogout debe llamar logoutFirebase, clearNotesLogout y logout', async () => {
                
        // Llamo a la funcion startLogout
        await startLogout()(dispatch)        

        // Espero a que sean llamados en el dispatch clearNotesLogout y logout
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
        expect(dispatch).toHaveBeenCalledWith(logout({}))

    });


})
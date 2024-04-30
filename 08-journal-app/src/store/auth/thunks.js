import { loginWithEmailAndPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./index"

export const checkingAuthenticatication = (email, password) => {
    return async (dispatch) => {
        dispatch ( checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch ( checkingCredentials())
        const result = await singInWithGoogle()
        
        if( !result.ok ) dispatch ( logout( result.error) )
        dispatch ( login ( result ))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch( checkingCredentials() );

        const resp = await registerUserWithEmailPassword({ email, password, displayName})
        const { ok, uid, photoURL, errorMessage } = resp
        if (!ok) return dispatch(logout({errorMessage}))
        
        dispatch(login({uid, displayName, photoURL, email}))
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {

        dispatch( checkingCredentials() );

        const resp = await loginWithEmailAndPassword( { email, password } )
        
        const { ok, uid, photoURL, errorMessage, displayName } = resp
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, photoURL}));
    }
}
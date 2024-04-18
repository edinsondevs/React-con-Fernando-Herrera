import { singInWithGoogle } from "../../firebase/providers"
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
        console.log ( {result})
        if( !result.ok ) dispatch ( logout( result.error) )
        dispatch ( login ( result ))
    }
}

export const first = (second) => {third}
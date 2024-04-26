import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try   {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, photoURL, email, emailVerified } = result.user;
        return {
            ok: true,
            displayName,
            photoURL: photoURL,
            email,
            emailVerified
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage: errorMessage,
            errorCode: errorCode,
        }
    }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) =>{
    
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user
        
        await updateProfile(FirebaseAuth.currentUser, {displayName});

        return {
            ok: true,
            displayName,
            photoURL,
            email,
            uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage: errorMessage,
            errorCode: errorCode,
        }
    }
};
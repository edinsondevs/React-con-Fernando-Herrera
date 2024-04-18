// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9IOZDUrcsyS48d6FWfEow3A4Evt_sZ2E",
    authDomain: "curso-react-8faa2.firebaseapp.com",
    projectId: "curso-react-8faa2",
    storageBucket: "curso-react-8faa2.appspot.com",
    messagingSenderId: "910991190138",
    appId: "1:910991190138:web:3465bd127ee951ece7f3c3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from './../helpers/getEnviroments';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prop
// const firebaseConfig = {
//     apiKey: "AIzaSyD9IOZDUrcsyS48d6FWfEow3A4Evt_sZ2E",
//     authDomain: "curso-react-8faa2.firebaseapp.com",
//     projectId: "curso-react-8faa2",
//     storageBucket: "curso-react-8faa2.appspot.com",
//     messagingSenderId: "910991190138",
//     appId: "1:910991190138:web:3465bd127ee951ece7f3c3"
// };
// console.log(import.meta.env.MODE)

const env = getEnvironments();
console.log(env)
// Testing
const firebaseConfig = {
    apiKey: "AIzaSyDZ21Eodr7UelaoyFRYjZNmw0mIaIP4YQU",
    authDomain: "test-curso-react.firebaseapp.com",
    projectId: "test-curso-react",
    storageBucket: "test-curso-react.appspot.com",
    messagingSenderId: "842100985885",
    appId: "1:842100985885:web:7c44bd6eda38b075d5b6f4"
};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
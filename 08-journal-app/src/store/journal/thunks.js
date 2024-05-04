
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './';
import { loadNotes } from '../../helpers/loadNotes';

export const startNewNote = ()=>{

    return async ( dispatch, getState )=>{

        const { uid } = getState().auth;
        dispatch(savingNewNote());

        //uid

        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime(),
        }

        // Primero se hace la referencia al documento o coleccion
        //                apunto al documento(busco la coleccion(configuracion de Firebase, el path de firebase) )
        const newDoc =   doc( collection( FirebaseDB, `${uid}/journal/notas/` ));
        // para agregar la nota uso setDoc(referencia al documento, objeto que se va a grabar)
        await setDoc( newDoc, newNote )
        
        newNote.id = newDoc.id;
        //! dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
        // dispatch( newNote )
        // dispatch( activeNote )

    };
};

export const startLoadingNotes = ()=>{
    return async(dispatch, getState)=>{
        const { uid } = getState().auth;
        
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    };
};
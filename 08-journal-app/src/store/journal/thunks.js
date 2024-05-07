
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from './';
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

export const startSaveNote = ()=>{
    return async(dispatch, getState)=>{
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: note } = getState().journal
    
        const noteToFireStore = { ...note };
        /* En vista de que en la note viene el id, se debe eliminar para que no lo cree en firebase con ese valor, 
        para ello se usa la propiedad delete de js */
        delete noteToFireStore.id;
        
        const  docRef = doc(FirebaseDB, `${uid}/journal/notas/${note.id}` )
        await setDoc( docRef, noteToFireStore, { merge: true } )
        
        dispatch(updateNote(note));
    };
};
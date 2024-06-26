
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosActiveNote, setSaving, updateNote } from './';
import { loadNotes } from '../../helpers/loadNotes';
import { fileUpload } from '../../helpers/fileUpload';

export const startNewNote = () =>
{

    return async (dispatch, getState) =>
    {

        const { uid } = getState().auth;
        dispatch(savingNewNote());

        //uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        // Primero se hace la referencia al documento o coleccion
        //                apunto al documento(busco la coleccion(configuracion de Firebase, el path de firebase) )
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes/`));
        // para agregar la nota uso setDoc(referencia al documento, objeto que se va a grabar)
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id;
        //! dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    };
};

export const startLoadingNotes = () =>
{
    return async (dispatch, getState) =>
    {
        const { uid } = getState().auth;

        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    };
};

export const startSaveNote = () =>
{
    return async (dispatch, getState) =>
    {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: note } = getState().journal

        const noteToFireStore = { ...note };
        /* En vista de que en la note viene el id, se debe eliminar para que no lo cree en firebase con ese valor, 
        para ello se usa la propiedad delete de js */
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFireStore, { merge: true })

        dispatch(updateNote(note));
    };
};

export const startUploadingFiles = (files = []) =>
{
    return async (dispatch) =>
    {
        dispatch(setSaving());

        // await fileUpload( files[0] )
        const fileUploadPromises = [];
        for (const file of files)
        {
            fileUploadPromises.push(fileUpload(file))/*  */
        }

        const respPromise = await Promise.all(fileUploadPromises)
        dispatch(setPhotosActiveNote(respPromise))

    }
};

export const startDeletingNote = () =>
{
    return async (dispatch, getState) =>
    {

        const { uid } = getState().auth
        const { active: note } = getState().journal

        // Mando a eliminar la nota en firebase
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);
        // Mando el dispatch para eliminar la nota en el frontend
        dispatch(deleteNoteById(note.id));


    };
};
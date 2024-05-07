import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState:{
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
        // active: {
        //     id:'ABC123',
        //     title:'',
        //     body: '',
        //     date: 124324,
        //     imageUrls: [], // array de urls
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action)=>{
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action)=>{
            state.active = action.payload;
            state.isSaving = false;
        },  
        setNotes: (state, action)=>{
            state.notes = action.payload;
        },  
        setSaving: (state, action)=>{
            state.isSaving = true;
        },
        updateNote: (state, action)=>{
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if( note.id === action.payload.id ){
                    return action.payload
                }
                return note;
            });
        },
        deleteNoteById: (state, action)=>{

        },
    },
})

export const { 
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
 } = journalSlice.actions
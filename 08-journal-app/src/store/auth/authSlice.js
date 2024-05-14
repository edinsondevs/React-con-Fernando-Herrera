import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        status: 'checking', // checking, not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
    //ACA VAN LAS FUNCIONES A REALIZAR
      login: (state, {payload} )=> {
        state.status= 'authenticated', 
        state.uid= payload.uid,
        state.email= payload.email,
        state.displayName= payload.displayName,
        state.photoURL= payload.photoURL,
        state.errorMessage= null          
      },
      logout: (state, {payload} )=> {
        state.status= 'not-authenticated'; // checking, not-authenticated, authenticated
        state.uid= null;
        state.email= null;
        state.displayName= null;
        state.errorMessage = payload?.errorMessage || null;
        state.photoURL= null;
      },
      checkingCredentials: (state)=>{
        state.status = 'checking';
      }
    },
})

// Se generan creadores de acciones para cada función reductora de casos
export const { login, logout, checkingCredentials  } = authSlice.actions
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        status: 'not-authenticated', // checking, not-authenticated, authenticated
        ui: null,
        email: null,
        displayName: null,
        imagen: null,        
        photoURL: null,
        errorMessage: null
    },
    reducers: {
    //ACA VAN LAS FUNCIONES A REALIZAR
      login: (state, {payload} )=> {
        state.status= 'authenticated', 
        state.ui= null,
        state.email= payload.email,
        state.displayName= payload.displayName,
        state.imagen= null,
        state.photoURL= payload.photoURL,
        state.errorMessage= null          
      },
      logout: (state, payload )=> {
        state.status= 'not-authenticated'; // checking, not-authenticated, authenticated
        state.ui= null;
        state.email= null;
        state.displayName= null;
        state.imagen= null;
        state.photoURL= null;
        state.errorMessage= payload.errorMessage;
      },
      checkingCredentials: (state)=>{
        state.status = 'checking';
      }
    },
})

// Se generan creadores de acciones para cada función reductora de casos
export const { login, logout, checkingCredentials  } = authSlice.actions
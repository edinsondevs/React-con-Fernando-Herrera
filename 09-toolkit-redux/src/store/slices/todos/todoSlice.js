import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'counter',
    initialState:{
        counter: 0
    },
    reducers: {
//ACA VAN LAS FUNCIONES A REALIZAR
      increment: (state, action )=> {
          state.counter++
      }
    },
})

// Se generan creadores de acciones para cada función reductora de casos
//* llamar los reducers creados 
export const {  } = todoSlice.actions
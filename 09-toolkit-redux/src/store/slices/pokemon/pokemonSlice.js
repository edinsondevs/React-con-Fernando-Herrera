import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState:{
        page: 0,
        pokemons:[],
        isLoading: false
    },
    reducers: {
    
      startLoadingPokemons: (state, action )=> {
        state.isLoading = action.payload;
      },
      setPokemons: (state, action)=> {
        state.pokemons= action.payload.data;
        state.page= action.payload.page;
      },
    },
})


export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
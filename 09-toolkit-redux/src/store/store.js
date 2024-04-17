import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/index'
import { pokemonSlice } from './slices/pokemon/index'
import { todosApi } from './apis'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})
import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import axios from 'axios';

export const getPokemons = (page= 0) => {
    return async (dispatch, getState)=>{
        dispatch(startLoadingPokemons());

        //TODO: llamar a la api 
        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        // const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`)
        // console.log({data: resp.data.results, page: page})
        const response = { data: resp.data.results, page: page }
        dispatch(setPokemons(response));
        dispatch(startLoadingPokemons(false));
    }
};
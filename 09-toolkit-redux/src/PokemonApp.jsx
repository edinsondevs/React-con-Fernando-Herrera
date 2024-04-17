import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
	const dispatch = useDispatch();
	const { pokemons= [], isLoading, page } = useSelector((state) => state.pokemons);
	
	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	return (
		<>
			<h1>PokemonApp</h1>
			<hr />
			<span>Loading: {isLoading ? "True" : "False"}</span>
			<ul>
				{pokemons.map(({name}) => (
					<li key={name}>{name}</li>
				))}
			</ul>
            <div>
			    <button disabled={isLoading} onClick={() => page > 0 && dispatch(getPokemons(page - 1))}> {`<<`} </button>
			    <button disabled={isLoading} onClick={() => dispatch(getPokemons(page + 1))}> {`>>`} </button>
            </div>
            <span>Pagina: {page}</span>
		</>
	);
};

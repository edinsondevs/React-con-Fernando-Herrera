import { HeroCard } from "../components/HeroCard";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
	const navigate = useNavigate();

	const { q = "" } = queryString.parse(location.search);
	const heroes = getHeroesByName(q);

	const { searchText, onInputChange, onResetForm } = useForm({
		searchText: "",
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();
		// if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText}&asc=true`);

		onResetForm();
	};

	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className='row'>
				<div className='col-5'>
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSearchSubmit}>
						<input
							type='text'
							name='searchText'
							placeholder='Search a hero'
							className='form-control'
							autoComplete='off'
							value={searchText}
							onChange={onInputChange}
						/>
						<button
							className='btn btn-outline-dark mt-4'
							onClick={() => {}}>
							Search
						</button>
					</form>
				</div>

				<div className='col-7'>
					<h4>Results</h4>
					<hr />
					{!q && (
						<div className='alert alert-primary'> Search Hero</div>
					)}
					{heroes.length === 0 && q && (
						<div className='alert alert-danger'>
							{" "}
							No Hero with <b> {q} </b>{" "}
						</div>
					)}
					{heroes.map((hero) => (
						<HeroCard
							key={hero.id}
							{...hero}
						/>
					))}
				</div>
			</div>
		</>
	);
};

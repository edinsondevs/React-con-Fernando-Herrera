import React from "react";
import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
	if (alter_ego !== characters) <></>;
	return <p> {characters}</p>;
};

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImageUrl = `/assets/heroes/${id}.jpg`;

	// const charactersByHero = <p> {characters}</p>;

	return (
		<div className='col'>
			<div className='card m-3 '>
				<div
					className='row no-gutters card-body '
					style={{ height: "16rem", width: "25rem" }}>
					<div className='col-4'>
						<img
							src={heroImageUrl}
							className='card-img'
							alt={alter_ego}
						/>
					</div>
					<div className='col-8'>
						<h5>{superhero}</h5>
						<p> {alter_ego}</p>
						{/* {alter_ego !== characters && <p> {characters}</p>} */}
						{/* {(alter_ego !== characters ) && charactersByHero} */}
						<CharactersByHero
							alter_ego={alter_ego}
							characters={characters}
						/>
						<p>{first_appearance}</p>
					</div>
					<Link to={`/hero/${id}`}>Mas...</Link>
				</div>
			</div>
		</div>
	);
};

import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
	const navigate = useNavigate();
	
	const { id } = useParams();
	
	const hero = useMemo( () => getHeroById(id), [ id ]);
		
	const onNavigateBack = () => {
		navigate(-1)
	};
	
	if (!hero) {
		<h2 className='container d-flex justify-content-center'>
			404 - Not Found
		</h2>
		
	}
	return (
		<div className='row mt-5 animate__animated animate__fadeInLeft'>
			<div className='col-4'>
				<img
					alt=''
					src={`/assets/heroes/${id}.jpg`}
					className='img-thumbnail'
				/>
			</div>
			<div className='col-8'>
				<h3>{hero.superhero}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Alter ego: </b> {hero.alter_ego}
					</li>
					<li className='list-group-item'>
						<b>Publisher: </b> {hero.publisher}
					</li>
					<li className='list-group-item'>
						<b>First Appearance: </b> {hero.first_appearance}
					</li>
				</ul>

				<h5 className='mt-3'>Characters: </h5>
				<p>{hero.characters}</p>

				<button
					className='btn btn-outline-dark'
					onClick={onNavigateBack}>
					Regresar
				</button>
			</div>
		</div>
	);
};

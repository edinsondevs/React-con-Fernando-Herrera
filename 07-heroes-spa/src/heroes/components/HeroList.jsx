import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
	const heroes = getHeroesByPublisher(publisher);
	return (
		<div className='row rows-cols-1 row-cols-md-3 g-3'>
			{heroes.map((hero) => {
				return (
					<li
						key={hero.id}
						className='list-group-item'>
						<HeroCard {...hero} />
					</li>
				);
			})}
		</div>
	);
};

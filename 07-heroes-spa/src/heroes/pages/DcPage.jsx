import React from 'react'
import { HeroList } from '../components';

export const DcPage = () => {
  return (
		<>
			<h1 data-testid='dc-comics'>Dc Comics</h1>
			<hr />
			<HeroList publisher='DC Comics' />
		</>
  );
}

import React from "react";
import { Navbar } from "../../ui/components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path='marvel' element={<MarvelPage />} />
					<Route path='dc' element={<DcPage />} />
					<Route path='about' element={<AboutPage />} />
					<Route path='search' element={<SearchPage />} />
					<Route path='hero' element={<HeroPage />} />
					<Route path='/' element={<Navigate to='/marvel' />} />
				</Routes>
			</div>
		</>
	);
};

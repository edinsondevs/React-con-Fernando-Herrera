import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes/index.js";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { PublicRoute } from "./PublicRoute.jsx";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				{/* Rutas Publicas */}
				<Route
					path='/login'
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
					/>
				{/* Rutas Privadas */}
				<Route
					path='/*'
					element={
						<PrivateRoute>
							<HeroesRoutes />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
};

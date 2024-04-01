import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/routes/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en PublicRoute", () => {
	test("debe mostrar el children si no esta autenticado", () => {
		const contextValue = {
			logged: false,
		};
		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoute>
					<h1>Ruta publica</h1>
				</PublicRoute>
			</AuthContext.Provider>
		);

		expect(screen.getByText("Ruta publica")).toBeTruthy();
	});

	test("debe navegar si esta autenticado", () => {
		const contextValue = {
			logged: true,
			user: {
				name: "John",
				id: "123",
			},
		};
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={["/login"]}>
					<Routes>
						<Route path='login'
							element={
								<PublicRoute>
									<h1>Ruta publica</h1>
								</PublicRoute>
							}
						/>
						<Route path='marvel' element={<h1>Pagina Marvel</h1>} />
					</Routes>
                        
				</MemoryRouter>
			</AuthContext.Provider>
		);
		// screen.debug();
        expect( screen.getByText('Pagina Marvel') ).toBeTruthy();
	});
});

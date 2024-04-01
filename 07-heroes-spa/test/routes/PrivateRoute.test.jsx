import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../src/routes/PrivateRoute";
import { AuthContext } from "../../src/auth";

describe("Pruebas de Rutas Privadas", () => {

	test("debe mostrar el children si esta autenticado", () => {
	
        Storage.prototype.setItem= jest.fn()

        const contextValue = {
			logged: true,
			user: {
				name: "Edinson",
				id: "123",
			},
		};
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/search']} >
					<PrivateRoute>
						<h1>Ruta privada</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);
        
		expect(screen.getByText("Ruta privada")).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search");
	});
});

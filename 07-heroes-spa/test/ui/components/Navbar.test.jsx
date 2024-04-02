import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/Navbar";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";

/* 
    1. Verificar que exista el nombre del user autenticado que viene desde el contexto
    2. Evaluar el click en el logout que se llame el navigate con el replace y que se llame la funcion logout
*/
// ***********************************************************************
// * MOCK DEL USENAVIGATE
const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en Navbar", () => {
	const contextValue = {
		logged: true,
		user: {
			name: "John",
			id: "123",
		},
		logout: jest.fn(),
	};

	beforeEach(() => jest.clearAllMocks());

	test("Mostrar el nombre del usuario logeado", () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(screen.getByLabelText("user-logged")).toBeTruthy();
	});

	test("debe llamar el logout y navigate cuando se hace click en el boton", () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		const btn = screen.getByRole("button", { name: "Logout" });
		fireEvent.click(btn);
		expect(contextValue.logout).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {
			replace: true,
		});
	});
});

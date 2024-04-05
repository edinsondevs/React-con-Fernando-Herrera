import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

// * MOCK DEL USENAVIGATE
const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en SearchPage", () => {

    beforeEach(() => jest.clearAllMocks());

	test("debe de mostrarse correctamente con valores por defecto", () => {
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
        const label = screen.getByLabelText("alert-search")
        expect(label).toBeTruthy();

	});

	test("debe de mostrar batman y el input con el valor del queryString", () => {
		
        render(
			<MemoryRouter initialEntries={["/search?q=batman"]}>
				<SearchPage />
			</MemoryRouter>
		);
        expect( screen.getByText('Batman'))
        const img = screen.getByRole('img');
        expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
        
        expect(screen.queryByLabelText("alert-search")).not.toBeTruthy();
	});

	test("debe de mostrar un error si no se encuentra el heroe", () => {
		
        render(
			<MemoryRouter initialEntries={["/search?q=batmandeprueba"]}>
				<SearchPage />
			</MemoryRouter>
		);
        expect(screen.getByLabelText("alert-danger")).toBeTruthy(); 
        
	});
    
	test("debe de llamar el navigate a la pantalla nueva", () => {
        const optionSearch = "superman";
        render(
            <MemoryRouter initialEntries={["/search"]}>
				<SearchPage />
			</MemoryRouter>
		);
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: optionSearch } });
        const btnSearch = screen.getByRole('button', {name: 'Search'});
        fireEvent.click(btnSearch);
        
        // const form = screen.getByLabelText('form');        
        // fireEvent.submit(form)
        
        expect(mockedUseNavigate).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${optionSearch}`);

	});
});

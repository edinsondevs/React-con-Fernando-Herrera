import { render, screen } from '@testing-library/react';
import { AboutPage } from '../../../src/heroes/pages/AboutPage';

describe("Pruebas en AboutPage", () => {
    test("Mostrar el componente AboutPage ", () => {
        render(
            <AboutPage />
        )
        expect(screen.getByTestId("about-page")).toBeTruthy();
    });
});
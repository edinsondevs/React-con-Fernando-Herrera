import { render, screen } from '@testing-library/react'
import { DcPage } from '../../../src/heroes/pages/DcPage';

describe.skip("pruebas en componente DcPage", () => {
    test('mostrar el componente', () => {
        render(
            <DcPage />
        )
        expect(screen.getByTestId("dc-comics")).toBeTruthy();
    });
});
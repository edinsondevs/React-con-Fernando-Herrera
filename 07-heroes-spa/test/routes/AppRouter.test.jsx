import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/routes/AppRouter';

describe('Prueba en AppRouter', () => {
    
    test('debe mostrar el login si no esta autenticado ', () => {
        
        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/marvel']} >
                <AuthContext.Provider value={contextValue} >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect( screen.getByText('Login')).toBeTruthy();
    });
    
    test('debe mostrar el componente marvel si esta autenticado ', () => {
        
        const contextValue = {
            logged: true
        };

        render(
            <MemoryRouter initialEntries={['/marvel']} >
                <AuthContext.Provider value={contextValue} >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect( screen.getByRole('navigation', {link: '/marvel'})).toBeTruthy();
        expect( screen.getByLabelText('marvel')).toBeTruthy();
    });
});
import { FirstApp } from "../src/FirstApp"
import { render, screen } from '@testing-library/react'

describe('Pruebas en FirstApp', () => {
    const title = 'Pruebas en FirstApp';
    const subTitle = 'Es el Subtitulo';
    test('debe hacer match con el snapshot', () => {
        
        render(<FirstApp title={title} />);
        // screen.debug()  // PARA VER EL OBJETO
        expect( screen.getByText(title) ).toBeTruthy()
    });
    
    test('debe mostrar el titulo en un h1', () => {
        
        render(<FirstApp title={title} />)
        // screen.debug() 
        expect( screen.getByRole('heading', {level: 1 }).innerHTML ).toContain( title )
    });
    
    test('debe mostrar el subtitulo enviado por props', () => {
        
        render(
            <FirstApp 
                title={title} 
                subTitle={ subTitle }
            />
        )
        // screen.debug() 
        expect( screen.getByRole('heading', {level: 1 }).innerHTML ).toContain( title )
    });


})

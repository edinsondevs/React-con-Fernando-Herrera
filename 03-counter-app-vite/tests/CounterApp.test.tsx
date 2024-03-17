import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";
import React from "react";

const initialsValue = 100
describe('pruebas de <CounterApp>', () => {

    test("debe mostrar el valor inicial de 100", () => {
        render(
            <CounterApp value={initialsValue}/>
        )
        expect( screen.getByText(100)).toBeTruthy()
        expect( screen.getByRole("button", { name: "Restar" }))
    });

    test('debe de incrementar con el boton sumar ', () => {
        
        render(<CounterApp value={initialsValue}/>) 
        fireEvent.click( screen.getByText( 'Sumar' ));
        expect( screen.getByText( '101' )).toBeTruthy()
    });

    test('debe de decrementar con el boton restar ', () => {
        
        render(<CounterApp value={initialsValue}/>) 
        fireEvent.click( screen.getByText( 'Restar' ));
        expect( screen.getByText( 99 )).toBeTruthy()
    });

    test('debe funcionar el boton reset ', () => {
        
        render(<CounterApp value={initialsValue}/>) 
        fireEvent.click( screen.getByText( 'Sumar' ));
        fireEvent.click( screen.getByText( 'Sumar' ));
        fireEvent.click( screen.getByText( 'Sumar' ));
        fireEvent.click( screen.getByText( 'Sumar' ));
        fireEvent.click( screen.getByText( 'Sumar' ));
        // screen.debug()
        fireEvent.click( screen.getByRole('button', {name: 'btnReset'}));
        expect( screen.getByText( 100 )).toBeTruthy();
    });
})

import { render, screen, fireEvent } from "@testing-library/react";
import TextBox from "../components/TexBox";

describe('TextBox Component', () => {
    let article: HTMLElement;
    let button: HTMLButtonElement;

    test('la caja de texto se encuentra en el documento', () => {
        render(<TextBox />);
        article = screen.getByRole('article', { name: 'párrafo principal'});
        expect(article).toBeInTheDocument();
    });

    test('la caja con el texto tiene un color inicial', () => {
        render(<TextBox />);
        article = screen.getByRole('article', { name: 'párrafo principal'});
        expect(article).toHaveStyle({
            backgroundColor: 'indigo'
        });
    });

    test('si al pulsar el botón cambia el color de fondo', () => {
        render(<TextBox />);
        article = screen.getByRole('article', { name: 'párrafo principal'});
        button = screen.getByRole('button', { name: 'Pulsa para modificar' });
        fireEvent.click(button);
        expect(article).toHaveStyle({
            backgroundColor: 'tomato'
        });
    });
});
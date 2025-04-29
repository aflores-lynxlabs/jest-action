import { render, screen, fireEvent } from '@testing-library/react';
import AcceptCookies from '../components/AcceptCookies';

describe('AcceptCookies component', () => {

    let checkBox: HTMLElement;
    let article: HTMLElement;
    beforeEach(() => {
        render(<AcceptCookies />);
        checkBox = screen.getByLabelText('Acepta las cookies');
        article = screen.getByRole('article', { name: 'confimación cookies'});
    });

    test('si el check box esta en el componente y si esta desactivado', () => {
        expect(checkBox).toBeInTheDocument();
        expect(checkBox).not.toBeChecked();
    });

    test('si cambia el texto al pulsar el check box', () => {
        fireEvent.click(checkBox);
        expect(checkBox).toBeChecked();
        expect(article.textContent).toBe('Cookies aceptadas')
    });
})
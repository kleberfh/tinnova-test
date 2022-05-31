import App from '../../App';
import '@testing-library/jest-dom';
import {act} from "react-dom/test-utils";
import {fireEvent, render} from '@testing-library/react';

describe("MenuComponent", () => {
  test('Should expand and travel between user list page and create user page.', async () => {
    const app = render(<App />);
    const menu = app.getByTestId('menu');

    await act(async () => {
        fireEvent.click(menu);
    });

    const createUserLink = app.getByText('Novo usuário')
    const listUsersLink = app.getByText('Usuários')

    expect(createUserLink).toBeInTheDocument();
    expect(listUsersLink).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(listUsersLink);
    })

    expect(window.location.pathname).toMatch('/usuarios');

    await act(async () => {
      fireEvent.click(createUserLink);
    })

    expect(window.location.pathname).toMatch('/');
  });
});
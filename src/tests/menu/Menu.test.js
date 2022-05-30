import App from '../../App';
import '@testing-library/jest-dom';
import {act} from "react-dom/test-utils";
import {fireEvent, render, screen} from '@testing-library/react';

describe("Menu", () => {
  test('Should start with no value.', () => {
    const app = render(<App />);
    const menu = app.querySelector('#menu');
    expect(menu).toBeInTheDocument();
  });

  test('Should redirect to users list.', async () => {
    render(<App />);

    // const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    //
    // await act(async () => {
    //   fireEvent.change(input, {target: { value: textValue }})
    // })

    expect(window.location.search).toMatch('/usuarios');
  });

  test('Should redirect to user create.', async () => {
    render(<App />);

    // const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    //
    // await act(async () => {
    //   fireEvent.change(input, {target: { value: textValue }})
    // })
    //
    // const searchButton = screen.getByTestId('search_button');
    // await act(async () => {
    //   fireEvent.click(searchButton);
    // })

    expect(window.location.search).toMatch('/');
  });
});
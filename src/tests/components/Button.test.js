import '@testing-library/jest-dom';
import {act} from "react-dom/test-utils";
import {fireEvent, render} from '@testing-library/react';
import Button from "../../components/Button";

describe("ButtonComponent", () => {
  const BUTTON_TEXT = 'test button';

  test('Should render the button component', async () => {
    const ButtonComponent = render(
      <Button action={() => {}}>{BUTTON_TEXT}</Button>
    );
    const button = ButtonComponent.queryByText(BUTTON_TEXT);
    expect(button).not.toBeNull();
  });

  test('Should execute button action', async () => {
    let count = 0;
    const ButtonComponent = render(
      <Button action={() => {count++}}>{BUTTON_TEXT}</Button>
    );
    const button = ButtonComponent.queryByText(BUTTON_TEXT);

    await act(async () => {
      fireEvent.click(button);
    })

    expect(count).toBe(1);
  });

  test('Should render button as disabled and not execute its action', async () => {
    let count = 0;

    const ButtonComponent = render(
      <Button action={() => {count++}} disabled>
        {BUTTON_TEXT}
      </Button>
    );

    const button = ButtonComponent.queryByText(BUTTON_TEXT);

    await act(async () => {
      fireEvent.click(button);
    })

    expect(count).toBe(0);
  });

  test('Should render button in loading state',() => {
    const ButtonComponent = render(
      <Button action={() => {}} loading>
        {BUTTON_TEXT}
      </Button>
    );

    const button = ButtonComponent.queryByText(BUTTON_TEXT);

    expect(button).toBeNull();
  });
});
import {act} from "react-dom/test-utils";
import {fireEvent, render} from '@testing-library/react';
import {TestInput, TestInputMask, TestInputValidation} from "./InputsToTest";

describe("InputComponent", () => {
  test('Test input render with no value', () => {
    expect(true).toBe(true);
    const InputComponent = render(<TestInput />);
    const input = InputComponent.getByLabelText('InputTest');

    expect(input.value).toBe('');
  });

test('Test input change value', async () => {
  const TEST_VALUE = 'Kleber Fernando';
  const InputComponent = render(<TestInput />);
  const input = InputComponent.getByLabelText('InputTest');

  await act(async () => {
    fireEvent.change(input, { target: { value: TEST_VALUE }})
  });

  expect(input.value).toBe(TEST_VALUE);
});

test('Test input mask value', async () => {
  const TEST_VALUE = '02152360095';
  const InputComponent = render(<TestInputMask />);
  const input = InputComponent.getByLabelText('InputTest');

  await act(async () => {
    fireEvent.focus(input);
  })

  await act(async () => {
    fireEvent.change(input, { target: { value: TEST_VALUE }})
  });

  await act(async () => {
    fireEvent.blur(input);
  })

  expect(input.value).toBe('021.523.600-95');
});

test('Test input validation error', async () => {
  const TEST_VALUE = '12345678910';
  const InputComponent = render(<TestInputValidation />);
  const input = InputComponent.getByLabelText('InputTest');

  await act(async () => {
    fireEvent.focus(input);
  })
  await act(async () => {
    fireEvent.change(input, { target: { value: TEST_VALUE }})
  });
  await act(async () => {
    fireEvent.blur(input);
  })

  const helperText = InputComponent.queryByText('invalid');
  expect(helperText).not.toBeNull();
});

test('Test input validation success', async () => {
  const TEST_VALUE = '02152360095';
  const InputComponent = render(<TestInputValidation />);
  const input = InputComponent.getByLabelText('InputTest');

  await act(async () => {
    fireEvent.focus(input);
  })
  await act(async () => {
    fireEvent.change(input, { target: { value: TEST_VALUE }})
  });
  await act(async () => {
    fireEvent.blur(input);
  })

  const helperText = InputComponent.queryByText('invalid');

  expect(helperText).toBeNull();
});
});
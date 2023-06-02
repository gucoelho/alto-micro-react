import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import { vi, describe, test } from 'vitest';

describe('Button', () => {
  test('renders button with correct text', () => {
    const buttonText = 'Click me';
    render(<Button>{buttonText}</Button>);

    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick callback when clicked', async () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    const buttonElement = screen.getByText('Click me');
    userEvent.click(buttonElement);

    await waitFor(() => expect(onClickMock).toHaveBeenCalled())
  });
});
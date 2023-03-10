import { render, fireEvent, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('Init', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and condition/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test('Checkbox disables button on first click and enables on second click', () => {
  fireEvent.click();
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and condition/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  fireEvent.click();
  expect(confirmButton).toBeEnabled();

  fireEvent.click();
  expect(confirmButton).toBeDisabled();
});

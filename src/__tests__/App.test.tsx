import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../components/App';
import { renderWithProviders } from '../utils/testUtils';

beforeEach(() => renderWithProviders(<App />));

afterEach(() => {
  cleanup();
});

test('initial screen', () => {
  const title = screen.getByText(/Todo list/i);
  const form = screen.getByTestId('form');
  const todoList = screen.getByRole('tablist');
  expect(title).toBeInTheDocument();
  expect(form).toBeInTheDocument();
  expect(todoList).toBeInTheDocument();
});

test('add new todo', () => {
  expect(screen.getByTestId('button')).toBeDisabled();
  const input = screen.getByTestId('input') as HTMLInputElement;
  const button = screen.getByTestId('button') as HTMLButtonElement;
  expect(input.value).toBe('');
  expect(button).toHaveClass('Mui-disabled');
  userEvent.click(input);
  userEvent.type(screen.getByTestId('input'), 'first todo');
  expect(button).not.toHaveClass('Mui-disabled');
  userEvent.click(button);
  expect(button).toHaveClass('Mui-disabled');
  expect(screen.getByText(/first todo/)).toBeInTheDocument();
});

test('complete todo', () => {
  const input = screen.getByTestId('input') as HTMLInputElement;
  const button = screen.getByTestId('button') as HTMLButtonElement;
  userEvent.click(input);
  userEvent.type(screen.getByTestId('input'), 'first todo');
  userEvent.click(button);
  const checkbox = screen.getByTestId('complete-checkbox') as HTMLSpanElement;
  userEvent.click(checkbox);
  const tabWithCompleted = screen.getByTestId('tab-with-completed');
  userEvent.click(tabWithCompleted);
  expect(screen.getByText('first todo')).toBeInTheDocument();
});

test('switch to active todo', () => {
  const input = screen.getByTestId('input') as HTMLInputElement;
  const button = screen.getByTestId('button') as HTMLButtonElement;
  userEvent.click(input);
  userEvent.type(screen.getByTestId('input'), 'first todo');
  userEvent.click(button);
  const checkbox = screen.getByTestId('complete-checkbox') as HTMLSpanElement;
  userEvent.click(checkbox);
  const tabWithCompleted = screen.getByTestId('tab-with-completed');
  userEvent.click(tabWithCompleted);
  userEvent.click(checkbox);
  const tabWithActive = screen.getByTestId('tab-with-active');
  userEvent.click(tabWithActive);
  expect(screen.getByText('first todo')).toBeInTheDocument();
});

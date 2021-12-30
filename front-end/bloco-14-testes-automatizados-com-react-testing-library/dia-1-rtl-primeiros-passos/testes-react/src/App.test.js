import { render, screen } from '@testing-library/react';
import App from './App';

test('input na tela', () => {
  render(<App />);
  const renderInput = screen.getByLabelText('Email');
  expect(renderInput).toBeInTheDocument();
  expect(renderInput).toHaveProperty('type', 'email');
});

test('renderiza botao', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveProperty('type', 'button')
})
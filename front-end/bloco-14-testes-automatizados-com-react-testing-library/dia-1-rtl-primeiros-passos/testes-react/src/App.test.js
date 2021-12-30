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
  const button = screen.getByTestId('btn-1');
  expect(button).toBeInTheDocument();
  expect(button).toHaveProperty('type', 'button')
});

test('renderiza dois botoes', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2)
});


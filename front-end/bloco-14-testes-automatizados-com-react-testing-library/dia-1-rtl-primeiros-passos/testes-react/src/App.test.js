import { render, screen } from '@testing-library/react';
import App from './App';

test('input na tela', () => {
  render(<App />);
  const renderInput = screen.getByLabelText('Email');
  expect(renderInput).toBeInTheDocument();
  expect(renderInput).toHaveProperty('type', 'email');
});


test('renderiza dois botoes', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2)
})
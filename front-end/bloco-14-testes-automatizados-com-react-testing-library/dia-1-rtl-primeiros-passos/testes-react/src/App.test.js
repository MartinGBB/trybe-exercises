import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const renderInput = screen.getByLabelText('Email');
  expect(renderInput).toBeInTheDocument();
  expect(renderInput).toHaveProperty('type', 'email')
});

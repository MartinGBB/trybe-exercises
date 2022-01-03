import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('testa tela principal', () => {
  it('input na tela', () => {
    render(<App />);
    const renderInput = screen.getByLabelText('Email');
    expect(renderInput).toBeInTheDocument();
    expect(renderInput).toHaveProperty('type', 'email');
  });
  
  it('renderiza botao', () => {
    render(<App />);
    const button = screen.getByTestId('btn-1');
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('type', 'button')
  });
  
  it('renderiza dois botoes', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2)
  });
  
  it('verifica que é impreso o email na tela', () => {
    render(<App />);
    const EMAIL = "email@email.com";
    
    const emailPrint = screen.getByTestId('id-email-user');
    expect(emailPrint).toBeInTheDocument();
    expect(emailPrint).toHaveTextContent('Valor');
    
    const emailInput = screen.getByLabelText('Email');
    const button = screen.getByTestId('btn-1')
    userEvent.type(emailInput, EMAIL);
    userEvent.click(button);
    
    expect(emailInput).toHaveValue('')
    expect(emailPrint).toHaveTextContent(`Valor: ${EMAIL}`);
  });

  it('Não exibir o email caso não for inserido o email', () => {
    
  })
});


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Verificando os campos na tela', () => {
  it('Verificando se existe o campo Email.', () => {
    const { getByLabelText } = render(<App />);
    const imputEmail = getByLabelText('Email');
    expect(imputEmail).toBeInTheDocument();
    expect(imputEmail.type).toBe('email')
  });
  
  it('Verificando se existe um botão de enviar', () => {
    // acessar o elemento
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send')
    // interagir com o elemento
    // testar o elemento
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button')
    expect(btn).toHaveValue('Enviar')
  });
  
  it('Verificando se existe um botão', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);;
  });

  it('Verifica se o botão e o campo email estão funcionando.', () => {
    // acessar os elementos
    const { getByTestId, getByLabelText } = render(<App />);
    
    const EMAIL_USER = 'email@email.com';

    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:')

    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email')
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  })
})
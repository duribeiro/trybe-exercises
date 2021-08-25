import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const imputEmail = getByLabelText('Email');
  expect(imputEmail).toBeInTheDocument();
  expect(imputEmail.type).toBe('email')
});

test('Verificando se existe um botão de enviar', () => {
  // acessar o elemento
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send')
  // interagir com o elemento
  // testar o elemento
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button')
  expect(btn).toHaveValue('Enviar')
});

test('Verificando se existe um botão', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);;
});
import React from 'react';
import {AlertContainer, AlertMessage} from './styles.ts';
import {AlertProps} from './interface';

const Alert: React.FC<AlertProps> = ({sucsess}) => {
  return (
    <AlertContainer sucsess={sucsess}>
      <AlertMessage>{sucsess ? 'Sucesso' : 'Falha my bro'}</AlertMessage>
    </AlertContainer>
  );
};

export {Alert};

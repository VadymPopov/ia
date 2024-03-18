import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ type = 'button', children, primary, ...otherProps }) => {
  return (
    <ButtonStyled primary={primary} type={type} {...otherProps}>
      {children}
    </ButtonStyled>
  );
};
export default Button;

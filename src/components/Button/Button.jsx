import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({
    type = "button",
    children,
    ...otherProps
  }) => {
    return (
      <ButtonStyled type={type}
        {...otherProps}
      >
        {children}
      </ButtonStyled>
    );
  };
  export default Button;
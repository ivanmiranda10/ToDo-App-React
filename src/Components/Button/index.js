import React from "react";
import { SubmitButtonContainer, SubmitButton } from "./styles";

const Button = ({ children, type }) => {
  return (
    <SubmitButtonContainer>
      <SubmitButton type={type}>{children}</SubmitButton>
    </SubmitButtonContainer>
  );
};

export default Button;

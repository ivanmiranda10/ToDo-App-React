import React from "react";
import { BackdropStyle } from "./styles";

const Backdrop = ({ children, onClick }) => {
  return (
    <BackdropStyle
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropStyle>
  );
};

export default Backdrop;

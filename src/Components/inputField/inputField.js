import React from "react";
import { Input } from "./styles";

const InputField = ({ type, name, placeholder, value, onChange, ...props }) => {
  return (
    <>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default InputField;

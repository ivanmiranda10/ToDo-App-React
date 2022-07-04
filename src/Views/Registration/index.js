import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useRegister from "../../Hooks/useRegister";
import {
  RegisterPageContainer,
  InputsContainer,
  Input,
  SubmitButtonContainer,
  SubmitButton,
  LoginButton,
  Error,
} from "./style";
import LogoPoincenot from "../../Utils/logo-poincenot.svg";

const Register = () => {
  const {
    currentUser,
    handleInputChange,
    handleRegisterSubmit,
    handleLoginSubmit,
  } = useRegister();

  const [logged, setLogged] = useState(false);

  const listOfUsers = useSelector((state) => state.users);
  useEffect(() => {
    console.log("Users Login Page: ", listOfUsers);
  }, []);

  return (
    <RegisterPageContainer>
      <img src={LogoPoincenot} alt="logo" height="100px" />
      <form
        onSubmit={!logged ? handleRegisterSubmit : handleLoginSubmit}
        autoComplete="off"
      >
        <InputsContainer>
          <Input
            type="text"
            name="email"
            placeholder="Email..."
            value={currentUser.email}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="password"
            placeholder="Contraseña..."
            value={currentUser.password}
            onChange={handleInputChange}
          />
          <Error>
            {currentUser.password.length < 6 &&
              "La contraseña debe tener al menos 6 caracteres"}
          </Error>
          <SubmitButtonContainer>
            <SubmitButton type="submit">
              {logged ? "Login" : "Registrarse"}
            </SubmitButton>
          </SubmitButtonContainer>
        </InputsContainer>
      </form>
      {!logged ? (
        <p>
          Ya tenes una cuenta?{" "}
          <LoginButton onClick={() => setLogged(true)}>Login</LoginButton>
        </p>
      ) : (
        <LoginButton onClick={() => setLogged(false)}>Volver</LoginButton>
      )}
    </RegisterPageContainer>
  );
};

export default Register;

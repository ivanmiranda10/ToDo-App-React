import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useRegister from "../../Hooks/useRegister";
import InputField from "../../Components/inputField";

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
    <div>
      <form onSubmit={!logged ? handleRegisterSubmit : handleLoginSubmit}>
        <InputField
          name="email"
          placeholder="Email..."
          value={currentUser.email}
          onChange={handleInputChange}
        />
        <InputField
          name="password"
          placeholder="Password..."
          value={currentUser.password}
          onChange={handleInputChange}
        />
        <button type="submit">{logged ? "Login" : "Register"}</button>
      </form>
      {!logged ? (
        <p>
          Have an account already?{" "}
          <button onClick={() => setLogged(true)}>Login</button>
        </p>
      ) : (
        <button onClick={() => setLogged(false)}>Go Back</button>
      )}
    </div>
  );
};

export default Register;

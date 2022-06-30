import React, { useState } from "react";
import useRegister from "./useRegister";

const Register = () => {
  const {
    currentUser,
    handleInputChange,
    handleRegisterSubmit,
    handleLoginSubmit,
  } = useRegister();
  const [logged, setLogged] = useState(false);
  return (
    <div>
      <form onSubmit={!logged ? handleRegisterSubmit : handleLoginSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email..."
          value={currentUser.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
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

import { useState } from "react";
import { auth } from "../firabase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { email, password } = currentUser;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/home"))
      .catch((err) => console.log(err));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = currentUser;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/home"))
      .catch((err) => console.log(err));
  };

  return {
    currentUser,
    handleInputChange,
    handleRegisterSubmit,
    handleLoginSubmit,
  };
};

export default useRegister;

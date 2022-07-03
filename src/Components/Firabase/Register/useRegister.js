import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firabase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../../Redux/Actions";

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
  const dispatch = useDispatch();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserId(currentUser));
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
      .catch(() => alert("No user found"));
  };

  return {
    currentUser,
    handleInputChange,
    handleRegisterSubmit,
    handleLoginSubmit,
  };
};

export default useRegister;

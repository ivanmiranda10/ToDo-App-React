import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../Authentication/firabase-config";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../Redux/Actions";
import registration from "../Authentication/Registration";
import login from "../Authentication/Login";

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

  const { email, password } = currentUser;

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserId(currentUser));
    registration(auth, email, password, navigate);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(auth, email, password, navigate);
  };

  return {
    currentUser,
    handleInputChange,
    handleRegisterSubmit,
    handleLoginSubmit,
  };
};

export default useRegister;

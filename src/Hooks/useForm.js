import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, getToDosByUser } from "../Redux/Actions";

const useForm = () => {
  const dispatch = useDispatch();

  const [toDo, setToDo] = useState({
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setToDo({
      ...toDo,
      title: e.target.value,
    });
  };

  const clear = () => {
    setToDo({
      ...toDo,
      title: "",
    });
  };

  const handleSubmit = (e, userAPI) => {
    e.preventDefault();
    dispatch(addToDo(userAPI?.userId, toDo));
    setTimeout(() => {
      dispatch(getToDosByUser(userAPI?.userId));
    }, 500);
    clear();
  };

  return { toDo, handleChange, handleSubmit };
};

export default useForm;

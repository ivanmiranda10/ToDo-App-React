import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, getToDosByUser } from "../Redux/Actions";

const useForm = () => {
  const dispatch = useDispatch();

  const [toDo, setToDo] = useState({
    title: "",
    message: `toDo posted on ${new Date().toString().substring(0, 10)}`,
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
    toDo.title.length >= 1
      ? dispatch(addToDo(userAPI?.userId, toDo))
      : alert("Escribi una tarea primero");
    setTimeout(() => {
      dispatch(getToDosByUser(userAPI?.userId));
    }, 500);
    clear();
  };

  return { toDo, handleChange, handleSubmit };
};

export default useForm;

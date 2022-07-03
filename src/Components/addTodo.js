import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, getToDosByUser, updateToDo } from "./Redux/Actions";

const AddTodo = ({ currentId, setCurrentId, userAPI }) => {
  const oneToDo = useSelector((state) =>
    currentId ? state.toDos.find((el) => el.id === currentId) : null
  );

  const dispatch = useDispatch();

  const [toDo, setToDo] = useState({
    title: "",
    message: "",
  });

  useEffect(() => {
    // console.log("oneToDo: ", oneToDo);
    if (oneToDo)
      setToDo({
        ...oneToDo,
        title: oneToDo.title,
      });
  }, [oneToDo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateToDo(userAPI?.userId, currentId, toDo));
    } else {
      dispatch(addToDo(userAPI?.userId, toDo));
    }
    setTimeout(() => {
      dispatch(getToDosByUser(userAPI?.userId));
    }, 500);
    clear();
  };

  const clear = () => {
    setToDo({
      ...toDo,
      title: "",
    });
    setCurrentId(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="toDo"
          placeholder="Need to do something ?"
          value={toDo.title}
          onChange={(e) =>
            setToDo({
              ...toDo,
              title: e.target.value,
            })
          }
        />
        <button type="submit">{currentId ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default AddTodo;

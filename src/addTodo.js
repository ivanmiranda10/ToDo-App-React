import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, updateToDo } from "./Redux/Actions";

const AddTodo = ({ currentId, setCurrentId }) => {
  const oneToDo = useSelector((state) =>
    currentId ? state.toDos.find((el) => el.id === currentId) : null
  );
  const dispatch = useDispatch();

  const [toDo, setToDo] = useState("");

  useEffect(() => {
    if (oneToDo) setToDo(oneToDo.toDo);
  }, [oneToDo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateToDo(currentId, toDo));
    } else {
      dispatch(addToDo(toDo));
    }
    clear();
  };

  const clear = () => {
    setToDo("");
    setCurrentId(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="toDo"
          placeholder="Need to do something ?"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <button type="submit">{currentId ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default AddTodo;

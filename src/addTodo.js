import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./Redux/Actions";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [toDo, setToDo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(toDo));
    setToDo("");
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddTodo;

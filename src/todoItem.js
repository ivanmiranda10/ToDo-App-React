import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { deleteToDo } from "./Redux/Actions";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteToDo(item.id));
  };
  return (
    <div>
      <span>{item.toDo}</span>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default TodoItem;

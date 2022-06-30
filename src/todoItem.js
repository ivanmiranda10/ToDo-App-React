import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { deleteToDo, completeTodo } from "./Redux/Actions";

const TodoItem = ({ item, setCurrentId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteToDo(item.id));
  };
  const handleComplete = () => {
    dispatch(completeTodo(item.id));
  };
  return (
    <div>
      <span style={{ color: item.completed ? "green" : "red" }}>
        {item.toDo}
      </span>
      <button onClick={handleDelete}>❌</button>
      <button onClick={() => setCurrentId(item.id)}>✏️</button>
      <button onClick={handleComplete}>{item.completed ? "🛠️" : "✅"}</button>
    </div>
  );
};

export default TodoItem;

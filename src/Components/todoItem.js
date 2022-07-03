import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { deleteToDo, completeTodo, getToDosByUser } from "../Redux/Actions";

const TodoItem = ({ item, userAPI }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteToDo(userAPI?.userId, item?.id));
    setTimeout(() => {
      dispatch(getToDosByUser(userAPI?.userId));
    }, 500);
  };

  const handleComplete = () => {
    dispatch(completeTodo(userAPI?.userId, item));
  };

  return (
    <div>
      <span style={{ color: item.completed ? "green" : "red" }}>
        {item.title}
      </span>
      <button onClick={handleDelete}>❌</button>
      <button onClick={handleComplete}>{item.completed ? "🛠️" : "✅"}</button>
    </div>
  );
};

export default TodoItem;

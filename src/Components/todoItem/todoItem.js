import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { deleteToDo, completeTodo, getToDosByUser } from "../../Redux/Actions";
import { ItemsContainer, DeleteButton, CheckBoxContainer } from "./styles";

const TodoItem = ({ item, userAPI }) => {
  const [todoChecked, setTodoChecked] = useState(item.completed);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteToDo(userAPI?.userId, item.id));
    setTimeout(() => {
      dispatch(getToDosByUser(userAPI?.userId));
    }, 1000);
  };

  const handleComplete = () => {
    setTodoChecked(!todoChecked);
    dispatch(completeTodo(userAPI?.userId, item));
  };

  return (
    <ItemsContainer>
      <CheckBoxContainer>
        <input
          type="checkbox"
          id={item.id}
          onChange={handleComplete}
          checked={todoChecked}
        />
        <label htmlFor={item.id}>{item.title}</label>
      </CheckBoxContainer>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ItemsContainer>
  );
};

export default TodoItem;

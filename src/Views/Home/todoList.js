import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import TodoItem from "../../Components/todoItem";

const TodoList = ({ userAPI }) => {
  const listOfToDos = useSelector((state) => state.toDos);

  useEffect(() => {
    console.log("toDos: ", listOfToDos);
  }, [listOfToDos]);

  return (
    <div>
      {listOfToDos?.length >= 1 &&
        listOfToDos.map((elem) => {
          return <TodoItem key={nanoid()} item={elem} userAPI={userAPI} />;
        })}
    </div>
  );
};

export default TodoList;

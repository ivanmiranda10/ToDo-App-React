import { nanoid } from "@reduxjs/toolkit";

export const ADD_TODO = "ADD_TODO";

export const addToDo = (toDo) => {
  console.log("addToDo Action: ", toDo);
  return {
    type: ADD_TODO,
    payload: {
      id: nanoid(),
      toDo,
      completed: false,
    },
  };
};

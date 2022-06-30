import { nanoid } from "@reduxjs/toolkit";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

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

export const deleteToDo = (id) => {
  console.log("deleteToDo Action: ", id);
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateToDo = (id, toDo) => {
  console.log("updateToDo Action: ", id, toDo);
  return {
    type: UPDATE_TODO,
    payload: { id, toDo },
  };
};

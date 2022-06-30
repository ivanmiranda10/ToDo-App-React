import { ADD_TODO, DELETE_TODO } from "../Actions";

const toDosFromLocalStorage = JSON.parse(
  localStorage.getItem("localToDos") || "[]"
);

const initialState = {
  toDos: toDosFromLocalStorage,
};

const toDos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        toDos: state.toDos.filter((elem) => elem.id !== action.payload),
      };
    default:
      return state;
  }
};

export default toDos;

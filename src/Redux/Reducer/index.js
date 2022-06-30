import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  CLEAR_COMPLETED,
  CLEAR_ALL,
} from "../Actions";

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
    case UPDATE_TODO:
      return {
        ...state,
        toDos: state.toDos.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        toDos: state.toDos.map((toDo) =>
          toDo.id === action.payload
            ? { ...toDo, completed: !toDo.completed }
            : toDo
        ),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => !todo.completed),
      };
    case CLEAR_ALL:
      return {
        ...state,
        toDos: [],
      };
    default:
      return state;
  }
};

export default toDos;

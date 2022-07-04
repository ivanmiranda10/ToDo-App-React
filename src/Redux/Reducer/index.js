import {
  GET_TODOS,
  DELETE_TODO,
  COMPLETE_TODO,
  FILTER_BY_COMPLETE,
  CLEAR_ALL,
  GET_USER,
} from "../Actions/constants";

const usersFromLocalStorage = JSON.parse(
  localStorage.getItem("localUsers") || "[]"
);

const initialState = {
  toDos: [],
  toDosForFiltering: [],
  users: usersFromLocalStorage,
};

const toDos = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case GET_TODOS:
      return {
        ...state,
        toDos: action.payload,
        toDosForFiltering: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        toDos: state.toDos.filter((elem) => elem.id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        toDos: state.toDos.map((toDo) =>
          toDo.id === action.payload.id ? { ...action.payload } : toDo
        ),
        toDosForFiltering: state.toDosForFiltering.map((toDo) =>
          toDo.id === action.payload.id ? { ...action.payload } : toDo
        ),
      };
    case FILTER_BY_COMPLETE:
      const arrayCopy = state.toDosForFiltering;
      return {
        ...state,
        toDos: arrayCopy.filter((el) =>
          action.payload.value === "completed" ? el.completed : !el.completed
        ),
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

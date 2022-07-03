import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  FILTER_BY_COMPLETE,
  CLEAR_ALL,
  GET_USER,
} from "../Actions";

const usersFromLocalStorage = JSON.parse(
  localStorage.getItem("localUsers") || "[]"
);

const initialState = {
  toDos: [],
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
        toDos: [...action.payload],
      };
    // case ADD_TODO:
    //   return {
    //     ...state,
    //     toDos: [...state.toDos, action.payload],
    //   };
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
      };
    case UPDATE_TODO:
      return {
        ...state,
        // toDos: state.toDos.map((el) =>
        //   el.id === action.payload.id ? action.payload : el
        // ),
        toDos: [...state.toDos, action.payload],
      };
    case FILTER_BY_COMPLETE:
      return {
        ...state,
        // toDos: state.toDos.filter(
        //   (todo) => todo.completed === action.payload.completed
        // ),
        toDos: [...action.payload],
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

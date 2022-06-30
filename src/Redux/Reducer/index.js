import { ADD_TODO } from "../Actions";

const initialState = {
  toDos: [],
};

const toDos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    default:
      return state;
  }
};

export default toDos;

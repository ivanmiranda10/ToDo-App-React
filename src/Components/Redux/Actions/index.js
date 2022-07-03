import axios from "axios";

export const API_URL = "https://api-3sxs63jhua-uc.a.run.app/v1";

export const GET_TODOS = "GET_TODOS";
export const GET_USER = "GET_USER";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const FILTER_BY_COMPLETE = "FILTER_BY_COMPLETE";
export const CLEAR_ALL = "CLEAR_ALL";

export const getUserId = (user) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API_URL}/userId`);
      //   console.log("userId: ", data);
      return dispatch({
        type: GET_USER,
        payload: { ...user, userId: data },
      });
    } catch (error) {
      alert("Error Get User ID");
      console.log(error);
    }
  };
};

export const getToDosByUser = (userId) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API_URL}/todo/${userId}`);
      //   console.log("toDos by user backend: ", data);
      return dispatch({ type: GET_TODOS, payload: data });
    } catch (error) {
      alert("Error Get Posts By User");
      console.log(error);
    }
  };
};

export function addToDo(userId, toDo) {
  return async function () {
    try {
      const toDoCreated = await axios.post(`${API_URL}/todo/${userId}`, toDo);
      //   console.log("Action Add toDo: ", toDoCreated.data);
      return toDoCreated.data;
    } catch (err) {
      alert("Error create toDo");
      console.log(err);
    }
  };
}

// export const addToDo = (toDo) => {
//   console.log("addToDo Action: ", toDo);
//   return {
//     type: ADD_TODO,
//     payload: {
//       id: nanoid(),
//       toDo,
//       completed: false,
//     },
//   };
// };

export function deleteToDo(userId, todoId) {
  //   console.log("deleteToDo - userId: ", userId);
  //   console.log("deleteToDo - todoId: ", todoId);
  return async function (dispatch) {
    try {
      await axios.delete(`${API_URL}/todo/${userId}`, { data: { todoId } });
      return dispatch({ type: DELETE_TODO, payload: todoId });
    } catch (error) {
      alert("Error Delete Post");
      console.log(error);
    }
  };
}

// export const deleteToDo = (id) => {
//   console.log("deleteToDo Action: ", id);
//   return {
//     type: DELETE_TODO,
//     payload: id,
//   };
// };

export function completeTodo(userId, item) {
  //   console.log("completeToDo Action: ", userId, item);
  return async function (dispatch) {
    // console.log("before: ", item.completed);
    try {
      const updateToDo = await axios({
        method: "put",
        url: `${API_URL}/todo/${userId}`,
        data: {
          todoId: item.id,
          completed: !item.completed,
        },
      });
      //   console.log("after: ", updateToDo.data);
      return dispatch({
        type: COMPLETE_TODO,
        payload: { id: item.id, ...updateToDo.data },
      });
    } catch (error) {
      alert("Error Update toDo");
      console.log(error);
    }
  };
}

// export const completeTodo = (id) => {
//   console.log("complete toDo: ", id);
//   return {
//     type: COMPLETE_TODO,
//     payload: id,
//   };
// };

// export const updateToDo = (id, toDo) => {
//   console.log("updateToDo Action: ", id, toDo);
//   return {
//     type: UPDATE_TODO,
//     payload: { id, ...toDo },
//   };
// };

export const updateToDo = (userId, currentTodoID, toDo) => {
  return async function (dispatch) {
    const currentTitle = toDo.title;
    // const currentID = toDo.id;
    // const currentComplete = toDo.completed;
    axios
      .delete(`${API_URL}/todo/${userId}`, {
        data: { todoId: currentTodoID },
      })
      .then((resp) => {
        if (resp) {
          axios.post(`${API_URL}/todo/${userId}`, {
            // id: currentID
            title: currentTitle,
            message: "",
            // completed: currentComplete
          });
        } else {
          console.log("no llego al post");
        }
      })
      .then((toDoUpdated) => {
        return dispatch({ type: UPDATE_TODO, payload: toDoUpdated });
      })
      .catch((err) => console.log("error de catcheo: ", err));
  };
};

export const clearAll = (userId) => {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/todo/${userId}/reset`);
    return dispatch({ type: CLEAR_ALL });
  };
};

export const filterByComplete = (userId, completed) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${API_URL}/todo/${userId}/${completed}`
      );
      return dispatch({ type: FILTER_BY_COMPLETE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

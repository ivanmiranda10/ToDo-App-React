import axios from "axios";
import {
  API_URL,
  GET_USER,
  GET_TODOS,
  DELETE_TODO,
  COMPLETE_TODO,
  CLEAR_ALL,
  FILTER_BY_COMPLETE,
} from "./constants";

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

export const clearAll = (userId) => {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/todo/${userId}/reset`);
    return dispatch({ type: CLEAR_ALL });
  };
};

export const filterByComplete = (userId, completed, value) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${API_URL}/todo/${userId}/${completed}`
      );
      return dispatch({
        type: FILTER_BY_COMPLETE,
        payload: { value, ...data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

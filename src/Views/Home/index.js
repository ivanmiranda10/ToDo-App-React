import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "../../Components/addTodo";
import Options from "../../Components/options";
import LogoutButton from "../../Authentication/Logout";
import { getToDosByUser } from "../../Redux/Actions";
import TodoList from "./todoList";

const Home = ({ user }) => {
  const userAPI = useSelector((state) =>
    state.users?.find((el) => el.email === user.email)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToDosByUser(userAPI?.userId));
    console.log("Current User: ", userAPI);
  }, [dispatch, userAPI]);

  const listOfUsers = useSelector((state) => state.users);
  useEffect(() => {
    localStorage.setItem("localUsers", JSON.stringify(listOfUsers));
  }, [listOfUsers]);

  return (
    <>
      <div>
        <LogoutButton />
        <h1>To-Do App</h1>
        <Options userAPI={userAPI} />
        <AddTodo userAPI={userAPI} />
        <TodoList userAPI={userAPI} />
      </div>
    </>
  );
};

export default Home;

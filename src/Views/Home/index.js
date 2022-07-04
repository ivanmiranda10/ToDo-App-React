import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "../../Components/createTodo/addTodo";
import LogoutButton from "../../Authentication/Logout";
import Header from "../../Components/Header";
import { getToDosByUser } from "../../Redux/Actions";

const Home = ({ user }) => {
  const userAPI = useSelector((state) =>
    state.users?.find((el) => el.email === user.email)
  );

  const listOfUsers = useSelector((state) => state.users);
  useEffect(() => {
    localStorage.setItem("localUsers", JSON.stringify(listOfUsers));
  }, [listOfUsers]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToDosByUser(userAPI?.userId));
    console.log("Current User: ", userAPI);
  }, [dispatch, userAPI]);

  const listOfToDos = useSelector((state) => state.toDos);

  useEffect(() => {
    console.log("toDos: ", listOfToDos);
  }, [listOfToDos]);

  return (
    <>
      <LogoutButton />
      <Header listOfToDos={listOfToDos} userAPI={userAPI} />
      <AddTodo userAPI={userAPI} listOfToDos={listOfToDos} />
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "../addTodo";
import TodoItem from "../todoItem";
import Navbar from "../navbar";
import LogoutButton from "../Firabase/Logout";
import { getToDosByUser } from "../Redux/Actions";
import { nanoid } from "@reduxjs/toolkit";

const Home = ({ user }) => {
  const [currentId, setCurrentId] = useState(null);
  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch();

  const userAPI = useSelector((state) =>
    state.users?.find((el) => el.email === user.email)
  );

  const listOfToDos = useSelector((state) => state.toDos);

  useEffect(() => {
    dispatch(getToDosByUser(userAPI?.userId));
    console.log("Current User: ", userAPI);
  }, [dispatch, userAPI]);

  const listOfUsers = useSelector((state) => state.users);

  useEffect(() => {
    // localStorage.setItem("localToDos", JSON.stringify(listOfToDos));
    localStorage.setItem("localUsers", JSON.stringify(listOfUsers));
  }, [listOfUsers]);

  useEffect(() => {
    console.log("toDos: ", listOfToDos);
  }, [listOfToDos]);

  return (
    <>
      <div>
        <LogoutButton />
        <h1>To-Do App</h1>
        <Navbar setFilter={setFilter} userAPI={userAPI} />
        <AddTodo
          currentId={currentId}
          setCurrentId={setCurrentId}
          userAPI={userAPI}
        />
        <div>
          {listOfToDos?.length >= 1 && filter === "all"
            ? listOfToDos?.map((elem) => {
                return (
                  <TodoItem
                    key={nanoid()}
                    item={elem}
                    setCurrentId={setCurrentId}
                    userAPI={userAPI}
                  />
                );
              })
            : null}
          {listOfToDos?.length >= 1 && filter === "completed"
            ? listOfToDos?.map((elem) => {
                return (
                  elem?.completed && (
                    <TodoItem
                      key={elem.id}
                      item={elem}
                      setCurrentId={setCurrentId}
                    />
                  )
                );
              })
            : null}
          {listOfToDos?.length >= 1 && filter === "uncompleted"
            ? listOfToDos?.map((elem) => {
                return (
                  !elem?.completed && (
                    <TodoItem
                      key={elem.id}
                      item={elem}
                      setCurrentId={setCurrentId}
                    />
                  )
                );
              })
            : null}
        </div>
        <div>
          <h4>
            {listOfToDos?.length
              ? `${
                  listOfToDos?.filter((el) => !el?.completed).length
                } tasks to finish`
              : "No tasks around here"}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;

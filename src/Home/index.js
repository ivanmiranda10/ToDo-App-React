import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddTodo from "../addTodo";
import TodoItem from "../todoItem";
import Navbar from "../navbar";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [filter, setFilter] = useState("all");

  const listOfToDos = useSelector((state) => state.toDos);

  useEffect(() => {
    console.log("listOfToDos Home: ", listOfToDos);
    localStorage.setItem("localToDos", JSON.stringify(listOfToDos));
  }, [currentId, listOfToDos]);

  return (
    <>
      <div>
        <h1>To-Do App</h1>
        <Navbar setFilter={setFilter} />
        <AddTodo currentId={currentId} setCurrentId={setCurrentId} />
        <div>
          {listOfToDos.length >= 1 && filter === "all"
            ? listOfToDos.map((elem) => {
                return (
                  <TodoItem
                    key={elem.id}
                    item={elem}
                    setCurrentId={setCurrentId}
                  />
                );
              })
            : null}
          {listOfToDos.length >= 1 && filter === "completed"
            ? listOfToDos.map((elem) => {
                return (
                  elem.completed && (
                    <TodoItem
                      key={elem.id}
                      item={elem}
                      setCurrentId={setCurrentId}
                    />
                  )
                );
              })
            : null}
          {listOfToDos.length >= 1 && filter === "uncompleted"
            ? listOfToDos.map((elem) => {
                return (
                  !elem.completed && (
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
            {listOfToDos.length
              ? `${
                  listOfToDos.filter((el) => !el.completed).length
                } tasks to finish`
              : "No tasks around here"}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;

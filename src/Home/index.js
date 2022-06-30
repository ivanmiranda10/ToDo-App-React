import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddTodo from "../addTodo";
import TodoItem from "../todoItem";

const Home = () => {
  const listOfToDos = useSelector((state) => state.toDos);

  useEffect(() => {
    console.log("listOfToDos Home: ", listOfToDos);
    localStorage.setItem("localToDos", JSON.stringify(listOfToDos));
  }, [listOfToDos]);

  return (
    <>
      <div>
        <h1>To-Do App</h1>
        <AddTodo />
        <div>
          {listOfToDos.length >= 1
            ? listOfToDos.map((elem) => {
                return <TodoItem key={elem.id} item={elem} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Home;

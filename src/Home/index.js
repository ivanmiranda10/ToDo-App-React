import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddTodo from "../addTodo";
import TodoItem from "../todoItem";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const listOfToDos = useSelector((state) => state.toDos);

  useEffect(() => {
    console.log("listOfToDos Home: ", listOfToDos);
    localStorage.setItem("localToDos", JSON.stringify(listOfToDos));
  }, [currentId, listOfToDos]);

  return (
    <>
      <div>
        <h1>To-Do App</h1>
        <AddTodo currentId={currentId} setCurrentId={setCurrentId} />
        <div>
          {listOfToDos.length >= 1
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

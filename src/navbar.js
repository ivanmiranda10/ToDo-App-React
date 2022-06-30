import React from "react";
import { useDispatch } from "react-redux";
import { clearCompleted, clearAll } from "./Redux/Actions";

const Navbar = ({ setFilter }) => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
      </div>
      <div>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <div>
        <button onClick={() => setFilter("uncompleted")}>Uncompleted</button>
      </div>
      <div>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear toDos Completed
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(clearAll())}>Clear All</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useDispatch } from "react-redux";
import { filterByComplete, clearAll, getToDosByUser } from "./Redux/Actions";

const Navbar = ({ setFilter, userAPI }) => {
  const dispatch = useDispatch();

  const all = () => {
    setFilter("all");
    dispatch(getToDosByUser(userAPI?.userId));
  };
  const completed = () => {
    setFilter("completed");
    dispatch(filterByComplete(userAPI?.userId, true));
  };
  const uncompleted = () => {
    setFilter("uncompleted");
    dispatch(filterByComplete(userAPI?.userId, false));
  };

  return (
    <nav>
      <div>
        <button onClick={all}>All</button>
      </div>
      <div>
        <button onClick={completed}>Completed</button>
      </div>
      <div>
        <button onClick={uncompleted}>Uncompleted</button>
      </div>
      {/* <div>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear toDos Completed
        </button>
      </div> */}
      <div>
        <button onClick={() => dispatch(clearAll(userAPI?.userId))}>
          New List
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

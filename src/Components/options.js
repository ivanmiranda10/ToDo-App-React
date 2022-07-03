import React from "react";
import { useDispatch } from "react-redux";
import { filterByComplete, clearAll, getToDosByUser } from "../Redux/Actions";

const Options = ({ userAPI }) => {
  const dispatch = useDispatch();

  const all = () => {
    dispatch(getToDosByUser(userAPI?.userId));
  };
  const completed = (e) => {
    dispatch(filterByComplete(userAPI?.userId, true, e.target.value));
  };
  const uncompleted = (e) => {
    dispatch(filterByComplete(userAPI?.userId, false, e.target.value));
  };

  return (
    <nav>
      <div>
        <button onClick={all}>All</button>
      </div>
      <div>
        <button value="completed" onClick={(e) => completed(e)}>
          Completed
        </button>
      </div>
      <div>
        <button value="uncompleted" onClick={(e) => uncompleted(e)}>
          Uncompleted
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(clearAll(userAPI?.userId))}>
          New List
        </button>
      </div>
    </nav>
  );
};

export default Options;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByComplete, getToDosByUser } from "../../Redux/Actions";
import "./index.css";

const Filters = ({ userAPI }) => {
  const [filterDisplay, setFilterDisplay] = useState("Todos");
  const dispatch = useDispatch();

  const all = () => {
    setFilterDisplay("Todos");
    dispatch(getToDosByUser(userAPI?.userId));
  };
  const completed = (e) => {
    setFilterDisplay("Realizados");
    dispatch(filterByComplete(userAPI?.userId, true, e.target.value));
  };
  const uncompleted = (e) => {
    setFilterDisplay("No Realizados");
    dispatch(filterByComplete(userAPI?.userId, false, e.target.value));
  };

  return (
    <div className="select">
      <button className="dropBtn">{`${filterDisplay}🔻`}</button>
      <section className="dropdown-content">
        <option value="created" onClick={all}>
          Todos
        </option>
        <option value="completed" onClick={(e) => completed(e)}>
          Realizados
        </option>
        <option value="uncompleted" onClick={(e) => uncompleted(e)}>
          No realizados
        </option>
      </section>
    </div>
  );
};

export default Filters;

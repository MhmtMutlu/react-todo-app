import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./tabs.scss";

const Tabs = () => {
  const { filter, removeCompletedTodos, changeFilter } = useContext(TodoContext);

  return (
    <div className="tabs-container">
      <button
        onClick={() => changeFilter("all")}
        className={filter === "all" ? "selected" : ""}
      >
        All
      </button>
      <button
        onClick={() => changeFilter("active")}
        className={filter === "active" ? "selected" : ""}
      >
        Active
      </button>
      <button
        onClick={() => changeFilter("completed")}
        className={filter === "completed" ? "selected" : ""}
      >
        Completed
      </button>
      <button onClick={() => removeCompletedTodos()}>
        Delete Completed Todos
      </button>
    </div>
  );
};

export default Tabs;

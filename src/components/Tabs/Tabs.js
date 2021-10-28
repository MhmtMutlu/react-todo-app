import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./tabs.scss";

const Tabs = () => {
  const { removeCompletedTodos } = useContext(TodoContext);

  return (
    <div className="tabs-container">
      <button>All</button>
      <button>New</button>
      <button>Completed</button>
      <button onClick={() => removeCompletedTodos()}>
        Delete Completed Todos
      </button>
    </div>
  );
};

export default Tabs;

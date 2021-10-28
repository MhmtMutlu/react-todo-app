import React from "react";
import "./tabs.scss";

const Tabs = () => {
  return (
    <div className="tabs-container">
      <button>All</button>
      <button>New</button>
      <button>Completed</button>
      <button>Delete Completed Todos</button>
    </div>
  );
};

export default Tabs;

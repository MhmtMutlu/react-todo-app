import React from "react";
import "./layout.style.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="layout-container">
        {children}
      </div>
    </div>
  );
};

export default Layout;

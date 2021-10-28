import React from "react";
import "./form.scss";

const Form = () => {
  return (
    <div className="form-wrapper">
      <form className="form-container">
        <button type="submit" className="form-button">New</button>
        <input className="form-input" placeholder="What's next to be done?"/>
      </form>
    </div>
  );
};

export default Form;

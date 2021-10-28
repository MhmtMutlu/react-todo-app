import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./form.scss";

const Form = () => {
  const { addNewTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      text: todoText,
      completed: false,
    };
    addNewTodo(newTodo);
    setTodoText("");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <button type="submit" className="form-button">
          New
        </button>
        <input
          className="form-input"
          placeholder="What's next to be done?"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;

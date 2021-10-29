import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./list.scss";

const List = () => {
  const { removeTodo, changeTodoStatus, filteredTodos } = useContext(TodoContext);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(filteredTodos());
  }, [filteredTodos]);

  return (
    <div className="list-container">
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "done" : ""}>
              <span onClick={() => changeTodoStatus(todo.id)}>{todo.text}</span>
              <span>
                {todo.completed || (
                  <button className="edit-button">
                    <i class="far fa-edit fa-2x"></i>
                  </button>
                )}
                <button
                  className="delete-button"
                  onClick={() => removeTodo(todo.id)}
                >
                  <i class="far fa-trash-alt fa-2x"></i>
                </button>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;

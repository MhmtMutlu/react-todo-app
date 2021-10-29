import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import EditModal from "../Modal/EditModal";
import "./list.scss";

const List = () => {
  const { removeTodo, changeTodoStatus, filteredTodos } =
    useContext(TodoContext);
  const [todos, setTodos] = useState([]);
  const [modalVisibility, setModalVisisibility] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState("");

  useEffect(() => {
    setTodos(filteredTodos());
  }, [filteredTodos]);

  const handleModalVisibility = (id) => {
    setModalVisisibility(true);
    setSelectedTodoId(id);
  };

  return (
    <>
      <div className="list-container">
        <ul>
          {todos.length > 0 &&
            todos.map((todo) => (
              <li key={todo.id} className={todo.completed ? "done" : ""}>
                <span onClick={() => changeTodoStatus(todo.id)}>
                  {todo.text}
                </span>
                <span>
                  {todo.completed || (
                    <button
                      className="edit-button"
                      onClick={() => handleModalVisibility(todo.id)}
                    >
                      <i class="far fa-edit fa-1x"></i>
                    </button>
                  )}
                  <button
                    className="delete-button"
                    onClick={() => removeTodo(todo.id)}
                  >
                    <i class="far fa-trash-alt fa-1x"></i>
                  </button>
                </span>
              </li>
            ))}
        </ul>
      </div>
      <EditModal
        visibility={modalVisibility}
        setVisibility={setModalVisisibility}
        selectedTodoId={selectedTodoId}
      />
    </>
  );
};

export default List;

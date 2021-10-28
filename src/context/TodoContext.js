import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = React.createContext();

const TodoContextProvider = ({ children }) => {
  const todoList = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useLocalStorage("todos", todoList);

  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const removeCompletedTodos = () => {
    const removedCompletedTodos = todos.filter(
      (todo) => todo.completed === false
    );
    setTodos(removedCompletedTodos);
  };

  const changeTodoStatus = (id) => {
    const indexOfTodo = todos.findIndex((todo) => todo.id === id);
    todos[indexOfTodo].completed = !todos[indexOfTodo].completed;
    const newTodo = todos.map((todo) => todo);
    setTodos(newTodo);
  };

  const values = {
    todos,
    addNewTodo,
    removeTodo,
    removeCompletedTodos,
    changeTodoStatus,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;

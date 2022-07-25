import React, { useState } from "react";

import ToDoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevToDos) => {
      return prevToDos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

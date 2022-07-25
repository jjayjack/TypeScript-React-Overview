import React, { useState } from "react";

import ToDoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos([{ id: Math.random().toString(), text }]);
  };
  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} />
    </div>
  );
};

export default App;

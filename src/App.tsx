import React, { useState } from "react";

import ToDoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";

const App: React.FC = () => {
  const todos = useState([]);
  const todoAddHandler = (text: string) => {
    // console.log(text);
  };
  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} />
    </div>
  );
};

export default App;

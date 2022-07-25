import React from "react";

import ToDoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish course" }];
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

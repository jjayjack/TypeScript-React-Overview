import React from "react";

const NewToDo: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="todo-text">ToDo Text</label>
        <input type="text" id="todo-text" />
      </div>
      <button type="submit">Add To Do</button>
    </form>
  );
};

export default NewToDo;

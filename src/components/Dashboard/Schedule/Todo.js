import React from "react";

const Todo = ({
  todoTitle,
  todoDescribtion,
  currentTodo,
  id,
  setTodos,
  allTodo,
}) => {
  console.log(allTodo);
  const handleDelete = (e) => {
    setTodos(allTodo.filter((loopedTodo) => loopedTodo.id != currentTodo.id));
  };

  return (
    <div className="todo" key={id}>
      <h1>{todoTitle}</h1>
      <p>{todoDescribtion}</p>

      <button onClick={handleDelete}> delete </button>
    </div>
  );
};

export default Todo;

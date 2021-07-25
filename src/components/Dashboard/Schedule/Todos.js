import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, setTodos }) => {
  return (
    <div className="">
      {todos.map((todo) => (
        <Todo
          todoTitle={todo.todoTitle}
          todoDescribtion={todo.todoDescribtion}
          currentTodo={todo}
          id={todo.id}
          key={todo.id}
          allTodo={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default Todos;

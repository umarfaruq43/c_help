import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, setTodos }) => {
  return (
    <div className="allTodos">
      {/* <div className="schedule_adder">
        <h1>lorem</h1>
      </div> */}
      {todos.map((todo) => (
        <Todo
          todoTitle={todo.todoTitle}
          todoDescribtion={todo.todoDescribtion}
          goalDate={todo.goalDate}
          goalTime={todo.goalTime}
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

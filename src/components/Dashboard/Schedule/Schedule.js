import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import Todos from "./Todos";
import Form from "./Form";
import "./Schedule.css";

const Schedule = () => {
  const todoInitials = {
    title: "",
    describtion: "",
  };

  const [todo, setTodo] = useState(todoInitials);
  const [todos, setTodos] = useState([]);

  // saving todos to the local storage

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // getting todos from the local storage

  const getTodos = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      const lastTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(lastTodos);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title != "" && todo.describtion != "") {
      setTodos([
        ...todos,
        {
          todoTitle: todo.title,
          todoDescribtion: todo.describtion,
          id: new Date(),
        },
      ]);
    } 
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const { title, describtion } = todo;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <p>
            <label htmlFor="">Title:</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </p>
          <p>
            <label htmlFor=""> Your schedule </label> <br />
            <textarea
              name="describtion"
              id=""
              onChange={handleChange}
            ></textarea>
          </p>
          <button type="submit"> Add Todo </button>
        </div>
      </form>

      <div className="">
        <Todos todo={todo} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Schedule;

import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import Todos from "./Todos";
import Form from "./Form";
import "./Schedule.css";
import { FaTimes } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
const Schedule = () => {
  const todoInitials = {
    title: "",
    describtion: "",
    date: 0,
    time: 0,
  };

  const [todo, setTodo] = useState(todoInitials);
  const [todos, setTodos] = useState([]);
  const [newSchedule, setNewSchedule] = useState(false);

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

  const handleNewSchedule = () => {
    setNewSchedule(!newSchedule);
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
          goalTime: todo.time,
          goalDate: todo.date,
        },
      ]);
    }

    setNewSchedule(false);
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
      <div className="todo_container">
        {newSchedule ? (
          <div className="schedule_layer">
            <form onSubmit={handleSubmit} className="schedule_adder">
              {/* <div className="schedule_close" onClick={handleNewSchedule}>
                <FaTimes />
              </div> */}
              <div className="form_group">
                <h1>Create a Schedule</h1>
                <p>
                  <input
                    className="title"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={title}
                    placeholder="Title"
                  />
                </p>
                <p className="text_space">
                  <textarea
                    name="describtion"
                    id=""
                    onChange={handleChange}
                    placeholder="Your Schedule"
                    className="text_describtion"
                    rows="5"
                  ></textarea>
                </p>
                <p>
                  <input type="date" name="date" onChange={handleChange} />
                  <input
                    type="time"
                    name="time"
                    id=""
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="config_todo">
                <button type="submit"> Create </button>
                <button type="button" onClick={handleNewSchedule}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="newS" onClick={handleNewSchedule}>
            <div className="newS_circle">
              <BiPlusMedical />
            </div>
          </div>
        )}
        <Todos todo={todo} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Schedule;

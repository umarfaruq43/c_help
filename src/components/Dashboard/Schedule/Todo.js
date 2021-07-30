import React, { useEffect } from "react";
import { FaClock, FaEdit } from "react-icons/fa";
import { BiEdit, BiTime, BiTrash, BiTrashAlt } from "react-icons/bi";

const Todo = ({
  todoTitle,
  todoDescribtion,
  currentTodo,
  id,
  setTodos,
  allTodo,
  goalDate,
  goalTime,
}) => {
  // let normalDate = new Date().toDateString();

  const handleDelete = (e) => {
    setTodos(allTodo.filter((loopedTodo) => loopedTodo.id != currentTodo.id));
  };

  let formatedGoalDate = new Date(goalDate);

  let formatedGoalTime = new Date(goalTime);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleEdit = () => {};
  return (
    <div className="todo" key={id}>
      <div className="todo_head">
        <div className="date">
          {formatedGoalDate.getUTCDate()}
          {/* <br /> */}
          <span>{monthNames[formatedGoalDate.getMonth() + 1]}</span>
        </div>

        <div className="todo_icons">
          <div className="todo_tools">
            <BiEdit />
          </div>
          <div className="todo_tools" onClick={handleDelete}>
            <BiTrash />
          </div>
        </div>
      </div>
      <h1 className="todo_title">{todoTitle}</h1>
      <p>{todoDescribtion}</p>
      <div className="time_group">
        <div className="todo_time">
          <BiTime />
        </div>
        <div>{goalTime}</div>
      </div>

      {/* <button onClick={handleDelete}> delete </button> */}
    </div>
  );
};

export default Todo;

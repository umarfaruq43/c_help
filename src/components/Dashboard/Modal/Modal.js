import React, { useState } from "react";
import "./Modal.css";
import { FaTimes } from "react-icons/fa";

const initialData = {
  Department: "",
  level: "",
};

const department = [
  {
    value: "",
    label: "Select Department",
  },
  {
    value: "MSE",
    label: "Material Science and  Engineering",
  },
  {
    value: "ECE",
    label: "Computer and Electrical Engineering",
  },
  {
    value: "MCE",
    label: "Mechcanical Engineering  ",
  },
  {
    value: "AAE",
    label: "Aeronautical Engineering",
  },
];

const Level = [
  {
    value: "",
    label: "Select Level",
  },
  {
    value: "level_one",
    label: "100 Level",
  },
  {
    value: "level_two",
    label: "200 level",
  },
  {
    value: "level_three",
    label: "300 level",
  },
  {
    value: "level_four",
    label: "400 level",
  },
  {
    value: "level_five",
    label: "500 level",
  },
];

const selectedDepartment = department.map(({ value, label }) => (
  <option key={label} value={value}>
    {label}
  </option>
));

const selectedLevel = Level.map(({ value, label }) => (
  <option key={label} value={value}>
    {label}
  </option>
));

const Modal = () => {
  const [courseConfig, setCourseConfig] = useState(initialData);

  const handleCourseConfig = (e) => {
    const { value, name } = e.target;
    setCourseConfig({ ...initialData, [name]: value });
  };

  const { Department, level } = courseConfig;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [closeModal, setCloseModal] = useState(false);

  const handleModal = () => {
    setCloseModal(!closeModal);
  };

  return (
    <>
      <div className="complete_reg">
        <form className="userConfig" onSubmit={handleSubmit}>
          <div className="btn_close" onClick={handleModal}>
            <FaTimes className="close_modal" />
          </div>

          {/* <div className="form_group">
            <h1>
              
            </h1>

          </div> */}

          <div className="form_group">
            {/* <label htmlFor="Departmnet">Department</label> */}
            <select
              name="Department"
              onChange={handleCourseConfig}
              value={Department}
            >
              {selectedDepartment}
            </select>
          </div>

          <div className="form_group">
            {/* <label htmlFor="level">level</label> */}
            <select name="level" onChange={handleCourseConfig} value={level}>
              {selectedLevel}
            </select>
          </div>

          <button type="submit" className="submit_config">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;

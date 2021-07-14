import React from "react";
import "./button.css";

const Button = ({ ButtonText, className }) => {


  return (
    <>
      <button className={className}>{ButtonText}</button>
    </>
  );
};

export default Button;

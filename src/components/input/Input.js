import React from "react";
import "./input.scss";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      value={props.state}
      onChange={(e) => props.setState(e)}
      required
    />
  );
};

export default Input;

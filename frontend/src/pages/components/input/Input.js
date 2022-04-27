import React from "react";
import "./Input.scss";
/**
 * Input component
 */
export default function Input(props) {
  return (
    <div className="input-main">
      <input
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

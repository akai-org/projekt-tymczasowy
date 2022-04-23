import React from "react";
import "./Input.scss";
/**
 * Input component
 */
export default function Input(props) {
  return (
    <div className="input-main">
      <input type="text" placeholder={props.placeholder}></input>
    </div>
  );
}

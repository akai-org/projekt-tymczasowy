import React from "react";
import "./Button.scss";
function Button(props) {
  return (
    <div
      onClick={props.onClick}
      className="button-main"
      style={{ backgroundColor: props.bgcolor, color: props.color }}
    >
      {props.content}
    </div>
  );
}

export default Button;

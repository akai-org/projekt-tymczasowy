import React from "react";
import "./Button.scss";
function Button(props) {
  return (
    <div
      className="button-main"
      style={{ backgroundColor: props.bgcolor, color: props.color }}
    >
      {props.content}
    </div>
  );
}

export default Button;

import React from "react";
import "./Button.scss";
function Button(props) {
  return <div className="button-main">{props.content}</div>;
}

export default Button;

import React from "react";
import "./Card.scss";
export default function Card(props) {
  return <div class="card-main">{props.children}</div>;
}

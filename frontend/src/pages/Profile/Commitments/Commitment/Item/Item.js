import React from "react";
import "./Item.scss";
export default function Item({ quantity, name }) {
  return (
    <div className="item">
      <div>{quantity}x</div> <div className="name">{name}</div>
    </div>
  );
}

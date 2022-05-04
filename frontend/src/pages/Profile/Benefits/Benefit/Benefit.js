import React from "react";
import "./Benefit.scss";
import Button from "../../Button/Button";
export default function Benefit({ name, points, active }) {
  return (
    <div className={`benefit-main ${active ? "" : "active"}`}>
      <div className="name">{name}</div>
      <div className="button">
        <Button content="points">{points}pkt</Button>
      </div>
    </div>
  );
}

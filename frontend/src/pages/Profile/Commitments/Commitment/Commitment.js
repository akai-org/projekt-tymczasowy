import React from "react";
import "./Commitment.scss";
import Item from "./Item/Item";
export default function Commitment({ name, location, points, time }) {
  return (
    <div className="commitment-main">
      <div className="group">
        <div className="left">
          <div className="title2">{name}</div>
          <span>{location} </span>
          <div className="list">
            <Item quantity="2" name="Przeciwbólowe" />
            <Item quantity="3" name="Spodnie" />
            <Item quantity="4" name="Tshirt" />
          </div>
        </div>
        <div className="right">
          <div className="points">{points}pkt</div>
          <span className="time-left">{time} dni do końca</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Item.scss";
import Raise from "./Raise/Raise";
export default function Item() {
  return (
    <div className="item-main">
      <div className="item-title">10x Koszulka</div>
      <div className="item-maches">
        <div className="left">Dopasowania:</div>
        <div className="right">
          <Raise name="Zbiórka dla domu dziecka w Łodzi" id="1"></Raise>
          <Raise></Raise>
        </div>
      </div>
    </div>
  );
}

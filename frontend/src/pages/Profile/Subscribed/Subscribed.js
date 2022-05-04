import React from "react";
import "./Subscribed.scss";
import Subscription from "./Subscription/Subscription.js";
export default function Subscribed() {
  return (
    <div className="subscribed-main">
      <div className="title">Obserwowane zbiórki</div>
      <div className="list">
        <Subscription title="Zbiórka dla domu dziecka w Łodzi" />
        <Subscription title="Zbiórka dla domu dziecka w Łodzi" />
      </div>
    </div>
  );
}

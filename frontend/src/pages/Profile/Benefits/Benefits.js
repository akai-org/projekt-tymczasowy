import React from "react";
import "./Benefits.scss";
import Benefit from "./Benefit/Benefit";
export default function Benefits() {
  return (
    <div className="benefits-main">
      <div className="benefits-title">
        <div className="title">Benfity</div>
        <div className="points">Masz: 5500pkt</div>
      </div>
      <div className="list">
        <Benefit name="Bilet na komunikacje miejską" points="200" />
        <Benefit name="2x Bilet do kina Helios" points="1500" />
        <Benefit name="Spacer z Elon Muskiem" active="false" points="100 000" />
      </div>
    </div>
  );
}

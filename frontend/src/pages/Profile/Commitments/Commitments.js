import React from "react";
import "./Commitments.scss";
import Commitment from "./Commitment/Commitment.js";
export default function Commitments() {
  return (
    <div className="commitments-main">
      <div className="title">Zobowiązania</div>
      <div className="list">
        <Commitment
          name="Zbiórka dla rodzin z Ukrainy"
          location="Poznań  •  ul. Jana Matejki 32/42  23-244 "
          points="400"
          time="3"
        ></Commitment>
        <Commitment
          name="Zbiórka dla domu dziecka w Łodzi"
          location="Poznań  •  ul. Jana Matejki 32/42  23-244 "
          points="2000"
          time="2"
        ></Commitment>
      </div>
    </div>
  );
}

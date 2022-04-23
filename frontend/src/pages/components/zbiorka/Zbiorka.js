import React from "react";
import "./Zbiorka.scss";
function Zbiorka() {
  return (
    <div className="zbiorka-main">
      <h1 class="name">
        Nazwa zbiórki <p class="miasto">&bull; Poznań</p>{" "}
      </h1>
      <div class="pasek">
        <div class="pasek2"></div>
      </div>
      <h2 class="h2">Potrzebne:</h2>
      <div class="boxx">
        <div class="filtry">UBRANIA</div>
        <div class="filtry">LEKI</div>
        <div class="filtry">ZABAWKI</div>
      </div>
      <div class="opis">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </span>
      </div>
    </div>
  );
}

export default Zbiorka;

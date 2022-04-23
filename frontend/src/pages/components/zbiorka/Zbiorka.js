import React from "react";
import "./Zbiorka.scss";
function Zbiorka({ nazwa, miasto, opis }) {
  return (
    <div className="zbiorka-main">
      <h1 class="name">{nazwa}</h1>
      <h4 class="miasto">{miasto}</h4>
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
        <span>{opis}</span>
      </div>
    </div>
  );
}

export default Zbiorka;

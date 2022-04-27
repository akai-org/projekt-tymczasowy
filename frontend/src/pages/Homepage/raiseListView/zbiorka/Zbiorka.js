import React from "react";
import "./Zbiorka.scss";
import Category from "../../../components/category/CategoryC";
function Zbiorka({ nazwa, miasto, opis, onClick }) {
  return (
    <div onClick={onClick} className="zbiorka-main">
      <h1 class="name">{nazwa}</h1>
      <h4 class="miasto">{miasto}</h4>

      <div class="pasek">
        <div class="pasek2"></div>
      </div>
      <h2 class="h2">Potrzebne:</h2>
      <div class="boxx">
        <Category content="Ubrania"></Category>
        <Category content="Ubrania"></Category>
        <Category content="Ubrania"></Category>
      </div>
      <div class="opis">
        <span>{opis}</span>
      </div>
    </div>
  );
}

export default Zbiorka;

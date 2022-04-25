import React from "react";
import "./Description.scss";
import { BsArrowUpCircle } from "react-icons/bs";
import Box from "./Category/Box/Box";
import ProgressBar from "./Category/ProgressBar/ProgressBar";
import Category from "./Category/Category";
function Description() {
  return (
    <div className="description-view">
      <div className="opis-main">
        <h1 class="name2">Zbiórka dla rodzin z Ukrainy</h1>
        <span>Lokalizacja</span>
        <div>
          <span>Poznań • ul. Jana Matejki 32/42 23-244 </span>
        </div>
        <span>Koniec zbiórki</span>
        <div>
          <span>24.08.2022 </span>
        </div>

        <div class="filtry2">Główny cel</div>
        <div>
          <Category></Category>
          <Category></Category>
          <Category></Category>
        </div>
      </div>
    </div>
  );
}

export default Description;

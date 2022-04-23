import React from "react";
import "./Opis.scss";
function Opis() {
  return (
    <div className="opis-main">
      <h1 class="name">
        Zbiórka dla rodzin z Ukrainy 
      </h1>
      <span>Lokalizacja</span>
      <div>
      <span>Poznań  •  ul. Jana Matejki 32/42  23-244 </span>
      </div>

      <div class="pasek">
        <div class="pasek2"></div>
      </div>
      <div class="filtry">Główny cel</div>
      <h2 class="h2">Potrzebne:</h2>
      <div class="box">
        
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

export default Opis;

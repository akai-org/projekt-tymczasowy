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
      <span>Koniec zbiórki</span>
      <div>
      <span>24.08.2022 </span>
      </div>  
       <span>Osiągnięto 60% celu</span>
      <div class="pasek">
        <div class="pasek2"></div>
      </div>
   
      <div class="filtry">Główny cel</div>
      <h2 class="h2">Odzież</h2>
    <div class="box-container">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>

    </div>
    </div>
  );
}

export default Opis;

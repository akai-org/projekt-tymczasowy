import React from "react";
import "./Zbiorka.scss";
function Zbiorka() {
  return <div className="zbiorka-main">

    <h1 class="name">Nazwa zbiórki <p class ="miasto">Poznań</p> </h1>
      <div class="pasek"><div class="pasek2"></div></div>
      <h2 class="h2" >Potrzebne:</h2>
      <div  class="box" >
          <div class="filtry">UBRANIA</div>
          <div class="filtry">LEKI</div>
          <div class="filtry">ZABAWKI</div>
      </div>
 <div class="opis" >
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</span>
</div>
    </div>;
}

export default Zbiorka;

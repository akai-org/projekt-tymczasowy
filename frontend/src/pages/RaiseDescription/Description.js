import React from "react";
import "./Description.scss";
import Button from "../components/button/Button";
import Category from "./Category/Category";
import { HiOutlineShare } from "react-icons/hi";
import RaiseListView from "../Homepage/raiseListView/RaiseListView";
import CategoryC from "../components/category/CategoryC";
function Description() {
  return (
    <div className="description-view">
      <div className="opis-main">
        <div className="header">
          <h1 class="name2">Zbiórka dla rodzin z Ukrainy</h1>
          <div className="button-group">
            <div className="share">
              Udostępnij
              <HiOutlineShare></HiOutlineShare>
            </div>
            <div className="observe">
              <Button content="Obserwuj"></Button>
            </div>
          </div>
        </div>

        <span>Lokalizacja</span>
        <div>
          <span>Poznań • ul. Jana Matejki 32/42 23-244 </span>
        </div>
        <span>Koniec zbiórki</span>
        <div>
          <span>24.08.2022 </span>
        </div>

        {/* <div class="filtry2">Główny cel</div> */}
        <div className="main-goal">
          <CategoryC content="Cel Główny"></CategoryC>
        </div>
        <div>
          <Category progress="64" primary="true"></Category>
          <Category progress="80"></Category>
        </div>
      </div>
    </div>
  );
}

export default Description;

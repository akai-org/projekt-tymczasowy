import React from "react";
import "./NavBar.scss";
import Button from "../components/button/Button";
export default function NavBar() {

    const scroll = () => {
        
    }

  return (
    <div className="nav-main">
      <div className="title">Tinder dla zbórek</div>
      <div className="button-group">
        <div className="btn">
          <Button content="Zbiórki"></Button>
        </div>
        <div className="btn">
          <Button content="Zaloguj się"></Button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./NavBar.scss";
import Button from "../components/button/Button";
export default function NavBar() {
  return (
    <div className="nav-main">
      <div className="title">Tinder dla zbórek</div>
      <div className="button-group">
        <div className="btn">
          <Button content="test"></Button>
        </div>
        <div className="btn">
          <Button content="test"></Button>
        </div>
      </div>
    </div>
  );
}

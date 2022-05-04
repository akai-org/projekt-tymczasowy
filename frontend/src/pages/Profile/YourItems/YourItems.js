import React from "react";
import "./YourItems.scss";
import Button from "../Button/Button";
import Item from "./Item/Item";
export default function YourItems() {
  return (
    <div className="your-items-main">
      <div className="your-items-title">
        <div> Przedmioty do oddania</div>
        <div>
          <Button>Ogłoś przedmiot</Button>
        </div>
      </div>
      <div className="list">
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  );
}

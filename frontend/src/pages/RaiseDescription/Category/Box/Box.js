import React from "react";
import "./Box.scss";
import { BsArrowUpCircle } from "react-icons/bs";
import Button2 from "../../../components/button2/Button2";
export default function Box({ name, punkty }) {
  return (
    <div class="boxxx">
      <h3>{name}</h3>
      <BsArrowUpCircle class="arrow"> </BsArrowUpCircle>
      <span class="punkty">
        {punkty}pkt
        <p class="sztk">/1szt</p>
      </span>
      <Button2 content="Wspomóż"></Button2>
    </div>
  );
}

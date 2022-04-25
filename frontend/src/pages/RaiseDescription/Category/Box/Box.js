import React from "react";
import "./Box.scss";
import { BsArrowUpCircle } from "react-icons/bs";
export default function Box({ name, punkty }) {
  return (
    <div class="boxxx">
      <h3>{name}</h3>
      <BsArrowUpCircle class="arrow"> </BsArrowUpCircle>
      <span class="punkty">
        {punkty}pkt
        <p class="sztk">/1szt</p>
      </span>
      <div class="button2">Wspomóż</div>
    </div>
  );
}

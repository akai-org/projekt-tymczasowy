import React from "react";
import "./Category.scss";
import Box from "./Box/Box";
import ProgressBar from "./ProgressBar/ProgressBar";
export default function Category() {
  return (
    <div class="all">
      <h2>Odzież</h2>
      <ProgressBar progress={30}></ProgressBar>
      <div class="box-container">
        <Box name="Koszulki" punkty="50"></Box>
        <Box name="Spodnie" punkty=" 120pk"></Box>
        <Box name="Buty" punkty="300pk"></Box>
      </div>
    </div>
  );
}

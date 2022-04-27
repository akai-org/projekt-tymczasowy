import React from "react";
import "./Category.scss";
import Box from "./Box/Box";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
export default function Category({ progress, primary }) {
  return (
    <div class="all">
      <h3>Odzież</h3>
      <ProgressBar progress={progress} primary={primary}></ProgressBar>
      <div class="box-container">
        <Box name="Koszulki" punkty="50"></Box>
        <Box name="Spodnie" punkty=" 120"></Box>
        <Box name="Buty" punkty="300"></Box>
      </div>
    </div>
  );
}

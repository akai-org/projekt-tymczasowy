import React from "react";
import "./Subscribed.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
export default function Subscribed() {
  return (
    <div className="subscribed-main">
      <div className="title">Obserwowane zbiórki</div>
      <div className="list">
        <ProgressBar></ProgressBar>
      </div>
    </div>
  );
}

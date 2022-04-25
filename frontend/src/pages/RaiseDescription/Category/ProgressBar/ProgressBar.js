import React from "react";

import "./ProgressBar.scss";
export default function ProgressBar({ progress }) {
  return (
    <div>
      <span>Osiągnięto {progress}% celu</span>
      <div class="pasek">
        <div style={{ width: `${progress}%` }} class="main pasek2"></div>
      </div>
    </div>
  );
}

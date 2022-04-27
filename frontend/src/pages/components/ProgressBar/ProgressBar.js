import React from "react";
// import { blue } from "../../../../colors.scss";
import "./ProgressBar.scss";
export default function ProgressBar({ progress, primary }) {
  return (
    <div>
      <span>Osiągnięto {progress}% celu</span>
      <div class="pasek">
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: primary ? "#1cb0f1" : "",
          }}
          className={`pasek2`}
        ></div>
      </div>
    </div>
  );
}

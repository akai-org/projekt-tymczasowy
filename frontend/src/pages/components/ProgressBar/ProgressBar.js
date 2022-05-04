import React from "react";
// import { blue } from "../../../../colors.scss";
import "./ProgressBar.scss";
export default function ProgressBar({ progress, primary, align }) {
  return (
    <div>
      <div
        className="progress"
        style={{ textAlign: align ? `${align}` : "left" }}
      >
        Osiągnięto {progress}% celu
      </div>
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

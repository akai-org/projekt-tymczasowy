import React from "react";
import "./Subscription.scss";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import CategoryC from "../../../components/category/CategoryC.js";
export default function Subscription({ title }) {
  return (
    <div className="subscription-main">
      <div className="subscription-title">{title}</div>
      <ProgressBar progress={30} primary={true} align="right" />
      <div className="labels">
        <CategoryC content="Ubrania" />
        <CategoryC content="Ubrania" />
        <CategoryC content="Ubrania" />
      </div>
    </div>
  );
}

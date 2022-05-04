import React from "react";
import "./Raise.scss";
import { useNavigate } from "react-router-dom";
/**
 * Tu będzoe przekazywane id zbiórki i jej nazwa
 */
export default function Raise({ name, id }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/description");
      }}
      className="raise"
    >
      {name}
    </div>
  );
}

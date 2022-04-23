import React, { useEffect, useState } from "react";
import "./RaiseListView.scss";
import SearchBar from "../components/searchBar/SearchBar.js";
import Zbiorka from "../components/zbiorka/Zbiorka.js";

export default function RaiseListView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/fundraisers")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="main-list-view">
      <div className="search-bar">
        <SearchBar placeholder="Szukaj zbiórki..."></SearchBar>
      </div>
      <div className="list-view">
        <Zbiorka></Zbiorka>
        <Zbiorka></Zbiorka>
        <Zbiorka></Zbiorka>
        <Zbiorka></Zbiorka>
        <Zbiorka></Zbiorka>
      </div>
    </div>
  );
}

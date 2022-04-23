import React from "react";
import "./RaiseListView.scss";
import SearchBar from "../components/searchBar/SearchBar.js";
import Zbiorka from "../components/zbiorka/Zbiorka.js";
export default function RaiseListView() {
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

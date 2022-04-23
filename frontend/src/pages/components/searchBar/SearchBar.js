import React from "react";
import "./SearchBar.scss";
import { BsSearch } from "react-icons/bs";

export default function SearchBar(props) {
  return (
    <div className="search-main">
      <input type="text" placeholder={props.placeholder}></input>
      <BsSearch className="search-button"></BsSearch>
    </div>
  );
}

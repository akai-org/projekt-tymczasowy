import React from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";
export default function SearchBar(props) {
  return (
    <div className="search-main">
      <input type="text" placeholder={props.placeholder}></input>
      <FaSearch className="search-button"></FaSearch>
    </div>
  );
}

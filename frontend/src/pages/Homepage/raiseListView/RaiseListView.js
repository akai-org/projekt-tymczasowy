import React, { useEffect, useState } from "react";
import "./RaiseListView.scss";
import SearchBar from "./searchBar/SearchBar.js";
import Zbiorka from "./zbiorka/Zbiorka.js";
import { useNavigate } from "react-router-dom";
export default function RaiseListView() {
  let location = useNavigate();

  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/fundraisers")
      .then((response) => response.json())
      .then((data) => {
        let d = [];
        data["fundraisers"].forEach((element) => {
          console.log(element);
          d.push(
            <Zbiorka
              onClick={() => {
                location("/description");
              }}
              miasto={element.city}
              nazwa={element.name}
              opis={element.description}
            />
          );
        });

        setData(d);
        setDisplay(d);
      });
  }, []);

  const filter = (name) => {
    if (name != "") {
      const d = data.filter((item) =>
        String(item.props.nazwa).toLowerCase().startsWith(name.toLowerCase())
      );
      console.log(d);
      setDisplay(d);
    } else {
      setDisplay(data);
    }
  };

  return (
    <div className="main-list-view">
      <div className="search-bar">
        <SearchBar
          onChange={(event) => {
            filter(event.target.value);
          }}
          placeholder="Szukaj zbiórki..."
        ></SearchBar>
      </div>

      <div className="list-view">{display}</div>
    </div>
  );
}

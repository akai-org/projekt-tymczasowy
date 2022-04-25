import React from "react";
import "./NavBar.scss";
import Button from "../components/button/Button";
import { useNavigate, useLocation } from "react-router-dom";
export default function NavBar() {
  let buttonGrup;

  let navigate = useNavigate();
  let location = useLocation();

  const scroll = () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const normal = (
    <>
      <a
        className="link"
        onClick={() => {
          scroll();
        }}
      >
        Zbiórki
      </a>

      <div className="btn">
        <Button
          onClick={() => {
            navigate("/login");
          }}
          content="Zaloguj się"
        ></Button>
      </div>
    </>
  );

  const onLoginPage = (
    <>
      <a
        className="link"
        onClick={() => {
          navigate("/");
          setTimeout(() => {
            scroll();
          }, 150);
          scroll();
        }}
      >
        Zbiórki
      </a>
    </>
  );

  if (location.pathname == "/login") {
    buttonGrup = onLoginPage;
  } else {
    buttonGrup = normal;
  }
  return (
    <div className="nav-main">
      <div
        className="title"
        onClick={() => {
          navigate("/");
        }}
      >
        Tinder dla zbórek
      </div>
      <div className="button-group">{buttonGrup}</div>
    </div>
  );
}

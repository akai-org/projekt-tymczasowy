import Input from "../components/input/Input.js";
import "./LoginPage.scss";
import { useState } from "react";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const login = () => {
    console.log(username);
    console.log(password);
    sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
    fetch("http://localhost:8000/api/v1/users", {
      headers: { Authorization: sessionStorage.getItem("token") },
    })
      .then((res) => JSON.stringify(res))
      .then((response) => console.log(response));
    nav("/profile");
  };

  return (
    <div className="login-page-view">
      <div className="box">
        <h1 className="message">
          Dołącz do Tinder dla zbiórek i pomagaj oddając rzeczy potrzebującym!
        </h1>

        <div className="form">
          <div className="input">
            <Input
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              placeholder="login"
            />
          </div>

          <div className="input">
            <Input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="password"
            />
          </div>
        </div>

        <div className="actions">
          <div className="button">
            <Button onClick={() => login()} content="Zaloguj się"></Button>
          </div>
          <a className="createAccountCTA">Stwórz konto</a>
        </div>
      </div>
    </div>
  );
}

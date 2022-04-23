import Input from "../components/input/Input.js";
import "./LoginPage.scss";

import Button from "../components/button/Button";

export default function LoginPage() {
  return (
    <div className="login-page-view">
      <div className="box">
        <h1 className="message">
          Dołącz do Tinder dla zbiórek i pomagaj oddając rzeczy potrzebującym!
        </h1>

        <div className="form">
          <div className="input">
            <Input placeholder="login" />
          </div>

          <div className="input">
            <Input placeholder="password" />
          </div>
        </div>

        <div className="actions">
          <Button content="Zaloguj się"></Button>
          <a className="createAccountCTA">Stwórz konto</a>
        </div>
      </div>
    </div>
  );
}

import "./LandingPage.scss";
import Button from "../../components/button/Button";

import { useNavigate } from "react-router-dom";

export function LandingPage() {
  let location = useNavigate();

  return (
    <div className="content">
      <div className="greeting">
        <h1>Tinder dla zbiórek</h1>
        <p>
        


          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="btn">
          <Button
            onClick={() => {
              location("/login");
            }}
            content="Zapisz się na zbiórkę"
          ></Button>
          <Button
            onClick={() => {
              location("/login");
            }}
            bgcolor="white"
            color="black"
            content="Stwórz zbiórkę"
          ></Button>
        </div>
      </div>

      <div className="image">
        <img alt="logo" src="/images/logo.jpg"></img>
      </div>
    </div>
  );
}

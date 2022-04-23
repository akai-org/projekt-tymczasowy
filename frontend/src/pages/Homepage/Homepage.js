import "./Homepage.scss";
import Button from "../components/button/Button";
export function Homepage() {
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
          <Button content="Zapisz się na zbiórkę"></Button>
          <Button
            bgcolor="white"
            color="black"
            content="Stwórz zbiórka"
          ></Button>
        </div>
      </div>

      <div className="image">
        <img alt="logo" src="/images/logo.jpg"></img>
      </div>
    </div>
  );
}

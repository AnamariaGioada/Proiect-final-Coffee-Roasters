import "./notFound.scss";
import CoffeeStain from "../SVG/coffeeStain.svg";

function NotFound() {
  return (
    <div className="message">
      <div className="cup-image">
        <CoffeeStain />
        <p>
          Oops! <br></br>
          There's nothing here!
        </p>
      </div>
    </div>
  );
}

export default NotFound;

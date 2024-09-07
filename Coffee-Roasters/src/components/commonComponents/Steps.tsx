import "./steps.scss";

function Steps() {
  return (
    <div id="stepsContainer">
      <h4 className="stepsTitle">How it works</h4>
      <ul id="steps">
        <li className="firstStep">
          <div className="circle"></div>
          <h1>01</h1>
          <h3>
            Pick your <br />
            coffee
          </h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </li>
        <li className="secondStep">
          <div className="circle"></div>
          <h1>02</h1>
          <h3>Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </li>
        <li className="thirdStep">
          <div className="circle"></div>
          <h1>03</h1>
          <h3>Receive and enjoy!</h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Steps;

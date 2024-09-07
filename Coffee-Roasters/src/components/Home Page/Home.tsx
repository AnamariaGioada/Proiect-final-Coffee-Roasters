import "./home.scss";
import CoffeeBean from "../SVG/coffeeBean.svg";
import Gift from "../SVG/gift.svg";
import Truck from "../SVG/truck.svg";

function Home() {
  return (
    <>
      {/* Hero Container  */}
      <div id="heroContainer">
        <div id="hero">
          <div id="heroContent">
            <h1>Great coffee made simple.</h1>
            <p className="presentationParagraph">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <a href="" target="_blank">
              <button className="primaryButton">Create your plan</button>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Our Collection --> */}
      <div id="productListingContainer">
        <div id="title">our collection</div>
        <div id="productListing">
          <ul>
            <li>
              <img src="/images/image-gran-espresso.png" alt="gran espresso" />
              <div className="productDescription">
                <h4>Gran Espresso</h4>
                <p className="presentationParagraph">
                  Light and flavorful blend with cocoa and black pepper for an
                  intense experience.
                </p>
              </div>
            </li>
            <li>
              <img src="/images/image-planalto.png" alt="planalto coffee" />
              <div className="productDescription">
                <h4>Planalto</h4>
                <p className="presentationParagraph">
                  Brazilian dark roast with rich and velvety body, and hints of
                  fruits and nuts.
                </p>
              </div>
            </li>
            <li>
              <img src="/images/image-piccollo.png" alt="piccollo coffee" />
              <div className="productDescription">
                <h4>Piccollo</h4>
                <p className="presentationParagraph">
                  Mild and smooth blend featuring notes of toasted almond and
                  dried cherry.
                </p>
              </div>
            </li>
            <li>
              <img src="/images/image-danche.png" alt="danche coffee" />
              <div className="productDescription">
                <h4>Danche</h4>
                <p className="presentationParagraph">
                  Ethiopian hand-harvested blend densely packed with vibrant
                  fruit notes.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Why choose us? --> */}
      <div id="whyChoose">
        <div id="background">
          <div id="reasonToChoose">
            <h2>Why choose us?</h2>
            <p>
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>
        </div>
        <ul id="reasonsList">
          <li className="reasonsItem">
            <div className="icon coffee-bean">
              <CoffeeBean />
            </div>

            <h4 className="reasonName">Best quality</h4>
            <p className="reasonDescription">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </li>
          <li className="reasonsItem">
            <div className="icon gift">
              <Gift />
            </div>

            <h4 className="reasonName">Exclusive benefits</h4>
            <p className="reasonDescription">
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </li>
          <li className="reasonsItem">
            <div className="icon truck">
              <Truck />
            </div>

            <h4 className="reasonName">Free shipping</h4>
            <p className="reasonDescription">
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </li>
        </ul>
      </div>

      {/* <!-- How it works --> */}
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
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </li>
          <li className="thirdStep">
            <div className="circle"></div>
            <h1>03</h1>
            <h3>Receive and enjoy!</h3>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </li>
        </ul>
      </div>

      {/* <!-- Create your plan button --> */}
      <div className="button">
        <button className="primaryButton">Create your plan</button>
      </div>
    </>
  );
}

export default Home;

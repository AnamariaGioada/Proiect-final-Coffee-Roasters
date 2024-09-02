import "./home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div id="homeContainer">
      {/* <!-- Navigation bar --> */}
      <nav id="navigationBar">
        <div className="logo">
          <img src="/images/logo.svg" alt="Coffe Roasters logo" />
        </div>
        <div className="menu">
          <ul id="menuList">
            <li className="home">
              <Link to="/">HOME</Link>
            </li>
            <li className="aboutUs">
              <Link to="about-us">ABOUT US</Link>
            </li>
            <li className="createYourPlan">
              <Link to="create-your-plan">CREATE YOUR PLAN</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- Hero Container --> */}
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
            <img
              className="coffee-bean"
              src="/images/icon-coffee-bean.svg"
              alt="Quality-coffee-bean icon"
            />
            <h4 className="reasonName">Best quality</h4>
            <p className="reasonDescription">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </li>
          <li className="reasonsItem">
            <img
              className="gift"
              src="/images/icon-gift.svg"
              alt="Exclusive-benefits icon"
            />
            <h4 className="reasonName">Exclusive benefits</h4>
            <p className="reasonDescription">
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </li>
          <li className="reasonsItem">
            <img
              className="truck"
              src="/images/icon-truck.svg"
              alt="Shipping icon"
            />
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

      {/* <!-- Footer --> */}
      <footer>
        <div className="footerLeft">
          <div className="logo">
            <img src="/images/logo-onCream.svg" alt="Coffe Roasters logo" />
          </div>
          <div className="menu">
            <ul id="menuList">
              <li className="home">
                <Link to="/">HOME</Link>
              </li>
              <li className="aboutUs">
                <Link to="about-us">ABOUT US</Link>
              </li>
              <li className="createYourPlan">
                <Link to="create-your-plan">CREATE YOUR PLAN</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="socialMedia">
          <ul>
            <li className="facebook">
              <a href="https://www.facebook.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path
                    fill="#FEFCF7"
                    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                  />
                </svg>
              </a>
            </li>
            <li className="twitter">
              <a href="https://x.com/?lang=en" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                  <path
                    fill="#FEFCF7"
                    d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                  />
                </svg>
              </a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path
                    fill="#FEFCF7"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;

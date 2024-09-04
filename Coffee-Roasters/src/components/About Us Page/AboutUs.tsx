import Footer from "../Common Components/Footer";
import NavBar from "../Common Components/NavBar";
import "./aboutUs.scss";

function AboutUs() {
  return (
    <div id="PageContainer">
      <NavBar />

      {/* About Us  */}
      <div id="aboutHeroContainer">
        <div id="heroContainer">
          <div id="whiteCup">
            <div id="heroContent">
              <h2> About Us</h2>
              <p className="aboutUsParagraph">
                Coffeeroasters began its journey of exotic discovery in 1999,
                highlighting stories of coffee from around the world. We have
                since been dedicated to bring the perfect cup - from bean to
                brew - in every shipment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our commitment */}
      <div id="commitmentContainer">
        <div id="commitmentImage"></div>
        <div id="commitmentPresentation">
          <h2>Our commitment</h2>
          <p className="commitmentParagraph">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

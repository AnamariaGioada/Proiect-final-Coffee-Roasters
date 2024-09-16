import Steps from "../commonComponents/Steps";
import "./createYourPlan.scss";
import SectionLabel from "./SectionLabel";
import SummaryParagraph from "./SummaryParagraph";
import Section from "./Section";
import Card from "./Card";
import PrimaryAnchor from "../commonComponents/PrimaryAnchor";
function CreateYourPlan() {
  return (
    <>
      {/* Create plan hero */}
      <div id="heroContainer">
        <div id="hero-blackcup">
          <div id="heroContent">
            <h1>Create plan</h1>
            <p className="presentationParagraph">
              Coffee the way you wanted it to be. For coffee delivered tomorrow,
              or next week. For whatever brew method you use. For choice, for
              convenience, for quality.
            </p>
          </div>
        </div>
      </div>
      <div className="dark stepsContainer">
        <Steps />
      </div>

      {/* Sections columns */}
      <div id="section-columns">
        <div className="section-labels">
          <SectionLabel orderNumber="01" name="Preferences" />
          <SectionLabel orderNumber="02" name="Bean Type" />
          <SectionLabel orderNumber="03" name="Quantity" />
          <SectionLabel orderNumber="04" name="Grind Option" />
          <SectionLabel orderNumber="05" name="Deliveries" />
        </div>
        <div className="sections">
          <Section
            question="How do you drink your coffee?"
            isOpen={false}
            disabled={false}
          >
            <Card
              title="Capsule"
              text="Compatible with Nespresso systems and similar brewers"
              selected={false}
            />
            <Card
              title="Filter"
              text="For pour over or drip methods like Aeropress, Chemex, and V60"
              selected={false}
            />
            <Card
              title="Espresso"
              text="Dense and finely ground beans for an intense, flavorful experience"
              selected={false}
            />
          </Section>

          <Section
            question="What type of coffee?"
            isOpen={false}
            disabled={false}
          >
            <Card
              title="Single Origin"
              text="Distinct, high quality coffee from a specific family-owned farm"
              selected={false}
            />
            <Card
              title="Decaf"
              text="Just like regular coffee, except the caffeine has been removed"
              selected={false}
            />
            <Card
              title="Blended"
              text="Combination of two or three dark roasted beans of organic coffees"
              selected={false}
            />
          </Section>

          <Section
            question="How much would you like?"
            isOpen={false}
            disabled={false}
          >
            <Card
              title="250g"
              text="Perfect for the solo drinker. Yields about 12 delicious cups."
              selected={false}
            />
            <Card
              title="500g"
              text="Perfect option for a couple. Yields about 40 delectable cups."
              selected={false}
            />
            <Card
              title="1000g"
              text="Perfect for offices and events. Yields about 90 delightful cups."
              selected={false}
            />
          </Section>

          <Section
            question="Want us to grind them?"
            isOpen={false}
            disabled={false}
          >
            <Card
              title="Wholebean"
              text="Best choice if you cherish the full sensory experience"
              selected={false}
            />
            <Card
              title="Filter"
              text="For drip or pour-over coffee methods such as V60 or Aeropress"
              selected={false}
            />
            <Card
              title="Cafetiére"
              text="Course ground beans specially suited for french press coffee"
              selected={false}
            />
          </Section>

          <Section
            question="How often should we deliver?"
            isOpen={false}
            disabled={false}
          >
            <Card
              title="Every week"
              text="$7.20 per shipment. Includes free first-class shipping."
              selected={false}
            />
            <Card
              title="Every 2 weeks"
              text="$9.60 per shipment. Includes free priority shipping."
              selected={false}
            />
            <Card
              title="Every month"
              text="$12.00 per shipment. Includes free priority shipping."
              selected={false}
            />
          </Section>

          {/* Order summary */}
          <div className="summary-container">
            <p>ORDER SUMMARY</p>
            <SummaryParagraph />
          </div>
          <div className="primary-anchor">
            <PrimaryAnchor>Create my plan!</PrimaryAnchor>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateYourPlan;

import Steps from "../commonComponents/Steps";
import "./createYourPlan.scss";
import SectionLabel from "./SectionLabel";
import SummaryParagraph from "./SummaryParagraph";
import Section from "./Section";
import Card from "./Card";
import PrimaryAnchor from "../commonComponents/PrimaryAnchor";
import { useState } from "react";

function CreateYourPlan() {
  const [currentSection, setCurrentSection] = useState("preference");
  const [sections, setSections] = useState({
    preference: { isOpen: true, valueSelected: null },
    beanType: { isOpen: false, valueSelected: null },
    quantity: { isOpen: false, valueSelected: null },
    grindOption: { isOpen: false, valueSelected: null },
    deliveries: { isOpen: false, valueSelected: null },
  });

  const toggleSection = (section) => {
    sections[section].isOpen = !sections[section].isOpen;
    setSections(sections);
  };

  const chooseOption = (section, value) => {
    sections[section].valueSelected = value;
    console.log(sections);
    setSections(sections);
  };

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
            onClick={() => {
              toggleSection("preference");
            }}
            question="How do you drink your coffee?"
            isOpen={sections.preference.isOpen}
            disabled={false}
          >
            <Card
              onClick={() => {
                chooseOption("preference", "capsule");
              }}
              title="Capsule"
              text="Compatible with Nespresso systems and similar brewers"
              selected={sections.preference.valueSelected === "capsule"}
            />
            <Card
              title="Filter"
              text="For pour over or drip methods like Aeropress, Chemex, and V60"
              selected={sections.preference.valueSelected === "filter"}
            />
            <Card
              title="Espresso"
              text="Dense and finely ground beans for an intense, flavorful experience"
              selected={sections.preference.valueSelected === "espresso"}
            />
          </Section>

          <Section
            question="What type of coffee?"
            isOpen={sections.beanType.isOpen}
            disabled={false}
          >
            <Card
              title="Single Origin"
              text="Distinct, high quality coffee from a specific family-owned farm"
              selected={sections.beanType.valueSelected === "singleOrigin"}
            />
            <Card
              title="Decaf"
              text="Just like regular coffee, except the caffeine has been removed"
              selected={sections.beanType.valueSelected === "decaf"}
            />
            <Card
              title="Blended"
              text="Combination of two or three dark roasted beans of organic coffees"
              selected={sections.beanType.valueSelected === "blended"}
            />
          </Section>

          <Section
            question="How much would you like?"
            isOpen={sections.quantity.isOpen}
            disabled={false}
          >
            <Card
              title="250g"
              text="Perfect for the solo drinker. Yields about 12 delicious cups."
              selected={sections.quantity.valueSelected === "250g"}
            />
            <Card
              title="500g"
              text="Perfect option for a couple. Yields about 40 delectable cups."
              selected={sections.quantity.valueSelected === "500g"}
            />
            <Card
              title="1000g"
              text="Perfect for offices and events. Yields about 90 delightful cups."
              selected={sections.quantity.valueSelected === "1000g"}
            />
          </Section>

          <Section
            question="Want us to grind them?"
            isOpen={sections.grindOption.isOpen}
            disabled={false}
          >
            <Card
              title="Wholebean"
              text="Best choice if you cherish the full sensory experience"
              selected={sections.grindOption.valueSelected === "wholebean"}
            />
            <Card
              title="Filter"
              text="For drip or pour-over coffee methods such as V60 or Aeropress"
              selected={sections.grindOption.valueSelected === "grindFilter"}
            />
            <Card
              title="Cafetiére"
              text="Course ground beans specially suited for french press coffee"
              selected={sections.grindOption.valueSelected === "cafetiere"}
            />
          </Section>

          <Section
            question="How often should we deliver?"
            isOpen={sections.deliveries.isOpen}
            disabled={false}
          >
            <Card
              title="Every week"
              text="$7.20 per shipment. Includes free first-class shipping."
              selected={sections.deliveries.valueSelected === "weekly"}
            />
            <Card
              title="Every 2 weeks"
              text="$9.60 per shipment. Includes free priority shipping."
              selected={sections.deliveries.valueSelected === "bimonthly"}
            />
            <Card
              title="Every month"
              text="$12.00 per shipment. Includes free priority shipping."
              selected={sections.deliveries.valueSelected === "monthly"}
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

import Steps from "../commonComponents/Steps";
import "./createYourPlan.scss";
import SectionLabel from "./SectionLabel";
import SummaryParagraph from "./SummaryParagraph";
import Section from "./Section";
import Card from "./Card";
import PrimaryAnchor from "../commonComponents/PrimaryAnchor";
import { useState } from "react";

type SectionKey =
  | "preference"
  | "beanType"
  | "quantity"
  | "grindOption"
  | "deliveries";

function CreateYourPlan() {
  const [currentSection, setCurrentSection] = useState("preference");

  const [preference, setPreference] = useState({
    isOpen: true,
    valueSelected: null,
  });

  const [beanType, setBeanType] = useState({
    isOpen: false,
    valueSelected: null,
  });

  const [quantity, setQuantity] = useState({
    isOpen: false,
    valueSelected: null,
  });

  const [grindOption, setGrindOption] = useState({
    isOpen: false,
    valueSelected: null,
  });

  const [deliveries, setDeliveries] = useState({
    isOpen: false,
    valueSelected: null,
  });

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
              setPreference({ ...preference, isOpen: !preference.isOpen });
            }}
            question="How do you drink your coffee?"
            isOpen={preference.isOpen}
            disabled={false}
          />
          {preference.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setPreference({ ...preference, valueSelected: "capsule" });
                }}
                title="Capsule"
                text="Compatible with Nespresso systems and similar brewers"
                selected={preference.valueSelected === "capsule"}
              />
              <Card
                onClick={() => {
                  setPreference({ ...preference, valueSelected: "filter" });
                }}
                title="Filter"
                text="For pour over or drip methods like Aeropress, Chemex, and V60"
                selected={preference.valueSelected === "filter"}
              />

              <Card
                onClick={() => {
                  setPreference({ ...preference, valueSelected: "espresso" });
                }}
                title="Espresso"
                text="Dense and finely ground beans for an intense, flavorful experience"
                selected={preference.valueSelected === "espresso"}
              />
            </div>
          ) : null}

          <Section
            onClick={() => {
              setBeanType({ ...beanType, isOpen: !beanType.isOpen });
            }}
            isOpen={beanType.isOpen}
            question="What type of coffee?"
            disabled={false}
          />
          {beanType.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setBeanType({ ...beanType, valueSelected: "singleOrigin" });
                }}
                title="Single Origin"
                text="Distinct, high quality coffee from a specific family-owned farm"
                selected={beanType.valueSelected === "singleOrigin"}
              />
              <Card
                onClick={() => {
                  setBeanType({ ...beanType, valueSelected: "decaf" });
                }}
                title="Decaf"
                text="Just like regular coffee, except the caffeine has been removed"
                selected={beanType.valueSelected === "decaf"}
              />
              <Card
                onClick={() => {
                  setBeanType({ ...beanType, valueSelected: "blended" });
                }}
                title="Blended"
                text="Combination of two or three dark roasted beans of organic coffees"
                selected={beanType.valueSelected === "blended"}
              />
            </div>
          ) : null}

          <Section
            onClick={() => {
              setQuantity({ ...quantity, isOpen: !quantity.isOpen });
            }}
            question="How much would you like?"
            isOpen={quantity.isOpen}
            disabled={false}
          />
          {quantity.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setQuantity({ ...quantity, valueSelected: "250g" });
                }}
                title="250g"
                text="Perfect for the solo drinker. Yields about 12 delicious cups."
                selected={quantity.valueSelected === "250g"}
              />
              <Card
                onClick={() => {
                  setQuantity({ ...quantity, valueSelected: "500g" });
                }}
                title="500g"
                text="Perfect option for a couple. Yields about 40 delectable cups."
                selected={quantity.valueSelected === "500g"}
              />
              <Card
                onClick={() => {
                  setQuantity({ ...quantity, valueSelected: "1000g" });
                }}
                title="1000g"
                text="Perfect for offices and events. Yields about 90 delightful cups."
                selected={quantity.valueSelected === "1000g"}
              />
            </div>
          ) : null}

          <Section
            onClick={() => {
              setGrindOption({ ...grindOption, isOpen: !grindOption.isOpen });
            }}
            question="Want us to grind them?"
            isOpen={grindOption.isOpen}
            disabled={false}
          />
          {grindOption.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setGrindOption({
                    ...grindOption,
                    valueSelected: "wholebean",
                  });
                }}
                title="Wholebean"
                text="Best choice if you cherish the full sensory experience"
                selected={grindOption.valueSelected === "wholebean"}
              />
              <Card
                onClick={() => {
                  setGrindOption({
                    ...grindOption,
                    valueSelected: "grindFilter",
                  });
                }}
                title="Filter"
                text="For drip or pour-over coffee methods such as V60 or Aeropress"
                selected={grindOption.valueSelected === "grindFilter"}
              />
              <Card
                onClick={() => {
                  setGrindOption({
                    ...grindOption,
                    valueSelected: "cafetiere",
                  });
                }}
                title="Cafetiére"
                text="Course ground beans specially suited for french press coffee"
                selected={grindOption.valueSelected === "cafetiere"}
              />
            </div>
          ) : null}

          <Section
            onClick={() => {
              setDeliveries({ ...deliveries, isOpen: !deliveries.isOpen });
            }}
            question="How often should we deliver?"
            isOpen={deliveries.isOpen}
            disabled={false}
          />
          {deliveries.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setDeliveries({
                    ...deliveries,
                    valueSelected: "weekly",
                  });
                }}
                title="Every week"
                text="$7.20 per shipment. Includes free first-class shipping."
                selected={deliveries.valueSelected === "weekly"}
              />
              <Card
                onClick={() => {
                  setDeliveries({
                    ...deliveries,
                    valueSelected: "bimonthly",
                  });
                }}
                title="Every 2 weeks"
                text="$9.60 per shipment. Includes free priority shipping."
                selected={deliveries.valueSelected === "bimonthly"}
              />
              <Card
                onClick={() => {
                  setDeliveries({
                    ...deliveries,
                    valueSelected: "monthly",
                  });
                }}
                title="Every month"
                text="$12.00 per shipment. Includes free priority shipping."
                selected={deliveries.valueSelected === "monthly"}
              />
            </div>
          ) : null}

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

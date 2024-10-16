import Steps from "../commonComponents/Steps";
import "./createYourPlan.scss";
import SectionLabel from "./SectionLabel";
import SummaryParagraph from "./SummaryParagraph";
import Section from "./Section";
import Card from "./Card";
import { useState, useRef } from "react";
import PrimaryButton from "../commonComponents/PrimaryButton";
import OrderPopup from "../commonComponents/OrderSummaryPopup";
import { createPortal } from "react-dom";

function CreateYourPlan() {
  const [showPopUp, setShowPopUp] = useState(false);

  const [currentSection, setCurrentSection] = useState("preference");
  const [preference, setPreference] = useState<{
    isOpen: boolean;
    valueSelected: string | null;
  }>({
    isOpen: true,
    valueSelected: null,
  });

  const [beanType, setBeanType] = useState<{
    isOpen: boolean;
    valueSelected: string | null;
  }>({
    isOpen: false,
    valueSelected: null,
  });

  const [quantity, setQuantity] = useState<{
    isOpen: boolean;
    valueSelected: string | null;
  }>({
    isOpen: false,
    valueSelected: null,
  });

  const [grindOption, setGrindOption] = useState<{
    isOpen: boolean;
    valueSelected: string | null;
  }>({
    isOpen: false,
    valueSelected: null,
  });

  const [deliveries, setDeliveries] = useState<{
    isOpen: boolean;
    valueSelected: string | null;
  }>({
    isOpen: false,
    valueSelected: null,
  });

  const preferenceRef = useRef<HTMLDivElement>(null);
  const beanTypeRef = useRef<HTMLDivElement>(null);
  const quantityRef = useRef<HTMLDivElement>(null);
  const grindOptionRef = useRef<HTMLDivElement>(null);
  const deliveriesRef = useRef<HTMLDivElement>(null);

  function isGrindOptionDisabled() {
    return preference.valueSelected === "Capsules";
  }

  function goToPreference() {
    setPreference({ ...preference, isOpen: true });
    setCurrentSection("preference");
    preferenceRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function goToBeanType() {
    setBeanType({ ...beanType, isOpen: true });
    setCurrentSection("beanType");
    beanTypeRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function goToQuantity() {
    setQuantity({ ...quantity, isOpen: true });
    setCurrentSection("quantity");
    quantityRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function goToGrindOption() {
    setGrindOption({ ...grindOption, isOpen: true });
    setCurrentSection("grindOption");
    grindOptionRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function goToDeliveries() {
    setDeliveries({ ...deliveries, isOpen: true });
    setCurrentSection("deliveries");
    deliveriesRef.current?.scrollIntoView({ behavior: "smooth" });
  }

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
        <div>
          <div className="section-labels">
            <SectionLabel
              orderNumber="01"
              name="Preferences"
              selected={currentSection === "preference"}
              onClick={goToPreference}
            />
            <SectionLabel
              orderNumber="02"
              name="Bean Type"
              selected={currentSection === "beanType"}
              onClick={goToBeanType}
            />
            <SectionLabel
              orderNumber="03"
              name="Quantity"
              selected={currentSection === "quantity"}
              onClick={goToQuantity}
            />
            <SectionLabel
              orderNumber="04"
              name="Grind Option"
              selected={currentSection === "grindOption"}
              disabled={isGrindOptionDisabled()}
              onClick={goToGrindOption}
            />
            <SectionLabel
              orderNumber="05"
              name="Deliveries"
              selected={currentSection === "deliveries"}
              onClick={goToDeliveries}
            />
          </div>
        </div>
        <div className="sections">
          <Section
            onClick={() => {
              setPreference({ ...preference, isOpen: !preference.isOpen });
            }}
            question="How do you drink your coffee?"
            isOpen={preference.isOpen}
            disabled={false}
            ref={preferenceRef}
          />
          {preference.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setPreference({ ...preference, valueSelected: "Capsules" });
                  setGrindOption({ isOpen: false, valueSelected: null });
                  goToBeanType();
                }}
                title="Capsules"
                text="Compatible with Nespresso systems and similar brewers"
                selected={preference.valueSelected === "Capsules"}
              />
              <Card
                onClick={() => {
                  setPreference({ ...preference, valueSelected: "Filter" });
                  goToBeanType();
                }}
                title="Filter"
                text="For pour over or drip methods like Aeropress, Chemex, and V60"
                selected={preference.valueSelected === "Filter"}
              />

              <Card
                onClick={() => {
                  setPreference({ ...preference, valueSelected: "Espresso" });
                  goToBeanType();
                }}
                title="Espresso"
                text="Dense and finely ground beans for an intense, flavorful experience"
                selected={preference.valueSelected === "Espresso"}
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
            ref={beanTypeRef}
          />
          {beanType.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setBeanType({ ...beanType, valueSelected: "Single Origin" });
                  goToQuantity();
                }}
                title="Single Origin"
                text="Distinct, high quality coffee from a specific family-owned farm"
                selected={beanType.valueSelected === "Single Origin"}
              />
              <Card
                onClick={() => {
                  setBeanType({ ...beanType, valueSelected: "Decaf" });
                  goToQuantity();
                }}
                title="Decaf"
                text="Just like regular coffee, except the caffeine has been removed"
                selected={beanType.valueSelected === "Decaf"}
              />
              <Card
                onClick={() => {
                  setBeanType({ ...beanType, valueSelected: "Blended" });
                  goToQuantity();
                }}
                title="Blended"
                text="Combination of two or three dark roasted beans of organic coffees"
                selected={beanType.valueSelected === "Blended"}
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
            ref={quantityRef}
          />
          {quantity.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setQuantity({ ...quantity, valueSelected: "250 g" });
                  if (isGrindOptionDisabled()) {
                    goToDeliveries();
                  } else {
                    goToGrindOption();
                  }
                }}
                title="250 g"
                text="Perfect for the solo drinker. Yields about 12 delicious cups."
                selected={quantity.valueSelected === "250 g"}
              />
              <Card
                onClick={() => {
                  setQuantity({ ...quantity, valueSelected: "500 g" });
                  if (isGrindOptionDisabled()) {
                    goToDeliveries();
                  } else {
                    goToGrindOption();
                  }
                }}
                title="500 g"
                text="Perfect option for a couple. Yields about 40 delectable cups."
                selected={quantity.valueSelected === "500 g"}
              />
              <Card
                onClick={() => {
                  setQuantity({ ...quantity, valueSelected: "1000 g" });
                  if (isGrindOptionDisabled()) {
                    goToDeliveries();
                  } else {
                    goToGrindOption();
                  }
                }}
                title="1000 g"
                text="Perfect for offices and events. Yields about 90 delightful cups."
                selected={quantity.valueSelected === "1000 g"}
              />
            </div>
          ) : null}

          <Section
            onClick={() => {
              setGrindOption({ ...grindOption, isOpen: !grindOption.isOpen });
            }}
            question="Want us to grind them?"
            isOpen={grindOption.isOpen}
            disabled={isGrindOptionDisabled()}
            ref={grindOptionRef}
          />
          {grindOption.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setGrindOption({
                    ...grindOption,
                    valueSelected: "Wholebean",
                  });
                  goToDeliveries();
                }}
                title="Wholebean"
                text="Best choice if you cherish the full sensory experience"
                selected={grindOption.valueSelected === "Wholebean"}
              />
              <Card
                onClick={() => {
                  setGrindOption({
                    ...grindOption,
                    valueSelected: "Filter",
                  });
                  goToDeliveries();
                }}
                title="Filter"
                text="For drip or pour-over coffee methods such as V60 or Aeropress"
                selected={grindOption.valueSelected === "Filter"}
              />
              <Card
                onClick={() => {
                  setGrindOption({
                    ...grindOption,
                    valueSelected: "Cafetiére",
                  });
                  goToDeliveries();
                }}
                title="Cafetiére"
                text="Course ground beans specially suited for french press coffee"
                selected={grindOption.valueSelected === "Cafetiére"}
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
            ref={deliveriesRef}
          />
          {deliveries.isOpen ? (
            <div className="cards">
              <Card
                onClick={() => {
                  setDeliveries({
                    ...deliveries,
                    valueSelected: "Every week",
                  });
                }}
                title="Every week"
                text="$7.20 per shipment. Includes free first-class shipping."
                selected={deliveries.valueSelected === "Every week"}
              />
              <Card
                onClick={() => {
                  setDeliveries({
                    ...deliveries,
                    valueSelected: "Every 2 weeks",
                  });
                }}
                title="Every 2 weeks"
                text="$9.60 per shipment. Includes free priority shipping."
                selected={deliveries.valueSelected === "Every 2 weeks"}
              />
              <Card
                onClick={() => {
                  setDeliveries({
                    ...deliveries,
                    valueSelected: "Every month",
                  });
                }}
                title="Every month"
                text="$12.00 per shipment. Includes free priority shipping."
                selected={deliveries.valueSelected === "Every month"}
              />
            </div>
          ) : null}

          {/* Order summary */}
          <div className="summary-container">
            <p>ORDER SUMMARY</p>
            <SummaryParagraph
              preference={preference.valueSelected}
              beanType={beanType.valueSelected}
              quantity={quantity.valueSelected}
              grindOption={grindOption.valueSelected}
              deliveries={deliveries.valueSelected}
            />
          </div>

          <div className="primary-anchor">
            <PrimaryButton
              onClick={() => {
                setShowPopUp(true);
                localStorage.setItem(
                  "plan",
                  JSON.stringify({
                    preference: preference.valueSelected,
                    beanType: beanType.valueSelected,
                    quantity: quantity.valueSelected,
                    grindOption: grindOption.valueSelected,
                    deliveries: deliveries.valueSelected,
                  })
                );
              }}
              disabled={
                !(
                  preference.valueSelected &&
                  beanType.valueSelected &&
                  quantity.valueSelected &&
                  (preference.valueSelected === "Capsules"
                    ? true
                    : grindOption.valueSelected) &&
                  deliveries.valueSelected
                )
              }
            >
              Create my plan!
            </PrimaryButton>
          </div>
        </div>
      </div>
      {showPopUp
        ? createPortal(
            <OrderPopup
              preference={preference.valueSelected as string}
              beanType={beanType.valueSelected as string}
              quantity={quantity.valueSelected as string}
              grindOption={grindOption.valueSelected}
              deliveries={deliveries.valueSelected as string}
              closePopup={() => {
                setShowPopUp(false);
              }}
            />,
            document.body
          )
        : null}
    </>
  );
}

export default CreateYourPlan;

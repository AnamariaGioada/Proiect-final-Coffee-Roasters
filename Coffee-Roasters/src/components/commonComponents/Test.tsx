import "./test.scss";
import Card from "./Card";
import SectionLabel from "./SectionLabel";
import Section from "./Section";

export default function Test() {
  return (
    <>
      <div className="section-labels">
        <SectionLabel orderNumber="01" name="Preferences" />
        <SectionLabel orderNumber="01" name="Preferences" selected={true} />
        <SectionLabel orderNumber="01" name="Preferences" disabled={true} />
      </div>
      <div className="section">
        <Section
          question="How do you drink your coffee?"
          isOpen={false}
          disabled={false}
        />
        <Section
          question="How do you drink your coffee?"
          isOpen={true}
          disabled={false}
        />
        <Section
          question="How do you drink your coffee?"
          isOpen={false}
          disabled={true}
        />
      </div>
      <div className="cards">
        <Card
          title="Capsule"
          text="Compatible with Nespresso systems and similar brewers"
          selected={false}
        />
        <Card
          title="Capsule"
          text="Compatible with Nespresso systems and similar brewers"
          selected={true}
        />
      </div>
    </>
  );
}

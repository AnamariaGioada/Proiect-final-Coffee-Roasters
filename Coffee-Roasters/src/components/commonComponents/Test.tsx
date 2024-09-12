import "./test.scss";
import Card from "./Card";
import Field from "./Field";

export default function Test() {
  return (
    <>
      <div className="fields">
        <Field orderNumber="01" name="Preferences" />
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

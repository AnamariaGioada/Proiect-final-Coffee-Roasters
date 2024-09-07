import Steps from "../commonComponents/Steps";
import "./createYourPlan.scss";
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
      <div id="stepsContainer">
        <Steps />
      </div>
    </>
  );
}

export default CreateYourPlan;

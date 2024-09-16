import "./orderSummaryPopup.scss";
import PrimaryButton from "./PrimaryButton";

function OrderPopup() {
  return (
    <div id="order-summary-container">
      <div className="title">
        <h2>Order Summary</h2>
      </div>
      <div className="order-container"></div>
      {/* aici ar trebui sa vina SummaryParagraph, dar trebuie sa il regandesc ca sa pot afisa doar paragraful */}
      <p className="verify-message">
        Is this correct? You can proceed to checkout or go back to plan
        selection if something is off. Subscription discount codes can also be
        redeemed at the checkout.
      </p>
      <h2 className="price"></h2>
      {/* aici ar trebui sa am o metoda de calcul sau sa pun pretul de acolo..hmmm */}
      <PrimaryButton>Checkout</PrimaryButton>
    </div>
  );
}

export default OrderPopup;

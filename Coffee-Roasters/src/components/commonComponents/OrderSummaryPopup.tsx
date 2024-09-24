import SummaryParagraph from "../createYourPlanPage/SummaryParagraph";
import "./orderSummaryPopup.scss";
import PrimaryButton from "./PrimaryButton";

interface OrderPopupProps {
  preference: string | null;
  beanType: string | null;
  quantity: string | null;
  grindOption: string | null;
  deliveries: string | null;
}
function OrderPopup({
  preference,
  beanType,
  quantity,
  grindOption,
  deliveries,
}: React.PropsWithChildren<OrderPopupProps>) {
  return (
    <div id="order-summary-container">
      <div className="popup-content">
        <div className="title">
          <h2>Order Summary</h2>
        </div>
        <div className="content">
          <div className="paragraph-container">
            <SummaryParagraph
              preference={preference}
              beanType={beanType}
              quantity={quantity}
              grindOption={grindOption}
              deliveries={deliveries}
            />
          </div>
          <p className="verify-message">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="bottomContent">
            <h3 className="price">$14.00/mo</h3>
            {/* aici ar trebui sa am o metoda de calcul sau sa pun pretul de acolo..hmmm */}

            <div className="button">
              <PrimaryButton>Checkout</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default OrderPopup;

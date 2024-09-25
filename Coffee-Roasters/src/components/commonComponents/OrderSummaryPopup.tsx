import SummaryParagraph from "../createYourPlanPage/SummaryParagraph";
import "./orderSummaryPopup.scss";
import PrimaryAnchor from "./PrimaryAnchor";
import calculatePrice from "../../utils/calculatePrice";

interface OrderPopupProps {
  preference: string;
  beanType: string;
  quantity: string;
  grindOption: string | null;
  deliveries: string;
  closePopup: () => void;
}
function OrderPopup({
  preference,
  beanType,
  quantity,
  grindOption,
  deliveries,
  closePopup,
}: React.PropsWithChildren<OrderPopupProps>) {
  const { total } = calculatePrice({
    preferenceValue: preference,
    beanTypeValue: beanType,
    grindOptionValue: grindOption,
    quantityValue: quantity,
    frequencyValue: deliveries,
  });

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
            <h3 className="total-price">${total}/mo</h3>

            <div className="button">
              <PrimaryAnchor to="/checkout">Checkout</PrimaryAnchor>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={closePopup}></div>
    </div>
  );
}

export default OrderPopup;

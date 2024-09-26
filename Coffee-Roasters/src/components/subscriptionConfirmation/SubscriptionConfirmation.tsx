import "./SubscriptionConfirmation.scss";

function SubscriptionConfirmation() {
  return (
    <>
      <div className="confirm-subscription">
        <h2 className="message"> Thank you for subscribing!</h2>
        <img src="./images/coffee-bags-loading.jpg" alt="Cofee Bags Loading" />
        <p>
          Our team is working on your order. <br></br> We'll contact you soon
          for the confirmation and delivery details.{" "}
        </p>
      </div>
    </>
  );
}

export default SubscriptionConfirmation;

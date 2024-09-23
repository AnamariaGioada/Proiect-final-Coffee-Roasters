import "./summaryParagraph.scss";

interface ParagraphProps {
  preference: string | null;
  beanType: string | null;
  quantity: string | null;
  grindOption: string | null;
  deliveries: string | null;
}
function getPreferenceDisplay(preference: string | null) {
  if (!preference || preference.length == 0) {
    return (
      <>
        <span className="keyword">____</span>, with a{" "}
      </>
    );
  }
  return (
    <>
      <span className="keyword">{preference}</span>, with a{" "}
    </>
  );
}

function getBeanTypeDisplay(beanType: string | null) {
  if (!beanType || beanType.length == 0) {
    return (
      <>
        <span className="keyword">____</span> type of bean.{" "}
      </>
    );
  }
  return (
    <>
      <span className="keyword">{beanType}</span> type of bean.{" "}
    </>
  );
}

function getQuantityDisplay(quantity: string | null) {
  if (!quantity || quantity.length == 0) {
    return (
      <>
        <span className="keyword">____</span>
      </>
    );
  }
  return (
    <>
      <span className="keyword">{quantity}</span>
    </>
  );
}

function getGrindOptionsDisplay(grindOption: string | null) {
  if (!grindOption) {
    return null;
  }
  if (grindOption.length == 0) {
    return (
      <>
        {" "}
        ground ala <span className="keyword">____</span>{" "}
      </>
    );
  }
  return (
    <>
      {grindOption !== "Wholebean" ? " ground ala " : " "}
      <span className="keyword">{grindOption}</span>{" "}
    </>
  );
}

function getDeliveriesDisplay(deliveries: string | null) {
  if (!deliveries || deliveries.length == 0) {
    return (
      <>
        , sent to me <span className="keyword">____</span>
        .”
      </>
    );
  }
  return (
    <>
      , sent to me <span className="keyword">{deliveries}</span>
      .”
    </>
  );
}
function SummaryParagraph({
  preference,
  beanType,
  quantity,
  grindOption,
  deliveries,
}: React.PropsWithChildren<ParagraphProps>) {
  const preferenceDisplay = getPreferenceDisplay(preference);
  const beanTypeDisplay = getBeanTypeDisplay(beanType);
  const quantityDisplay = getQuantityDisplay(quantity);
  const grindOptionsDisplay = getGrindOptionsDisplay(grindOption);
  const deliveriesDisplay = getDeliveriesDisplay(deliveries);
  return (
    <h4>
      “I drink my coffee using {preferenceDisplay}
      {beanTypeDisplay}
      {quantityDisplay}
      {grindOptionsDisplay}
      {deliveriesDisplay}
    </h4>
  );
}
export default SummaryParagraph;

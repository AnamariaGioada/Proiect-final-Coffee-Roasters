import "./summaryParagraph.scss";

interface ParagraphProps {
  preference?: string;
  beanType?: string;
  quantity?: string;
  grindOption?: string;
  deliveries?: string;
}

function SummaryParagraph({
  preference,
  beanType,
  quantity,
  grindOption,
  deliveries,
}: React.PropsWithChildren<ParagraphProps>) {
  const preferenceDisplay =
    preference && preference.length ? preference : "____";
  const beanTypeDisplay = beanType && beanType.length ? beanType : "____";
  const quantityDisplay = quantity && quantity.length ? quantity : "____";
  const grindOptionDisplay =
    grindOption && grindOption.length ? grindOption : "____";
  const deliveriesDisplay =
    deliveries && deliveries.length ? deliveries : "____";
  return (
    <h4>
      “I drink my coffee using{" "}
      <span className="keyword">{preferenceDisplay}</span>, with a{" "}
      <span className="keyword">{beanTypeDisplay}</span> type of bean.{" "}
      <span className="keyword">{grindOptionDisplay}</span>
      <span className="keyword">{quantityDisplay}</span>, sent to me{" "}
      <span className="keyword">{deliveriesDisplay}</span>
      .”
    </h4>
  );
}
export default SummaryParagraph;

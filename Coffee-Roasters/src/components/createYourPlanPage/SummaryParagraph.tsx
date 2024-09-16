import "./summaryParagraph.scss";

interface ParagraphProps {
  preference: string;
  beanType: string;
  quantity: string;
  grindOption: string;
  deliveries: string;
}

function SummaryParagraph({
  preference,
  beanType,
  quantity,
  grindOption,
  deliveries,
}: React.PropsWithChildren<ParagraphProps>) {
  return (
    <div className="summary-container">
      <p>ORDER SUMMARY</p>
      <h4>
        “I drink my coffee using <span className="keyword">{preference}</span>,
        with a <span className="keyword">{beanType}</span> type of bean.{" "}
        <span className="keyword">{grindOption}</span>
        <span className="keyword">{quantity}</span>, sent to me{" "}
        <span className="keyword">{deliveries}</span>
        .”
      </h4>
    </div>
  );
}
export default SummaryParagraph;

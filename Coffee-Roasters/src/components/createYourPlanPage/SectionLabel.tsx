import "./sectionLabel.scss";
interface SectionLabelProps {
  orderNumber: string;
  name: string;
  selected?: boolean;
  disabled?: boolean;
}

function SectionLabel({
  orderNumber,
  name,
  selected,
  disabled,
}: React.PropsWithChildren<SectionLabelProps>) {
  return (
    <div
      className={`section-label ${selected ? "selected" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      <h4 className="order">{orderNumber}</h4>
      <h4 className="name">{name}</h4>
    </div>
  );
}

export default SectionLabel;

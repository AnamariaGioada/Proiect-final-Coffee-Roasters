import "./section.scss";
import Arrow from "../SVG/arrow.svg";

interface SectionProps {
  question: string;
  isOpen: boolean;
  disabled: boolean;
  onClick: () => void;
}

function Section({
  question,
  isOpen,
  disabled,
  onClick,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <div className={`section ${disabled ? "disabled" : ""}`}>
      <div
        onClick={() => {
          !disabled && onClick();
        }}
        className="section-elements"
      >
        <h2 className="question">{question}</h2>
        <span className={`${isOpen ? "isOpen" : ""}`}>
          <Arrow />
        </span>
      </div>
    </div>
  );
}
export default Section;

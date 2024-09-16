import "./section.scss";
import Arrow from "../SVG/arrow.svg";

interface SectionProps {
  question: string;
  isOpen: boolean;
  disabled: boolean;
}

function Section({
  question,
  isOpen,
  disabled,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <div className={`section ${disabled ? "disabled" : ""}`}>
      <div className="section-elements">
        <h2 className="question">{question}</h2>
        <span className={`${isOpen ? "isOpen" : ""}`}>
          <Arrow />
        </span>
      </div>
    </div>
  );
}
export default Section;

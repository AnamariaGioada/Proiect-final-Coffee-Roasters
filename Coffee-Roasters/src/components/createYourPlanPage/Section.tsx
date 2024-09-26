import "./section.scss";
import Arrow from "../SVG/arrow.svg";
import { forwardRef } from "react";

interface SectionProps {
  question: string;
  isOpen: boolean;
  disabled: boolean;
  onClick: () => void;
}

const Section = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SectionProps>
>(function (
  {
    question,
    isOpen,
    disabled,

    onClick,
  },
  ref
) {
  return (
    <div ref={ref} className={`section ${disabled ? "disabled" : ""}`}>
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
      {/* {isOpen ? <div className="cards">{children}</div> : null} */}
    </div>
  );
});
export default Section;

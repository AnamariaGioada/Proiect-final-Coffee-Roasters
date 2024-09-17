import "./card.scss";
interface CardProps {
  title: string;
  text: string;
  selected: boolean;
  onClick: () => void;
}

function Card({
  title,
  text,
  selected,
  onClick,
}: React.PropsWithChildren<CardProps>) {
  return (
    <div onClick={onClick} className={`card ${selected ? "selected" : ""}`}>
      <h4> {title}</h4>
      <p> {text}</p>
    </div>
  );
}

export default Card;

import "./card.scss";
interface CardProps {
  title: string;
  text: string;
  selected: boolean;
}

function Card({ title, text, selected }: React.PropsWithChildren<CardProps>) {
  return (
    <div className={`card ${selected ? "selected" : ""}`}>
      <h4> {title}</h4>
      <p> {text}</p>
    </div>
  );
}

export default Card;

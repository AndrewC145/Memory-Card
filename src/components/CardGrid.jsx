import Card from "./Card";

export default function CardGrid({ cards = [] }) {
  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

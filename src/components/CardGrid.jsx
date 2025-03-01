import Card from "./Card";

export default function CardGrid({ cards = [] }) {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-4 p-2 md:grid-cols-3 md:gap-8 md:p-4 lg:grid-cols-5 lg:gap-12 lg:p-6">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

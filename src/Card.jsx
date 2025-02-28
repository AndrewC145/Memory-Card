export default function Card({ card, onClick }) {
  return (
    <div onClick={() => onClick(card)}>
      <img src={card.img}></img>
      <p>{card.name}</p>
    </div>
  );
}

export default function Card({ card, handleShuffle }) {
  return (
    <div onClick={handleShuffle}>
      <img src={card.img}></img>
      <p>{card.name}</p>
    </div>
  );
}

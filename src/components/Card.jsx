export default function Card({ card, handleClick }) {
  return (
    <div
      className="flex cursor-pointer flex-col items-center rounded-xl bg-yellow-500 p-3"
      onClick={() => handleClick(card)}
    >
      <img className="size-40 rounded-xl object-cover xl:size-64" src={card.img}></img>
      <p className="p-3 text-center text-xl text-wrap">{card.name}</p>
    </div>
  );
}

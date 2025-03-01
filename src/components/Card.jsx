export default function Card({ card, handleShuffle }) {
  return (
    <div
      className="flex cursor-pointer flex-col items-center rounded-xl bg-yellow-500 p-3"
      onClick={handleShuffle}
    >
      <img className="size-64 rounded-xl object-cover" src={card.img}></img>
      <p className="p-4 text-xl text-nowrap">{card.name}</p>
    </div>
  );
}

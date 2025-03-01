export default function Score({ currentScore, bestScore }) {
  return (
    <div className="flex flex-col justify-between p-4 font-mono">
      <h2 className="text-sm md:text-lg xl:text-2xl">Current Score: {currentScore}</h2>
      <h2 className="text-sm md:text-lg xl:text-2xl">Best Score: {bestScore}</h2>
    </div>
  );
}

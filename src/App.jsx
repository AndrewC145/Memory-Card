import { useState, useEffect } from "react";
import CardGrid from "./components/CardGrid";
import Score from "./components/Score";
import cyberpunkV from "./assets/images/v-cyberpunk.jpg";
import jackieWelles from "./assets/images/jackie-welles.jpg";
import johnnySilverhand from "./assets/images/johnny-silverhand.jpg";
import judyAlvarez from "./assets/images/judy.jpg";
import misty from "./assets/images/misty.jpg";
import panamPalmer from "./assets/images/panam-palmer.jpg";
import solomonReed from "./assets/images/solomon-reed.jpg";
import songbird from "./assets/images/songbird.jpg";
import viktorVektor from "./assets/images/viktor-vektor.jpg";
import dexterDeShawn from "./assets/images/dexter-deshawn.jpg";
import cyberpunkLogo from "./assets/images/cyberpunklogo.svg";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, setCards] = useState([
    { name: "V", img: cyberpunkV },
    { name: "Jackie Welles", img: jackieWelles },
    { name: "Johnny", img: johnnySilverhand },
    { name: "Judy Alvarez", img: judyAlvarez },
    { name: "Misty", img: misty },
    { name: "Panam Palmer", img: panamPalmer },
    { name: "Solomon Reed", img: solomonReed },
    { name: "Songbird", img: songbird },
    { name: "Viktor Vektor", img: viktorVektor },
    { name: "Dexter", img: dexterDeShawn },
  ]);

  const shuffleCards = () => {
    setCards((prevCards) => [...prevCards.sort(() => Math.random() - 0.5)]);
  };

  const handleCardClick = (card) => {
    if (clickedCards.includes(card.name)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore((prevScore) => prevScore + 1);
      setClickedCards((prevClickedCards) => [...prevClickedCards, card.name]);
      shuffleCards();
    }
  };

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  return (
    <div className="flex h-screen flex-col items-center overflow-auto bg-[url(./assets/images/night-city.jpg)] text-white xl:justify-center">
      <div className="flex w-full items-center justify-between p-4">
        <img className="h-24 w-40 md:w-52 lg:w-64 xl:w-96" src={cyberpunkLogo}></img>
        <Score currentScore={score} bestScore={bestScore} />
      </div>
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;

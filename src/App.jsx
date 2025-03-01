import { useState, useEffect } from "react";
import CardGrid from "./components/CardGrid";
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

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([
    { name: "V", img: cyberpunkV },
    { name: "Jackie Welles", img: jackieWelles },
    { name: "Johnny Silverhand", img: johnnySilverhand },
    { name: "Judy Alvarez", img: judyAlvarez },
    { name: "Misty", img: misty },
    { name: "Panam Palmer", img: panamPalmer },
    { name: "Solomon Reed", img: solomonReed },
    { name: "Songbird", img: songbird },
    { name: "Viktor Vektor", img: viktorVektor },
    { name: "Dexter DeShawn", img: dexterDeShawn },
  ]);

  const shuffleCards = () => {
    setCards((prevCards) => {
      let shuffledCards = [...prevCards];
      for (let i = shuffledCards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[randomIndex]] = [
          shuffledCards[randomIndex],
          shuffledCards[i],
        ];
      }
    });
    return shuffleCards;
  };

  return (
    <div>
      <h1>Memory Card Game</h1>
      <CardGrid cards={cards} />
    </div>
  );
}

export default App;

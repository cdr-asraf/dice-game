// import { useState } from 'react'
import { useState } from "react";
import GamePlay from "./Components/GamePlay";
import "./App.css";
import StartGame from "./Components/StartGame";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const handleGame = () => {
    console.log("game started");
    setGameStarted(true);
  };
  return <>{gameStarted ? <GamePlay /> : <StartGame game={handleGame} />}</>;
}

export default App;

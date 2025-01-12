import { useState } from "react";
// import diceImage from "../assets/dice 1.png";
import "./GamePlay.css";

const GamePlay = () => {
  const [show, setShow] = useState(false);
  const [guessedValue, setGuessedValue] = useState();
  const [totalScore, setTotalScore] = useState(0);
  const [dice, setDice] = useState(2);
  const [isSelected, setIsSelected] = useState();
  const arr = [1, 2, 3, 4, 5, 6];
  const diceImages = [
    "/assets/dice 1.png",
    "/assets/dice 2.png",
    "/assets/dice 3.png",
    "/assets/dice 4.png",
    "/assets/dice 5.png",
    "/assets/dice 6.png",
  ];
  const rollDice = () => {
    if (typeof isSelected === "undefined") {
      alert("Please guess a number first");
      return;
    }
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    setDice(num);
    if (num === guessedValue) {
      setTotalScore(totalScore + num);
    } else setTotalScore(totalScore - 2);
    setGuessedValue();
    setIsSelected();
  };
  const showRules = () => {
    console.log("Inside showRules function");
    setShow(!show);
    console.log(show);
  };
  const resetGame = () => {
    setTotalScore(0);
    setGuessedValue();
  };
  return (
    <div>
      <div className="gameplay-container">
        <div className="gameplay-header">
          <div className="score-container">
            <h1 className="score">{totalScore}</h1>
            <p>Total Score</p>
          </div>
          <div className="dice-container">
            <div className="dice-values">
              {arr.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      setGuessedValue(item);
                      setIsSelected(index);
                    }}
                    key={index}
                    className={isSelected === index ? "bg-black" : ""}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
            <p>Guess a score</p>
          </div>
        </div>
        <div className="dice">
          <img src={diceImages[dice - 1]} onClick={rollDice} alt="" />
          <p>Click on Dice to Roll</p>
          <button onClick={resetGame}>Reset game</button>
          <button
            onClick={() => {
              showRules();
            }}
          >
            Show Rules
          </button>
        </div>
        {show && (
          <div className="rules">
            <h3>How to play this dice game</h3>
            <p>Select any Number</p>
            <p>Click on dice image</p>
            <p>
              after click on dice if selected number is equal to dice number you
              will get same point as dice if you get wrong guess then 2 point
              will be dedcuted
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePlay;

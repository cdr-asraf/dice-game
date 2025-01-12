import diceImage from "/assets/dices.png";
import PropTypes from "prop-types";
import "./StartGame.css";
const StartGame = (props) => {
  return (
    <div>
      <div className="landing-page">
        <div className="hero-image">
          <img src={diceImage} alt="" />
        </div>
        <div className="hero-text">
          <h1>Dice Game</h1>
          <div
            className="btn"
            onClick={() => {
              props.game();
            }}
          >
            Play Now
          </div>
        </div>
      </div>
    </div>
  );
};
StartGame.propTypes = {
  game: PropTypes.func.isRequired,
};
export default StartGame;

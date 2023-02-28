import "./App.css";
import { useState, useRef, useEffect } from "react";
import Message from "./Message";

const random = () => Math.floor(Math.random() * 20 + 1);

function App() {
  const [number, setNumber] = useState("");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(random);
  const inputRef = useRef(null);

  const handleCheck = () => {
    setNumber(Number(inputRef.current.value));
  };

  useEffect(() => {
    if (number === secretNumber) {
      if (score > highscore) {
        setHighscore(score);
      }
    } else if (score === 1) {
      setScore(score - 1);
    } else if (number !== "") {
      setScore(score - 1);
    }
  }, [number]);

  const handleAgain = () => {
    setScore(20);
    setNumber("");
    inputRef.current.value = "";
    setSecretNumber(random);
  };

  let estado;
  if (number === secretNumber) {
    estado = "win";
  } else if (score === 0) {
    estado = "lose";
  } else {
    estado = "playing";
  }

  return (
    <div className={estado}>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleAgain}>
          Again!
        </button>
        <div className="number">{number === secretNumber ? number : "?"}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <Message number={number} secretNumber={secretNumber} score={score} />
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;

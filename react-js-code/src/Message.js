import "./Message.css";

export default function Message({ number, secretNumber, score }) {
  if (secretNumber === number) {
    return <p className="message">¡Ganaste!</p>;
  } else if (number === "") {
    return <p className="message">Empezamos a jugar...</p>;
  } else if (score <= 0) {
    return <p className="message">!Perdiste!</p>;
  } else if (secretNumber > number) {
    return <p className="message">El numero secreto es mayor</p>;
  } else {
    return <p className="message">El numero secreto es menor</p>;
  }
}

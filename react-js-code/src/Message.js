import "./Message.css";

export default function Message({ number, secretNumber }) {
  if (secretNumber === number) {
    return <p className="message">¡Ganaste!</p>;
  } else if (number === "") {
    return <p className="message">Empezamos a jugar...</p>;
  } else if (secretNumber > number) {
    return <p className="message">El numero secreto es mayor</p>;
  } else {
    return <p className="message">El numero secreto es menor</p>;
  }
}

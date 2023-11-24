import "./styles/App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [clicksNumber, setClicksNumber] = useState(0);

  const counter = () => {
    setClicksNumber(clicksNumber + 1);
  };

  const restartCounter = () => {
    setClicksNumber(0);
  };

  return (
    <article className="clicks-counter">
      <h2></h2>
      <Counter clicksNumber={clicksNumber} />
      <section className="clicks-counter__buttons">
        <Button
          text="Click"
          addClass="button__click"
          buttonFunction={counter}
        />
        <Button
          text="Restart"
          addClass="button__restart"
          buttonFunction={restartCounter}
        />
      </section>
    </article>
  );
}

export default App;

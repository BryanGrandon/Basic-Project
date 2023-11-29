import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import "./styles/App.css";

function App() {
  const [numberClick, setNumberClick] = useState(0);
  const counterClick = () => setNumberClick(numberClick + 1);
  const restartCounterClick = () => setNumberClick(0);
  return (
    <article className="click-counter">
      <Counter numberClick={numberClick} />
      <section className="click-counter__buttons">
        <Button
          text="click"
          buttonClass="button__click"
          buttonFunction={counterClick}
        />
        <Button
          text="restart"
          buttonClass="button__restart"
          buttonFunction={restartCounterClick}
        />
      </section>
    </article>
  );
}

export default App;

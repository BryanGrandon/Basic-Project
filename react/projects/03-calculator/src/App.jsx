import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/screen";
import "./styles/App.css";
// Dependencies: use -> npm install mathjs
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => setInput(input + value);
  const result = () => (input ? setInput(evaluate(input)) : null);
  return (
    <article className="calculator">
      <Screen input={input} />
      <section className="calculator__buttons">
        <section className="button__row">
          <Button buttonFunction={addInput}>1</Button>
          <Button buttonFunction={addInput}>2</Button>
          <Button buttonFunction={addInput}>3</Button>
          <Button buttonFunction={addInput}>+</Button>
        </section>
        <section className="button__row">
          <Button buttonFunction={addInput}>4</Button>
          <Button buttonFunction={addInput}>5</Button>
          <Button buttonFunction={addInput}>6</Button>
          <Button buttonFunction={addInput}>-</Button>
        </section>
        <section className="button__row">
          <Button buttonFunction={addInput}>7</Button>
          <Button buttonFunction={addInput}>8</Button>
          <Button buttonFunction={addInput}>9</Button>
          <Button buttonFunction={addInput}>*</Button>
        </section>
        <section className="button__row">
          <Button buttonFunction={() => setInput("")}>C</Button>
          <Button buttonFunction={addInput}>0</Button>
          <Button buttonFunction={addInput}>.</Button>
          <Button buttonFunction={addInput}>/</Button>
        </section>
        <section className="button__row button__row--evaluate">
          <Button buttonFunction={result} evaluate={true}>
            =
          </Button>
        </section>
      </section>
    </article>
  );
}

export default App;

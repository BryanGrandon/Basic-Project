import React from "react";
import "../styles/Counter.css";

function Counter({ clicksNumber }) {
  return <article className="counter">{clicksNumber}</article>;
}

export default Counter;

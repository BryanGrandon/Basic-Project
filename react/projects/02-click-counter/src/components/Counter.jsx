import React from "react";
import "../styles/Counter.css";
function Counter({ numberClick }) {
  return <article className="counter">{numberClick}</article>;
}
export default Counter;

import React from "react";
import "../styles/Button.css";
function Button({ text, buttonClass, buttonFunction }) {
  return (
    <button className={"button " + buttonClass} onClick={buttonFunction}>
      {text}
    </button>
  );
}
export default Button;

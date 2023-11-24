import React from "react";
import "../styles/Button.css";

function Button({ text, addClass, buttonFunction }) {
  return (
    <button className={"button " + addClass} onClick={buttonFunction}>
      {text}
    </button>
  );
}

export default Button;

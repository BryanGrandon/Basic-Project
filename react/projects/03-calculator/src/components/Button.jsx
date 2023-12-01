import React from "react";
import "../styles/Button.css";

function Button(props) {
  const isOperator = (value) => isNaN(value) && value != "." && value != "=";

  return (
    <section
      className={`button 
      ${isOperator(props.children) ? "button--operator" : ""} 
      ${props.evaluate ? "button--evaluate" : ""}`.trimEnd()}
      onClick={() => props.buttonFunction(props.children)}
    >
      {props.children}
    </section>
  );
}

export default Button;

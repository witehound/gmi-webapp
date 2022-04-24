import React from "react";
import "./Button.css";

function Button({ text, color }) {
  return (
    <div className={`button-container-${color}`}>
      <a href="mailto: Hi@studio-gmi.com">
        <div className={`button-div-${color}`}>{text}</div>
      </a>
    </div>
  );
}

export default Button;

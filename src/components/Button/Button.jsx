import React from "react";
import "./Button.css";

function Button({ text, color,header,accountPresent }) {
  return (
    <div className={`button-container-${color}`}>
      <a href="mailto: Hi@studio-gmi.com">
        <div className={`button-div-${color} ${header} ${accountPresent}`}>{text}</div>
      </a>
    </div>
  );
}

export default Button;

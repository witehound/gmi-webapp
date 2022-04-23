import React from "react";
import "./Button.css";

function Button({text,color}) {
  return (
    <div className={`button-container-${color}`}>
      <div className={`button-div-${color}`}>{text}</div>
    </div>
  );
}

export default Button;

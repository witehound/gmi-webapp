import React from "react";
import "./Button.css";

function Button({ text, color, header, accountPresent,span}) {
  return (
    <div className={`button-container-${color}`}>
      <div className={`button-div-${color} ${header} ${accountPresent}`}>
        {text}&nbsp;<span className="button-span-span">{span}</span>
      </div>
    </div>
  );
}

export default Button;

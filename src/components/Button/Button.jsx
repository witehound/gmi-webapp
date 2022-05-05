import React from "react";
import "./Button.css";

function Button({ text, color, header, accountPresent }) {
  return (
    <div className={`button-container-${color}`}>
      <div className={`button-div-${color} ${header} ${accountPresent}`}>
        {text}
      </div>
    </div>
  );
}

export default Button;

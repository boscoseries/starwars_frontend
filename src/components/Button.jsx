import React from "react";


export default function Button({ butonType, buttonClass, buttonStyles, buttonTag, buttonIcon }) {
  return (
    <button type={butonType} className={buttonClass} style={buttonStyles}>
      {buttonTag}
      <span className="ml-2">{buttonIcon}</span>
    </button>
  );
}

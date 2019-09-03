import React from "react";


export default function Button ({ butonType, buttonClass, buttonStyles, buttonTag, buttonIcon, onclick }) {
  return (
    <button type={butonType} className={buttonClass} style={buttonStyles} onclick={onclick}>
      {buttonTag}
      <span className="ml-2">{buttonIcon}</span>
    </button>
  );
}

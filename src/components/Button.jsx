import React from "react";


export default function Button ({ butonType, buttonClass, buttonStyles, buttonTag, buttonIcon, onClick }) {
  return (
    <button type={butonType} className={buttonClass} style={buttonStyles} onClick={onClick}>
      {buttonTag}
      <span className="ml-2">{buttonIcon}</span>
    </button>
  );
}

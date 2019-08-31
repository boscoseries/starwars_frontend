import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ butonType, buttonClass, buttonStyles, buttonTag, buttonIcon }) {
  return (
    <button type={butonType} className={buttonClass} style={buttonStyles}>
      {buttonTag}
      <span className="ml-2">
        <FontAwesomeIcon icon={buttonIcon} />
      </span>
    </button>
  );
}

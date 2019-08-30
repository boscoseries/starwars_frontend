import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Button ({ butonType, buttonClass, buttonTag }) {
  return (
    <button type={butonType} className={buttonClass} style={{ fontSize: "13px", padding: "12px 30px", background: "#D8D8D8" }}>
      {buttonTag}
      <span className="ml-2">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </button>
  );
}
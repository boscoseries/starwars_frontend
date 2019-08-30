import React from 'react'


export default function Button ({ butonType, buttonClass, buttonTag }) {
  return (
    <button type={butonType} className={buttonClass} style={{ fontSize: "13px", padding: "12px 30px", background: "#D8D8D8" }}>
      {buttonTag}
      <span className="ml-2">
      </span>
    </button>
  );
}
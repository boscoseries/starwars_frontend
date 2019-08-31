import React from "react";

export default function Input({ inputClass, inputType, inputPlaceholder, symbol }) {
  return (
    <div className="input-group input-group-lg">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg" style={{ background: "#FFFFFF", padding: ".5rem 2rem" }}>
          {symbol}
        </span>
      </div>
      <input
        type={inputType}
        style={{ border: "#FFFFFF" }}
        className={inputClass}
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        placeholder={inputPlaceholder}
      />
    </div>
  );
}

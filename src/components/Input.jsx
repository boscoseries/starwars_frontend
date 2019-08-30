import React from "react";

export default function Input({ inputClass, inputType, inputPlaceholder, symbol }) {
  return (
    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg" style={{ background: "#FFFFFF", padding: ".5rem 2rem" }}>
          {symbol}
        </span>
      </div>
      <input
        type={inputType}
        style={{ border: "#FFFFFF" }}
        className={inputClass}
        ariaLabel="Sizing example input"
        ariaDescribedby="inputGroup-sizing-lg"
        placeholder={inputPlaceholder}
      />
    </div>
  );
}

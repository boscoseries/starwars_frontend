import React from "react";

export default function Input({ inputClass, inputType, inputPlaceholder }) {
  return (
    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          Large
        </span>
      </div>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />>
    </div>
  );
}

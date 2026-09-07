import React from "react";
import "./index.css";

function OptionItem({ name, onSelect }) {
  return (
    <li className="option-item">
      <button
        type="button"
        className="option-button"
        onClick={() =>
          onSelect({
            type: "OPTION",
            payload: name,
          })
        }
      >
        <span className="option-dot" />
        <span>{name}</span>
      </button>
    </li>
  );
}

export default OptionItem;

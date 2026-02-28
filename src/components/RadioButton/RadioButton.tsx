import React, { useState } from "react";
import { RadioButtonProps } from "./RadioButton.types";

const RadioButton: React.FC<RadioButtonProps> = ({ options, disabled = false }) => {
  const [selected, setSelected] = useState<string>(options[0] ?? "");

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "default",
        flexWrap: "wrap",
      }}
    >
      {options.map((option) => (
        <label
          key={option}
          style={{ cursor: disabled ? "not-allowed" : "pointer" }}
        >
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
            disabled={disabled}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
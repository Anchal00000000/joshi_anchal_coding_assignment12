import React, { useState } from "react";
import { DropdownProps } from "./Dropdown.types";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
}) => {
  const [selected, setSelected] = useState<string>(options[0] ?? "");

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      disabled={disabled}
      style={{
        padding: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: disabled ? "#eee" : "white",
        opacity: disabled ? 0.6 : 1,
        width: "100%",
        maxWidth: "200px",
      }}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
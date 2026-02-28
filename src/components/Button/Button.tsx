import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = "blue",
  color = "white",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "grey" : backgroundColor,
        color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        width: "100%",
        maxWidth: "220px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
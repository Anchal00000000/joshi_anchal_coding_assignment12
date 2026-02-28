import React from "react";
import { LabelProps } from "./Label.types";

const Label: React.FC<LabelProps> = ({
  text,
  color = "black",
  fontSize = "16px",
  disabled = false,
}) => {
  return (
    <span
      style={{
        color: disabled ? "grey" : color,
        fontSize,
        cursor: disabled ? "not-allowed" : "default",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {text}
    </span>
  );
};

export default Label;
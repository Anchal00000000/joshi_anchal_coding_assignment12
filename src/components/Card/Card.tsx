import React from "react";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({
  title = "Card Title",
  description = "Card description goes here.",
  imageSrc,
  buttonText = "Click Me",
  onButtonClick = () => {},
  disabled = false,
  style = {},
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "250px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        opacity: disabled ? 0.8 : 1,
        ...style,
      }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            borderRadius: "6px",
            marginBottom: "12px",
            filter: disabled ? "grayscale(100%)" : "none",
          }}
        />
      )}

      <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>

      <p style={{ margin: "0 0 12px 0", fontSize: "14px", color: "#555" }}>
        {description}
      </p>

      <button
        onClick={disabled ? undefined : onButtonClick}
        disabled={disabled}
        style={{
          padding: "8px 12px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: disabled ? "grey" : "#007bff",
          color: "#fff",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
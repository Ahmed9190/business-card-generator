import React from "react";
import "./custom-button.scss";

const CustomButton = ({ text, color, hoverColor, ...props }) => (
  <button
    className="custom-button"
    style={{
      backgroundColor: color,
      "&:hover": { backgroundColor: hoverColor },
    }}
    {...props}
  >
    {text}
  </button>
);

export default CustomButton;

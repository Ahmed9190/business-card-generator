import "./custom-input.scss";
import React from "react";

const CustomInput = ({
  Icon,
  activedIcon,
  onClickIcon,
  password,
  ...props
}) => (
  <div className="custom-input-container">
    <input
      className="custom-input"
      type={password ? "password" : null}
      {...props}
    />
    {Icon && (
      <Icon
        onClick={onClickIcon}
        className="input-icon"
        width="20px"
        height="20px"
        fill={activedIcon ? "#102840" : "#1028407E"}
      />
    )}
  </div>
);

export default CustomInput;

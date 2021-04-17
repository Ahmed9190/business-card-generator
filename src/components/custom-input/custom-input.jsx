import "./custom-input.scss";
import React from "react";

const CustomInput = React.forwardRef(
  ({ Icon, activedIcon, onClickIcon, password, ...props }, ref) => (
    <div className="custom-input-container">
      <input
        ref={ref}
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
  )
);

export default CustomInput;

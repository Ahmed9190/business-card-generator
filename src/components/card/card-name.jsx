import React from "react";

const CardName = ({
  color = "#102840",
  text,
  fontSize = 25,
  focus,
  fontWeight = "bold",
  maxWidth,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexFlow: "wrap",
      }}
    >
      <span
        style={{
          fontSize: fontSize,
          fontFamily: "GillSans",
          fontWeight: fontWeight,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: focus ? color : "transparent",
          transition: ".5s",
          minHeight: 20,
          maxWidth: maxWidth,
          width: !text ? maxWidth : "auto",
          color: color,
          display: "flex",
          alignItems: "center",
          paddingLeft: 5,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default CardName;

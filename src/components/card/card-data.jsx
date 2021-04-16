import React from "react";

const CardData = ({ Leading, text, fontSize, focus }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexFlow: "wrap",
        textAlign: "right",
      }}
    >
      <span
        style={{
          fontSize: fontSize,
          fontFamily: "GillSans",
          fontWeight: "bold",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: focus ? "#102840" : "transparent",
          transition: ".5s",
          minHeight: 11,
          maxWidth: 150,
          width: !text ? 150 : "auto",
        }}
      >
        {text}
      </span>
      <Leading height="18" style={{ margin: 2.5 }} />
    </div>
  );
};

export default CardData;

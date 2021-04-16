import React, { useState } from "react";
import Header from "./../../components/header/header";
import "./handle-card.scss";
import CustomInput from "./../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import { cardColors, cardInputsData } from "./handle-card-data";
import Card from "./../../components/card/card";

const HandleCard = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(2);
  const [hasWhatsapp, setHasWhatsapp] = useState(false);
  const [cardData, setCardData] = useState({});

  const onClickWhatsappIcon = () => setHasWhatsapp(!hasWhatsapp);

  return (
    <div className="handle-card-page-container">
      <Header solid />
      <div className="handle-card-page">
        <div className="handle-card-data-container">
          <div style={{ height: "110px" }}>
            <div className="handled-card" style={{ backgroundColor: `#fff` }}>
              <Card
                color={cardColors[selectedColorIndex]}
                cardData={cardData}
                hasWhatsapp={hasWhatsapp}
              />
            </div>
          </div>
          <div className="handle-card-colors-container">
            {cardColors.map((color, index) => (
              <div
                onClick={() => setSelectedColorIndex(index)}
                key={index}
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  backgroundColor: `#${color}`,
                  cursor: "pointer",
                  border: "solid",
                  borderColor:
                    index === selectedColorIndex ? "#102840" : "transparent",
                  borderWidth: "2px",
                }}
              />
            ))}
          </div>
          <div className="handle-card-inputs">
            {cardInputsData(hasWhatsapp, onClickWhatsappIcon).map(
              (props, key) => (
                <CustomInput
                  key={key}
                  onChange={({ target: { name, value } }) =>
                    setCardData({ ...cardData, [name]: value })
                  }
                  {...props}
                />
              )
            )}
            <CustomButton text="Save" />
            <CustomButton text="Delete" color="#EA4E4E" hoverColor="#000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleCard;

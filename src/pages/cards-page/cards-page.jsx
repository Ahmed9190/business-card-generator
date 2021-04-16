import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import { cardColors } from "../handle-card/handle-card-data";

import "./cards-page.scss";

const CardsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("read-cards").then(({ data: cards }) => {
      setCards(cards);
    });
  }, []);

  return (
    <div className="grid-container">
      <div className="card-page-header">
        <Header solid search />
      </div>
      <div className="card-page-contents">
        {cards.map(
          ({ u_id, c_id, color_index, has_whatsapp, ...cardData }, i) => (
            <div className="card-page-card-container" key={i}>
              <Card
                cardData={cardData}
                color={cardColors[color_index]}
                hasWhatsapp={has_whatsapp}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardsPage;

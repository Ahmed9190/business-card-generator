import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import { cardColors } from "../handle-card/handle-card-data";

import "./cards-page.scss";
import Toast from "./../../utils/toastify";
import { headers } from "./../../utils/axios";

const CardsPage = () => {
  const [cards, setCards] = useState([]);
  const [favCards, setFavCards] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [favouriteOnly, setFavouriteOnly] = useState(false);

  const fetchFavs = () => {
    axios
      .get("/read-favourite-cards", headers)
      .then(({ data: favouriteCards }) => {
        setFavCards(favouriteCards.map(({ c_id }) => c_id));
      })
      .catch((e) => {
        Toast(e.response.data, "error");
      });
  };

  useEffect(() => {
    axios
      .get("read-cards")
      .then(({ data: cards }) => {
        setCards(cards);
      })
      .then(() => {
        if (localStorage.getItem("jwt")) fetchFavs();
      })
      .catch((e) => {
        Toast(e.response.data, "error");
      });
  }, []);

  const addToFav = (c_id) =>
    axios
      .post("add-to-favourite", { c_id }, headers)
      .then(() => setFavCards([...favCards, c_id]))
      .catch((e) => Toast(e.response.data, "error"));
  const deleteFromFav = (c_id) =>
    axios
      .delete("delete-favourite-card", { ...headers, data: { c_id } })
      .then(() =>
        setFavCards(favCards.filter((deletedCardId) => deletedCardId !== c_id))
      )
      .catch((e) => Toast(e.response.data, "error"));

  const handleClickStar = (isStarred, c_id) => {
    if (isStarred) deleteFromFav(c_id);
    else addToFav(c_id);
  };

  const filteredResults = cards.filter(
    ({ f_name, l_name, c_id }) =>
      `${f_name} ${l_name}`
        ?.toLowerCase()
        .includes(searchField.toLowerCase()) &&
      (favouriteOnly ? favCards.includes(c_id) : true)
  );

  return (
    <div className="grid-container">
      <div className="card-page-header">
        <Header
          solid
          search
          favourite={!!localStorage.getItem("jwt")} //check if signed in
          {...{ setSearchField, favouriteOnly, setFavouriteOnly }}
        />
      </div>
      <div className="card-page-contents">
        {filteredResults.map(
          ({ u_id, c_id, color_index, has_whatsapp, ...cardData }, i) => {
            const isStarred = favCards.includes(c_id);
            return (
              <div style={{ position: "relative" }} key={i}>
                <div className="card-page-card-container">
                  <Card
                    cardData={cardData}
                    color={cardColors[color_index]}
                    hasWhatsapp={has_whatsapp}
                  />
                </div>
                <div
                  className="favourite-button noselect"
                  style={isStarred ? { color: "#F8961E" } : null}
                  onClick={() => handleClickStar(isStarred, c_id)}
                >
                  &#9733;
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default CardsPage;

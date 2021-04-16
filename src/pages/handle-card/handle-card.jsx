import React, { useEffect, useState } from "react";
import Header from "./../../components/header/header";
import "./handle-card.scss";
import CustomInput from "./../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import { cardColors, cardInputsData } from "./handle-card-data";
import Card from "./../../components/card/card";
import axios from "axios";
import Toast from "../../utils/toastify";
import { headers } from "./../../utils/axios";
import { useHistory } from "react-router-dom";

const HandleCard = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(2);
  const [hasWhatsapp, setHasWhatsapp] = useState(false);
  const [cardData, setCardData] = useState({});
  const {
    push,
    location: { pathname },
  } = useHistory();

  let isEditing = pathname.includes("edit");

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      Toast("You have to signin first", "error");
      push("/account/signin");
    }
    if (isEditing)
      axios
        .post("/read-my-card", {}, headers)
        .then(
          ({
            data: { has_whatsapp, color_index, c_id, u_id, ...myCardData },
          }) => {
            setSelectedColorIndex(color_index);
            setHasWhatsapp(has_whatsapp);
            setCardData(myCardData);
          }
        )
        .catch((e) => Toast(e.resonse.data, "error"));
  }, [isEditing, pathname]);

  const onClickWhatsappIcon = () => setHasWhatsapp(!hasWhatsapp);

  const handleDelete = () => {
    axios
      .delete("/delete-card", headers)
      .then(({ data: res }) => Toast(res))
      .then(() => push("/"))
      .catch((e) => Toast(e.response.data, "error"));
  };

  const create = () => {
    axios
      .post(
        "/create-card",
        {
          color_index: selectedColorIndex,
          ...{ has_whatsapp: +hasWhatsapp },
          ...cardData,
        },
        headers
      )
      .then(({ data: res }) => {
        Toast(res);
        push("/");
      })
      .catch((e) => Toast(e.response.data, "error"));
  };

  const edit = () => {
    axios
      .put(
        "/update-card",
        {
          color_index: selectedColorIndex,
          ...{ has_whatsapp: +hasWhatsapp },
          ...cardData,
        },
        headers
      )
      .then(({ data: res }) => {
        Toast(res);
        push("/");
      })
      .catch((e) => Toast(e.response.data, "error"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) edit();
    else create();
  };

  //TO-DO: pathname.includes("edit")&& he has card data redirect to home
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
                    // eslint-disable-next-line eqeqeq
                    index == selectedColorIndex ? "#102840" : "transparent",
                  borderWidth: "2px",
                }}
              />
            ))}
          </div>
          <form onSubmit={handleSubmit} className="handle-card-inputs">
            {cardInputsData(hasWhatsapp, onClickWhatsappIcon).map(
              (props, key) => (
                <CustomInput
                  key={key}
                  onChange={({ target: { name, value } }) =>
                    setCardData({ ...cardData, [name]: value })
                  }
                  value={cardData[props.name]}
                  {...props}
                />
              )
            )}
            <CustomButton
              text={isEditing ? "Save" : "Create"}
              type="submit"
              style={
                !isEditing ? { gridColumnStart: 1, gridColumnEnd: 3 } : null
              }
            />
            {isEditing && (
              <CustomButton
                text="Delete"
                color="#EA4E4E"
                onClick={handleDelete}
                type="reset"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HandleCard;

import React, { useEffect, useState } from "react";
import "./horizontal-slider.scss";
import arrowLeft from "../../assets/SVG/arrow-left.svg";
import arrowRight from "../../assets/SVG/arrow-right.svg";
import Card from "../card/card";
import { cardColors } from "./../../pages/handle-card/handle-card-data";
import axios from "axios";
import { Link } from "react-router-dom";

const HorizontalSlider = () => {
  const [cards, setCards] = useState([]);
  const HorizontalSliderRef = React.useRef();
  const [scrollData, setScrollData] = React.useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  // useEffect(() => {
  //   console.log(
  //     "x",

  //   );
  // }, [scrollData]);

  function clearSelection() {
    if (document.selection && document.selection.empty) {
      document.selection.empty();
    } else if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
    }
  }

  useEffect(() => {
    axios.get("read-cards").then(({ data: cards }) => {
      setCards(cards.slice(0, 10));
    });
  }, []);

  const onMouseDown = (e) => {
    setScrollData({ ...scrollData, isScrolling: true, clientX: e.clientX });
  };

  const onMouseUp = (e) => {
    setScrollData({ ...scrollData, isScrolling: false });
  };

  let availableScrollWidth =
    HorizontalSliderRef.current?.scrollWidth - window.innerWidth;

  const onMouseMove = (e) => {
    const { clientX, scrollX } = scrollData;

    if (
      scrollData.isScrolling &&
      scrollX - (e.clientX - clientX) < availableScrollWidth + 100 && //100 tolerance
      scrollX - (e.clientX - clientX) > 0
    ) {
      HorizontalSliderRef.current.scrollLeft = scrollX - (e.clientX - clientX);
      scrollData.scrollX = scrollX - (e.clientX - clientX);
      scrollData.clientX = e.clientX;
    }
    clearSelection();
  };

  const handleClickArrow = (arrowName) => {
    const moveScroll = (operator, time) => {
      setTimeout(() => {
        if (operator === "+") HorizontalSliderRef.current.scrollLeft++;
        else if (operator === "-") HorizontalSliderRef.current.scrollLeft--;
      }, time);
    };
    if (arrowName === "left") for (let i = 0; i < 420; i++) moveScroll("-", i);
    else for (let i = 0; i < 420; i++) moveScroll("+", i);
  };

  return (
    <div className="wrapper noselect">
      <div className="arrows-container">
        <div className="arrow-circle" onClick={() => handleClickArrow("left")}>
          <img src={arrowLeft} alt="arrow-left" height={15} />
        </div>
        <div className="arrow-circle" onClick={() => handleClickArrow("right")}>
          <img src={arrowRight} alt="arrow-right" height={15} />
        </div>
      </div>
      <div
        className="grap-to-scroll"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
      ></div>
      <div className="wrapper" ref={HorizontalSliderRef}>
        {cards.map(
          ({ u_id, c_id, color_index, has_whatsapp, ...cardData }, i) => (
            <div className="horizontal-slider-item" key={i}>
              <Card
                cardData={cardData}
                color={cardColors[color_index]}
                hasWhatsapp={has_whatsapp}
              />
            </div>
          )
        )}
      </div>
      <div className="show-all-div">
        <Link to="/cards-page">
          <span className="show-all-button">Show All</span>
        </Link>
      </div>
    </div>
  );
};

export default HorizontalSlider;

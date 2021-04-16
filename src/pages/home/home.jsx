import HorizontalSlider from "./../../components/horizontal-slider/horizontal-slider";
import Header from "../../components/header/header";
import { useEffect, useState } from "react";
import axios from "axios";
import { headers } from "./../../utils/axios";
import "./home.scss";

function HomePage({ history: { push } }) {
  const [hasCard, setHasCard] = useState(null);

  const checkCardExistance = () => {
    axios
      .post("/read-my-card", {}, headers)
      .then(({ data: res }) => {
        if (typeof res === "object") setHasCard(true);
        else setHasCard(false);
      })
      .catch((e) => {
        setHasCard(false);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("jwt")) setHasCard(false);
    else checkCardExistance();
  }, []);

  return (
    <div className="home-container">
      <div className="header-main-container">
        {/* <div className="home-header"> */}
        <Header />
        {/* </div> */}
        <div className="main">
          <span>Business Card Generator</span>
          {!hasCard && <span>Want a free card ?</span>}
          <button
            className="create-one-button"
            onClick={() =>
              push(`/card/${!hasCard === false ? "edit" : "create"}`)
            }
          >
            {typeof hasCard !== "boolean"
              ? ""
              : !hasCard
              ? "Create one"
              : "Edit card"}
          </button>
        </div>
      </div>
      <div className="carousel">
        <HorizontalSlider />
      </div>
    </div>
  );
}

export default HomePage;

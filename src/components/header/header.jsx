import React from "react";
import logo from "../../assets/SVG/logo.svg";
import { Link, useHistory } from "react-router-dom";
import CustomButton from "./../../components/custom-button/custom-button";
import "./header.scss";

import searchIcon from "../../assets/images/search.svg";

const Header = ({ solid, search }) => {
  const { push } = useHistory();
  const hasToken = localStorage.getItem("jwt");
  return (
    <div className="header" style={solid ? { backgroundColor: "#102840" } : {}}>
      <Link to="/">
        <img src={logo} alt="logo" className="header-logo" />
      </Link>
      <div className="button-and-search-box">
        {search && (
          <div className="search-box-contant">
            <input placeholder="Search..." className="search-box" />
            <img
              src={searchIcon}
              alt="searchIcon"
              width="20"
              className="searchIcon"
            />
          </div>
        )}
        <CustomButton
          text={hasToken ? "SIGN OUT" : "SIGN IN"}
          style={{
            marginBottom: 10,
            marginTop: 10,
          }}
          onClick={() => {
            if (hasToken) {
              localStorage.removeItem("jwt");
              push("/");
            } else push("/account/signin");
          }}
        />
      </div>
    </div>
  );
};

export default Header;

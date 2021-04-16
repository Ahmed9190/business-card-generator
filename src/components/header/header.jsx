import React from "react";
import logo from "../../assets/SVG/logo.svg";
import { Link, useHistory } from "react-router-dom";
import CustomButton from "./../../components/custom-button/custom-button";
import "./header.scss";
import searchIcon from "../../assets/images/search.svg";

const Header = ({
  solid,
  search,
  favourite,
  setSearchField,
  favouriteOnly,
  setFavouriteOnly,
}) => {
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
            <input
              placeholder="Search..."
              className="search-box"
              onChange={({ target: { value } }) => setSearchField(value)}
            />
            <img
              src={searchIcon}
              alt="searchIcon"
              width="20"
              className="searchIcon"
            />
          </div>
        )}
        {favourite && (
          <div
            className="header-favourite-button noselect"
            style={favouriteOnly ? { color: "#F8961E" } : null}
            onClick={() => setFavouriteOnly(!favouriteOnly)}
          >
            &#9733;
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
              window.location.href = "/";
              localStorage.removeItem("jwt");
            } else push("/account/signin");
          }}
        />
      </div>
    </div>
  );
};

export default Header;

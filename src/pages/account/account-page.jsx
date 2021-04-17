import React, { lazy } from "react";
import "./account-page.scss";
import logo from "../../assets/SVG/logo.svg";
import { Route, Link } from "react-router-dom";

const Signin = lazy(() => import("./../../components/signin/signin"));
const Signup = lazy(() => import("./../../components/signup/signup"));

const AccountPage = ({ match: { url } }) => {
  return (
    <div className="account-page-container">
      <Link to="/">
        <img src={logo} alt="logo" className="form-header-logo" />
      </Link>
      <div className="form-parent-container">
        <img src={logo} alt="logo" className="form-logo" />
        <span className="login-form-title">Business Card Generator</span>
        <Route exact path={`${url}/signin`} component={Signin} />
        <Route exact path={`${url}/signup`} component={Signup} />
      </div>
    </div>
  );
};

export default AccountPage;

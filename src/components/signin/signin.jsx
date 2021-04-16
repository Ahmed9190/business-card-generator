import React, { useState } from "react";
import "./signin.scss";
import CustomInput from "../custom-input/custom-input";
import CustomButton from "../custom-button/custom-button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Toast from "../../utils/toastify";

const Signin = () => {
  const [signinData, setSigninData] = useState({});
  const { push } = useHistory();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post("/signin", signinData)
      .then(({ data: token }) => {
        localStorage.setItem("jwt", token);
      })
      .then(() => {
        window.location.href = "/";
      })
      // .then(() => push("/"))
      .catch((e) => Toast(e.response.data, "error"));
  };

  return (
    <form onSubmit={handleSubmitForm} className="form-container">
      <CustomInput
        placeholder="Email"
        onChange={({ target: { value, name } }) =>
          setSigninData({ ...signinData, [name]: value })
        }
        name="email"
        required
      />
      <CustomInput
        placeholder="Password"
        onChange={({ target: { value, name } }) =>
          setSigninData({ ...signinData, [name]: value })
        }
        name="password"
        required
        password
      />

      <span className="change-form" onClick={() => push("/account/signup")}>
        Don't have an account? Sign up
      </span>

      <CustomButton type="submit" text="Sign in" />
    </form>
  );
};

export default Signin;

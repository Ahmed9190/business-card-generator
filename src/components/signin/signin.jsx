import React, { useEffect, useRef, useState } from "react";
import "./signin.scss";
import CustomInput from "../custom-input/custom-input";
import CustomButton from "../custom-button/custom-button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Toast from "../../utils/toastify";

const Signin = () => {
  const [signinData, setSigninData] = useState({});
  const passwordRef = useRef();
  const { push } = useHistory();

  useEffect(() => {
    CheckPassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signinData]);

  const CheckPassword = () => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const isMatched = passwordPattern.test(signinData.password);
    if (!isMatched && signinData.password?.length >= 8) {
      passwordRef.current?.setCustomValidity(
        "Your password must contains at least one numeric digit, one uppercase and one lowercase letter"
      );
    } else passwordRef.current?.setCustomValidity("");
  };

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
        type="email"
        name="email"
        required
      />
      <CustomInput
        ref={passwordRef}
        placeholder="Password"
        minLength={8}
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

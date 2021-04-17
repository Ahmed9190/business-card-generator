import React, { useEffect, useRef, useState } from "react";
import "./signup.scss";
import CustomInput from "../custom-input/custom-input";
import CustomButton from "../custom-button/custom-button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Toast from "../../utils/toastify";

const Signup = () => {
  const [signupData, setSignupData] = useState({});
  const passwordRef = useRef();
  const { push } = useHistory();

  useEffect(() => {
    CheckPassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupData]);

  const CheckPassword = () => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const isMatched = passwordPattern.test(signupData.password);
    if (!isMatched && signupData.password?.length >= 8) {
      passwordRef.current?.setCustomValidity(
        "Your password must contains at least one numeric digit, one uppercase and one lowercase letter"
      );
    } else passwordRef.current?.setCustomValidity("");
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post("/signup", signupData)
      .then(({ data: res }) => {
        Toast(res);
        push("/account/signin");
      })
      .catch((e) => {
        Toast(e.response.data, "error");
      });
  };

  const f_l_name = [
    {
      placeholder: "First Name",
      name: "f_name",
      type: "fname",
      // style: { width: "42.5%" },
      required: true,
      minLength: 2,
    },
    {
      placeholder: "Last Name",
      name: "l_name",
      type: "lname",
      // style: { width: "42.5%" },
      required: true,
      minLength: 2,
    },
  ];

  const email_password = [
    {
      placeholder: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      placeholder: "Password",
      name: "password",
      type: "password",
      password: true,
      required: true,
      minLength: 8,
      ref: passwordRef,
    },
  ];

  return (
    <form onSubmit={handleSubmitForm} className="form-container">
      <div className="f_l_name_container">
        {f_l_name.map((props, i) => (
          <CustomInput
            key={i}
            onChange={({ target: { value, name } }) =>
              setSignupData({ ...signupData, [name]: value })
            }
            {...props}
          />
        ))}
      </div>
      {email_password.map((props, i) => (
        <CustomInput
          key={i}
          onChange={({ target: { value, name } }) =>
            setSignupData({ ...signupData, [name]: value })
          }
          {...props}
        />
      ))}

      <span className="change-form" onClick={() => push("/account/signin")}>
        Have an account? Sign in
      </span>

      <CustomButton type="submit" text="Sign up" />
    </form>
  );
};

export default Signup;

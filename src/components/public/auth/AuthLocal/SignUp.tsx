import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { BaseLocalAuth } from "./Base";
import leftArrowSvg from "@/components/svg/left-arrow-svgrepo-com.svg";
import axios from "axios";
import React from "react";

export const LocalAuthSignUp = () => {
  const { openAuthModal } = useAuthModalContext();
  const heading = "Create Account";
  const desc = "or use your username and password for registration";
  const buttonLabel = "sign Up";

  const [formData, setFormdata] = React.useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("onchange");
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = (e: React.FormEvent) => {
    const BASEURL = "http://127.0.0.1:8000/api";
    console.log("username", formData.username);
    e.preventDefault();

    const data = {
      username: formData.username,
      password: formData.password,
    };

    const config = {
      "Content-Type": "application/json",
    };

    axios
      .post(`${BASEURL}/auth/username_and_password/`, data, {
        headers: config,
      })
      .then((res) => res)
      .then((data) => {
        localStorage.setItem("access", data.data["access"]);
        localStorage.setItem("refresh", data.data["refresh"]);
        console.log("data", data.data["access"]);

        // redirect user to prefrence page if everything is successfull.
        // after selecting preference redirect user to home page and application starts.
      });
  };

  return (
    <>
      <BaseLocalAuth
        desc={desc}
        buttonLabel={buttonLabel}
        heading={heading}
        onSubmit={handleSumbit}
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <button onClick={openAuthModal("signUp")}>
        <img
          src={leftArrowSvg}
          alt="left-arrow-svg"
          style={{ width: "3.4rem", color: "green" }}
        />
      </button>
    </>
  );
};

import githubSvg from "@/components/svg/Github.svg";
import facebokSvg from "@/components/svg/facebook.svg";
import googleSvg from "@/components/svg/google.svg";
import passwordSvg from "@/components/svg/password.svg";
import profileSvg from "@/components/svg/user_profile.svg";
import "@/styles/public/local_auth.scss";
import React from "react";

export const BaseLocalAuth = ({
  desc,
  buttonLabel,
  heading,
  onSubmit,
  formData,
  handleInputChange,
}: {
  desc: string;
  buttonLabel: string;
  heading: string;
  formData: { username: string; password: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <>
      <h1 style={{ fontSize: "4rem", margin: "2rem" }}>{heading}</h1>

      <div className="social__btns">
        <ul>
          <li>
            <img src={googleSvg} alt="googleSvg" />
          </li>
          <li>
            <img src={facebokSvg} alt="facebookSvg" />
          </li>
          <li>
            <img src={githubSvg} alt="githubSvg" />
          </li>
        </ul>
      </div>

      <p style={{ marginBottom: ".5rem" }}>{desc}</p>

      <form action="" className="form" onSubmit={onSubmit}>
        <div className="form__input form__username-input">
          <img src={profileSvg} alt="profileSvg" />
          <input
            type="text"
            placeholder="username"
            value={formData.username}
            onChange={handleInputChange}
            name="username"
          />
        </div>
        <div className="form__input form__password-input">
          <img src={passwordSvg} alt="passwordSvg" />
          <input
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />
        </div>

        <button style={{ textTransform: "uppercase", fontWeight: 500 }}>
          {buttonLabel}
        </button>
      </form>
    </>
  );
};

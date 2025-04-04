import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { AuthLocalEmailBase } from "./Base";
import { BASEURL } from "@/constants";
import { useState } from "react";
import { AuthChooseUsername } from "./ChooseUsername";
import { useNavigate } from "react-router-dom";

export const AuthLocalEmailSignUp = () => {
  const { openAuthModal, authCloseModal } = useAuthModalContext();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    console.log("button triggered");
    authCloseModal();
    navigate("/choose-username", { state: email });
    // redirect to enter username page.
    // return <AuthChooseUsername />;
  };

  return (
    <AuthLocalEmailBase
      title="Sign up with email"
      desc=" Enter your email address to create an account"
      email={email}
      buttonLabel="all sign up options"
      onButtonClick={openAuthModal("signUp")}
      handleInputChange={handleInputChange}
      handleClick={handleClick}
    />
  );
};

//  try {
//    submitData(url, "POST", { email: "", username: "" });
//  } catch (err) {
//    console.log("error submitting data", err);
//  }
//  console.log("subit email triggered");

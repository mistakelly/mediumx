import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { BaseLocalAuth } from "./Base";
import leftArrowSvg from "@/components/svg/left-arrow-svgrepo-com.svg";


export const LocalAuthSignUp = () => {
  const { openAuthModal } = useAuthModalContext();
  const heading = "Create Account";
  const desc = "or use your username and password for registration";
  const buttonLabel = "sign Up";

  return (
    <>
      <BaseLocalAuth desc={desc} buttonLabel={buttonLabel} heading={heading} />
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

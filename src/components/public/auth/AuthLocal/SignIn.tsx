import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { BaseLocalAuth } from "./Base";
import leftArrowSvg from "@/components/svg/left-arrow-svgrepo-com.svg";

export const LocalAuthSignIn = () => {
  const { openAuthModal } = useAuthModalContext();

  const heading = "Sign In";
  const desc = "or use your account to sign in";
  const buttonLabel = "sign In";

  return (
    <>
      <BaseLocalAuth desc={desc} buttonLabel={buttonLabel} heading={heading} />
      <button onClick={openAuthModal("signIn")}>
        <img
          src={leftArrowSvg}
          alt="left-arrow-svg"
          style={{ width: "3.4rem", color: "green" }}
        />
      </button>
    </>
  );
};

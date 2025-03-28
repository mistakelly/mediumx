import EmailSvg from "@/components/svg/EmailSvg";
import GoogleBtn from "./GoogleBtn";
import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import PasswordSvg from "@/components/svg/password.svg";

export const AuthSocialLogin = ({ buttonLabel }) => {
  const { openAuthModal } = useAuthModalContext();

  return (
    <div className="content">
      <GoogleBtn buttonLabel={buttonLabel} />

      <div className="btns email__btn" onClick={openAuthModal("localEmail")}>
        <EmailSvg />
        <span className="social-auth__label">{buttonLabel} with Email</span>
        <div></div>
      </div>

      <div className="btns email__btn" onClick={openAuthModal("localAuth")}>
        <img src={PasswordSvg} alt="" style={{ width: "2.5rem" }} />
        <span className="social-auth__label">{buttonLabel} with password</span>
        <div></div>
      </div>
    </div>
  );
};

import EmailSvg from "@/components/svg/EmailSvg";
import GoogleBtn from "./GoogleBtn";
import { useAuthModalContext } from "@/contexts/useAuthModalContext";

export const AuthSocialLogin = ({ buttonLabel }) => {
  const { onSwitch } = useAuthModalContext();

  return (
    <div className="content">
      <GoogleBtn buttonLabel={buttonLabel} />

      <div className="btns email__btn" onClick={onSwitch("localEmail")}>
        <EmailSvg />
        <span className="social-auth__label">{buttonLabel} with Email</span>
        <div></div>
      </div>

      <div className="btns email__btn" onClick={onSwitch("localAuth")}>
        <EmailSvg />
        <span className="social-auth__label">{buttonLabel} with password</span>
        <div></div>
      </div>
    </div>
  );
};

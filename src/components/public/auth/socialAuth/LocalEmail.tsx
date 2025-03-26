import "@/styles/public/local_email.scss";
import { useAuthModalContext } from "@/contexts/useAuthModalContext";

const LocalEmail = ({ onSwitch }) => {
  const { prevAuthModalState } = useAuthModalContext();

  const isSignUp = prevAuthModalState.current === "signUp";

  const title = isSignUp ? "Sign up with email" : "Sign in with email";

  const description = isSignUp ? (
    <p className="signup-desc">
      Enter your email address to create an <br /> account.
    </p>
  ) : (
    <p className="signin-desc">
      Enter the email address associated with your account, and we’ll send a
      magic link to your inbox.
    </p>
  );

  const buttonLabel = isSignUp ? "all sign in options" : "all sign up options";

  return (
    <div className="local-email">
      <div className="local-email__heading">
        <h1>{title}</h1>
        {description}
      </div>

      <form className="local-email__form">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" />
        <button type="submit">Continue</button>
      </form>

      <div className="all-sign_in_options">
        {/* right arrow svg */}
        <svg width="19" height="19" className="cl ii ij" viewBox="0 0 19 19">
          <path
            fillRule="evenodd"
            d="M11.47 13.969 6.986 9.484 11.47 5l.553.492L8.03 9.484l3.993 3.993z"
          ></path>
        </svg>
        <button onClick={onSwitch}>{buttonLabel}</button>
      </div>
    </div>
  );
};

export default LocalEmail;

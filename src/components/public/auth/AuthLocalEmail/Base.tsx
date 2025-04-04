import { RightArrowSvg } from "@/components/svg/RightArrowSvg";
import "@/styles/public/local_email.scss";
import { Link } from "react-router-dom";

export const AuthLocalEmailBase = ({
  title,
  desc,
  email,
  buttonLabel,
  onButtonClick,
  handleInputChange,
  handleClick,
}: {
  title: string;
  desc: string;
  email: string;
  buttonLabel: string;
  onButtonClick: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}) => {
  return (
    <div className="local-email">
      <div className="local-email__heading">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>

      <div className="local-email__container">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>
          {/* <Link to={"/choose-username"} /> */}
          Continue
        </button>
      </div>

      <div className="all-sign_in_options">
        {/* right arrow svg */}
        <RightArrowSvg />
        <button onClick={onButtonClick}>{buttonLabel}</button>
      </div>
    </div>
  );
};

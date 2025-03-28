import { RightArrowSvg } from "@/components/svg/RightArrowSvg";
import "@/styles/public/local_email.scss";

export const AuthLocalEmailBase = ({
  title,
  desc,
  buttonLabel,
  onButtonClick,
}: {
  title: string;
  desc: string;
  buttonLabel: string;
  onButtonClick: any;
}) => {
  return (
    <div className="local-email">
      <div className="local-email__heading">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>

      <form className="local-email__form">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" />
        <button type="submit">Continue</button>
      </form>

      <div className="all-sign_in_options">
        {/* right arrow svg */}
        <RightArrowSvg />
        <button onClick={onButtonClick}>{buttonLabel}</button>
      </div>
    </div>
  );
};

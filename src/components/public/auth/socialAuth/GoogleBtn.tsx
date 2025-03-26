import GoogleSvg from "@/components/svg/GoogleSvg";

const GoogleBtn = ({ buttonLabel }) => (
  <>
    <a className="btns google__btn" href="#">
      <GoogleSvg />

      <span className="social-auth__label">{buttonLabel} with Google</span>
      <div></div>
    </a>
  </>
);

export default GoogleBtn;

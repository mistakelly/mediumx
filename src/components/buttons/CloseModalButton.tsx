import CancelSvg from "../svg/CancelSvg";


export const AuthCloseModalButton = ({ authCloseModal }) => (
  <div className="cancel_btn" onClick={authCloseModal} aria-label="Close modal">
    <CancelSvg />
  </div>
);

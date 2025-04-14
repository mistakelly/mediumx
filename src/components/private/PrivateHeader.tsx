import { Link } from "react-router-dom";
import { InputComponent } from "../public/auth/ChooseStoryCategory";
import { WriteSvg } from "../svg/WriteSvg";
import searchSvg from "@/components/svg/search-magnifying-glass-svgrepo-com.svg";
import { NotificaitonSvg } from "../svg/NotificationSvg";
import "@/styles/private/private_header.scss";

export const PrivateHeader = ({
  handleShowDropDown,
}: {
  handleShowDropDown: () => void;
}) => {
  return (
    <header className="private__header">
      <div className="private__header-left">
        <h1>
          <Link to="/" />
          MEDIUMX
        </h1>
        <InputComponent
          name="search"
          placeholder="search"
          type="text"
          icon={searchSvg}
          imgAlt=""
        />
      </div>
      <div className="private__header-right">
        <div className="div">
          <Link to="/new-story">
            <WriteSvg />
          </Link>
        </div>

        <NotificaitonSvg />
        <div className="right-profile-div" onClick={handleShowDropDown}>
          <img src="/assets/images/test_img.png" alt="profile-img" />
        </div>
      </div>
    </header>
  );
};

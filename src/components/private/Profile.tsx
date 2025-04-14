import "@/styles/private/private_header.scss";
import "@/styles/private/profile.scss";
import { PrivateHeader } from "./PrivateHeader";
import ShowMoreSvg from "@/components/svg/ShowMoreSvg";
import Story from "../public/preview/Story";

export const UserProfile = () => {
  return (
    <section className="profile-container">
      <PrivateHeader />
      <div className="profile__content">

        {/* Profile Left */}
        <div className="profile__content-left">
          <div className="profil__content-left--wrapper">
            <div className="profile__content-left-header">
              <div className="left-header-up">
                <h1>Kelly</h1>
                <ShowMoreSvg />
              </div>

              <div className="left-header-down">
                <ul>
                  <li>Home</li>
                  <li>List</li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="profile__story">
            <Story authorName="Emma" />
            <Story authorName="Emma" />
            <Story authorName="Emma" />
            <Story authorName="Emma" />
            <Story authorName="Emma" />
            <Story authorName="Emma" />
            <Story authorName="Emma" />
          </div>
        </div>

        {/* Profile Right */}
        <div className="profile__content-right">
          <div className="profile__content-right-header">
            <div className="profile-img-container">
              <img src="/assets/images/test_img.png" alt="profile-img" />
            </div>
            <p>kelly</p>
            <p>18 followers</p>
            <p>
              Welcome to my world —where we ignite your passion to Explore,
              learn, love and discover many hidden facts with us
            </p>

            <button>Edit profile</button>
          </div>
          <div className="profile__content-right-body">
            <h2>Following</h2>

            <div className="followers">
              <div className="followers-details">
                <div className="followers-img-container">
                  <img src="/assets/images/test_img.png" alt="profile-img" />
                </div>
                <span>Kelly ayo</span>
              </div>

              <ShowMoreSvg />
            </div>
            <div className="followers">
              <div className="followers-details">
                <div className="followers-img-container">
                  <img src="/assets/images/test_img.png" alt="profile-img" />
                </div>
                <span>Kelly ayo</span>
              </div>

              <ShowMoreSvg />
            </div>
            <div className="followers">
              <div className="followers-details">
                <div className="followers-img-container">
                  <img src="/assets/images/test_img.png" alt="profile-img" />
                </div>
                <span>Kelly ayo</span>
              </div>

              <ShowMoreSvg />
            </div>
            <div className="followers">
              <div className="followers-details">
                <div className="followers-img-container">
                  <img src="/assets/images/test_img.png" alt="profile-img" />
                </div>
                <span>Kelly ayo</span>
              </div>

              <ShowMoreSvg />
            </div>
            <div className="followers">
              <div className="followers-details">
                <div className="followers-img-container">
                  <img src="/assets/images/test_img.png" alt="profile-img" />
                </div>
                <span>Kelly ayo</span>
              </div>

              <ShowMoreSvg />
            </div>
          </div>

          <a
            href=""
            style={{
              fontSize: "1.4rem",
              color: "#949494",
              marginTop: "2rem",
              display: "inline-block",
            }}
          >
            see all (36)
          </a>
        </div>
      </div>
    </section>
  );
};

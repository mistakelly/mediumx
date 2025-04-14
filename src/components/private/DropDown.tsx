import { forwardRef, useRef } from "react";
import { LibrarySvg } from "../svg/LibrarySvg";
import { StorySvg } from "../svg/StoriesSvg";
import { StoryStatsSvg } from "../svg/StoryStatsSvg";
import "@/styles/private/dropdown.scss";

export const HomeDropDown = forwardRef<HTMLDivElement, {}>((_, dropDownRef) => {
  return (
    <section
      className="home-dropdown hide-dropdown"
      ref={dropDownRef}
    >
      <div className="dropdown__header">
        <div className="header__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            aria-label="Profile"
          >
            <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"
            ></path>
          </svg>
          <p>Span</p>
        </div>
        <div className="header__item">
          <LibrarySvg />
          <p>Library</p>
        </div>
        <div className="header__item">
          <StorySvg />
          <p>Stories</p>
        </div>
        <div className="header__item">
          <StoryStatsSvg />
          <p>Stats</p>
        </div>
      </div>
      <div className="dropdown__body">
        <p>Settings</p>
        <p>Refine recommendations </p>
        <p>Help</p>
      </div>
      <div className="dropdown__footer">
        <p>Sign out</p>
        <p>example*****@gmail.com</p>
      </div>
    </section>
  );
});

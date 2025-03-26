import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import "@/styles/public/header.scss";

/**
 * Public Header component
 * This is the header the client sees when he/she is not authenticated
 * When a client clicks the 'Get started' button or 'signIn' button it trigers the openModal function that is responsible for determining the modal to return to the client
 */

const PublicHeader = () => {
  const { openAuthModal } = useAuthModalContext();

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="app_logo">MEDIUMX</h1>
        <ul className="nav__ul">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <button onClick={openAuthModal("signIn")}>Sign In</button>
          <button className="nav__cta" onClick={openAuthModal("signUp")}>
            Get Started
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default PublicHeader;

import "@/styles/public/choose_username.scss";
import { FormEvent, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASEURL } from "@/constants";
import { submitData } from "@/services/submit";

export const AuthChooseUsername = () => {
  const location = useLocation();
  const userEmail = location.state;
  const inputRef = useRef(null);
  const [username, setUsername] = useState("");
  const url = `${BASEURL}/auth/email_and_password/`;
  const navigate = useNavigate();

  console.log("location email", location.state);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await submitData(url, "POST", {
        email: userEmail,
        username: username,
      });

      console.log("data", data);
      navigate("/select-category");
    } catch (err) {
      console.log("err submitting data", err);
    }

    console.log("form submitted");
  };

  return (
    <section className="username-container">
      <h1>MEDIUMX</h1>

      <div className="username-content">
        <div className="username-header">
          <h2>Almost there!</h2>
          <p>Finish creating your account for the full mediumx experience</p>
        </div>

        <form className="username-body" onSubmit={handleSubmit}>
          <label htmlFor="username">Your username:</label>
          <input
            type="text"
            name="username"
            ref={inputRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Your email:</label>
          <p>{userEmail}</p>
          <button>Create account</button>
        </form>
      </div>
    </section>
  );
};

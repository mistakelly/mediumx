import { useEffect } from "react";
import "@/styles/private/home.scss";
import Story from "../public/preview/Story";
import { PlusSvg } from "../svg/PlusSvg";
import { PrivateHeader } from "./PrivateHeader";



export const Home = () => {
  useEffect(() => {
    // fetch stories from the server and display to the user.
    // our application starts from there.
  }, []);

  return (
    <section className="home">
      <PrivateHeader />
      {/* Body */}
      <body className="home__body">
        <article className="home__body-article">
          <div className="article-body">
            <div className="article-header">
              <ul>
                <div className="plus-svg-div">
                  <PlusSvg />
                </div>
                <li>For you</li>
                <li>Following</li>
                <li>Featured</li>
                <li>Software engineering</li>
                <li>History</li>
                <li>Coding</li>
                <li>Science</li>
              </ul>
            </div>
            <div className="story">
              <Story authorName="Emma" />
              <Story authorName="Ebuka" />
              <Story authorName="Emmanuel" />
              <Story authorName="Eloka" />
              {/* </div> */}
            </div>
          </div>
        </article>
        <aside className="home__body-aside">
          <h1>aside</h1>
        </aside>
      </body>
    </section>
  );
};

{
  /* <div className="story__container"> */
}
{
  /* <div className="story__content"> */
}
{
  /* <div className="story__header">
                    <figure>
                      <img
                        src="/assets/images/test_img.png"
                        alt="user-profile"
                      />
                    </figure>
                    <figcaption>Kelvin okoye</figcaption>
                  </div>

                  <div
                    className="section"
                    style={{ display: "flex", gap: "4rem" }}
                  >
                    <article
                      className="story__body"
                      //   style={{ background: "red" }}
                    >
                      <h1>
                        How I Scaled a Go Backend to Handle 1 Million Requests
                        per Second
                      </h1>
                      <p>
                        From 100 Requests to 1 Million: My Journey in Scaling a
                        Go Backend
                      </p>

                      <div className="story__footer" style={{}}>
                        <div className="story__footer-left">
                          <p>April 24, 25</p>
                          <div
                            className="clap"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              //   background: "red",
                            }}
                          >
                            <ClapSvg />
                            <p>count</p>
                          </div>

                          <div
                            className="comment"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <CommentSvg />
                            <p>comment</p>
                          </div>
                        </div>
                        <div className="story__footer-right">
                          <h1>right</h1>
                        </div>
                      </div>
                    </article>

                    <div
                      className="story__picture"
                      style={{ background: "green" }}
                    >
                      <img
                        src="/assets/images/test_img.png"
                        alt="user-profile"
                      />
                    </div>
                  </div> */
}

{
  /* </div> */
}

import { Children } from "@/shared/types/types";

const MainContent: React.FC<Children> = ({ children }) => {
  return (
    <main className="preview-story-container">
      <div className="stories">
        <div className="stories__intro">
          <h2>Recent Stories</h2>
          <p>Discover recent stories from writers on any topic</p>
          <button>See more topics</button>
        </div>

        <div className="story-container">
          <div className="preview" style={{ width: "90%" }}>
            {children}
          </div>
        </div>
      </div>

      <div className="outro">
        <div className="outro-card">
          <picture className="outro-img">
            <img src="/assets/images/home_image.webp" />
          </picture>

          <h2>Share the Inspiration, Amplify the Community!</h2>
          <p>
            Help empower writers and creators by spreading the word about
            MediumX. Together, we can grow a vibrant community of stories,
            ideas, and innovation!
          </p>
          <div className="cta">
            <button>Share MediumX</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;

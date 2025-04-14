import "@/styles/styles.scss";
import LandingPage from "./pages/public/LandingPage";
import { AuthModalProvider } from "./providers/AuthModalProvider";
import { Route, Routes } from "react-router-dom";
import { AuthChooseUsername } from "./components/public/auth/AuthLocalEmail/ChooseUsername";
import { SelectStoryCategory } from "./components/public/auth/ChooseStoryCategory";
import { useEffect, useState } from "react";
import { Home } from "./components/private/Home";
import { NewStory, StoryPreview } from "./components/private/NewStory";
import { UserProfile } from "./components/private/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const accessToken = localStorage.getItem("access");

  useEffect(() => {
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthModalProvider>
      <Routes>
        <Route
          path="/"
          // element={isAuthenticated ? <Home /> : <LandingPage />}
          element={<LandingPage />}
        />
        <Route path="/choose-username" element={<AuthChooseUsername />} />
        <Route path="/select-category" element={<SelectStoryCategory />} />
        <Route path="/new-story" element={<NewStory />} />
        <Route path="/story-preview" element={<StoryPreview />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="*"
          element={<h1>Page not found please go back to home page</h1>}
        />
      </Routes>
    </AuthModalProvider>
  );
}

export default App;

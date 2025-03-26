import "@/styles/styles.scss";
import LandingPage from "./pages/public/LandingPage";
import { AuthModalProvider } from "./providers/AuthModalProvider";

function App() {
  return (
    <AuthModalProvider>
      <LandingPage />
    </AuthModalProvider>
  );
}

export default App;

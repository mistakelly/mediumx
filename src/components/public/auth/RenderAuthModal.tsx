import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { AuthBaseModal } from "./AuthBaseModal";
import { RenderAuthLocalEmail } from "./AuthLocalEmail/Render";
import { RenderLocalAuth } from "./AuthLocal/Render";

export const RenderAuthModal = () => {
  const { modalType, isModalVisible } = useAuthModalContext();

  const renderContent = () => {
    // return <RenderAuthLocalEmail />;
    switch (modalType) {
      case "signUp":
        return <SignUp />;
      case "signIn":
        return <SignIn />;

      case "localEmail":
        return <RenderAuthLocalEmail />;

      case "localAuth":
        return <RenderLocalAuth />;

      default:
        return null;
    }
  };

  return (
    <>{isModalVisible && <AuthBaseModal>{renderContent()}</AuthBaseModal>}</>

    // <>{<AuthBaseModal>{<RenderAuthLocalEmail />}</AuthBaseModal>}</>
  );
};

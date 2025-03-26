import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import LocalEmail from "./socialAuth/LocalEmail";
import { AuthBaseModal } from "./AuthBaseModal";

export const RenderAuthModal = () => {
  const {
    onSwitch,
    modalType,
    prevAuthModalState,
    isModalVisible,
    authCloseModal,
    AuthModalRef,
  } = useAuthModalContext();

  const renderContent = () => {
    switch (modalType) {
      case "signUp":
        return <SignUp onSwitch={onSwitch("signIn")} />;
      case "signIn":
        return <SignIn onSwitch={onSwitch("signUp")} />;

      case "localEmail":
        return (
          <LocalEmail
            onSwitch={
              prevAuthModalState.current === "signUp"
                ? onSwitch("signUp")
                : onSwitch("signIn")
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isModalVisible && (
        <AuthBaseModal authCloseModal={authCloseModal} ref={AuthModalRef}>
          {renderContent()}
        </AuthBaseModal>
      )}
    </>
  );
};

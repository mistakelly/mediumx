import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { AuthLocalEmailBase } from "./Base";

export const AuthLocalEmailSignIn = () => {
  const { openAuthModal } = useAuthModalContext();

  return (
    <AuthLocalEmailBase
      title="Sign in with email"
      desc="Enter the email address associated with your account, and we’ll send amagic link to your inbox"
      buttonLabel="all sign in options"
      onButtonClick={openAuthModal("signIn")}
    />
  );
};

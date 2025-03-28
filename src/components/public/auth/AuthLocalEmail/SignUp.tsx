import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { AuthLocalEmailBase } from "./Base";

export const AuthLocalEmailSignUp = () => {
  const { openAuthModal } = useAuthModalContext();

  return (
    <AuthLocalEmailBase
      title="Sign up with email"
      desc=" Enter your email address to create an account"
      buttonLabel="all sign up options"
      onButtonClick={openAuthModal("signUp")}
    />
  );
};

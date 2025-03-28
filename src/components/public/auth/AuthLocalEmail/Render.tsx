import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { AuthLocalEmailSignUp } from "./SignUp";
import { AuthLocalEmailSignIn } from "./SignIn";

export const RenderAuthLocalEmail = () => {
  const { prevAuthModalState } = useAuthModalContext();

  return prevAuthModalState.current == "signUp" ? (
    <AuthLocalEmailSignUp />
  ) : (
    <AuthLocalEmailSignIn />
  );
};

import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { LocalAuthSignUp } from "./SignUp";
import { LocalAuthSignIn } from "./SignIn";

export const RenderLocalAuth = () => {
  const { prevAuthModalState } = useAuthModalContext();

  return prevAuthModalState.current == "signUp" ? (
    <LocalAuthSignUp />
  ) : (
    <LocalAuthSignIn />
  );
};

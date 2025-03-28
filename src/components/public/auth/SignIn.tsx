import "@/styles/public/auth_modal.scss";
import { AuthSocialLogin } from "./socialAuth/AuthSocialLoginBtns";
import { AuthModalFooter } from "./Footer";
import { useAuthModalContext } from "@/contexts/useAuthModalContext";

export const SignIn = () => {
  const { openAuthModal } = useAuthModalContext();
  return (
    <>
      <h1 className="title">Welcome To Mediumx</h1>
      <AuthSocialLogin buttonLabel="Sign in" />

      {/* <SubmitButton buttonLabel="Sign In" onSubmit={onSubmit} /> */}
      <AuthModalFooter>
        <p>
          No account?
          <button onClick={openAuthModal("signUp")}>Create one</button>
        </p>
      </AuthModalFooter>
    </>
  );
};

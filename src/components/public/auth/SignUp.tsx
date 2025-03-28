import { AuthModalFooter } from "./Footer";
import "@/styles/public/auth_modal.scss";
import { AuthSocialLogin } from "./socialAuth/AuthSocialLoginBtns";
import { useAuthModalContext } from "@/contexts/useAuthModalContext";

export const SignUp = () => {
  const { openAuthModal } = useAuthModalContext();
  return (
    <>
      <h1 className="title">Join Mediumx</h1>

      {/* social authentication */}
      <AuthSocialLogin buttonLabel="Sign up" />

      {/* <SubmitButton buttonLabel="Sign up" onSubmit={onsubmit} /> */}
      {/* <AuthCloseModalButton AuthCloseModal={authCloseModal} /> */}

      {/* footer */}
      <AuthModalFooter>
        <p>
          Already have an account?
          <button onClick={openAuthModal("signIn")}>Sign in</button>
        </p>
      </AuthModalFooter>
    </>
  );
};

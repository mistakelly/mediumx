import "@/styles/public/auth_modal.scss";
import { TSignInProps } from "@/shared/types/types";
import { AuthSocialLogin } from "./socialAuth/AuthSocialLoginBtns";
import { AuthModalFooter } from "./Footer";

export const SignIn: React.FC<TSignInProps> = ({ onSwitch }) => {
  return (
    <>
      <h1 className="title">Welcome To Mediumx</h1>
      <AuthSocialLogin buttonLabel="Sign in" />

      {/* <SubmitButton buttonLabel="Sign In" onSubmit={onSubmit} /> */}
      <AuthModalFooter>
        <p>
          No account?
          <button onClick={onSwitch}>Create one</button>
        </p>
      </AuthModalFooter>
    </>
  );
};

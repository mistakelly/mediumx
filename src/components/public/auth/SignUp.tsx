import React from "react";
import { AuthModalFooter } from "./Footer";
import "@/styles/public/auth_modal.scss";

import { TSignUpProps } from "@/shared/types/types";
import { AuthSocialLogin } from "./socialAuth/AuthSocialLoginBtns";

export const SignUp: React.FC<TSignUpProps> = ({ onSwitch }) => {
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
          <button onClick={onSwitch}>Sign in</button>
        </p>
      </AuthModalFooter>
    </>
  );
};

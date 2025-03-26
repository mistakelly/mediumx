import React from "react";
import { TAuthBaseProps } from "@/shared/types/types";
import { AuthCloseModalButton } from "@/components/buttons/CloseModalButton";

/**
 * This is the Base Authentication modal component.
 * Its is responsible for housing all the children that make up the Base Auth modal.
 * It makes use of a ref
 */
export const AuthBaseModal = React.forwardRef<HTMLDivElement, TAuthBaseProps>(
  ({ children, authCloseModal }, ref) => (
    <section className="auth-modal" ref={ref}>
      <div className="content">{children}</div>

      {/* this is the x button used for closing the auth modal */}
      <AuthCloseModalButton authCloseModal={authCloseModal} />
    </section>
  )
);

AuthBaseModal.displayName = "AuthBaseModal";

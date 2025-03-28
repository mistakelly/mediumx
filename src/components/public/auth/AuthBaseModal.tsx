import { AuthCloseModalButton } from "@/components/buttons/CloseModalButton";
import { useAuthModalContext } from "@/contexts/useAuthModalContext";

/**
 * This is the Base Authentication modal component.
 * Its is responsible for housing all the children that make up the Base Auth modal.
 * It makes use of a ref
 */
export const AuthBaseModal = ({ children }: { children: React.ReactNode }) => {
  const { authCloseModal, AuthModalRef } = useAuthModalContext();

  return (
    <>
      <section className="auth-modal" ref={AuthModalRef}>
        <div className="content">{children}</div>

        {/* this is the x button used for closing the auth modal */}
        <AuthCloseModalButton authCloseModal={authCloseModal} />
      </section>
    </>
  );
};

AuthBaseModal.displayName = "AuthBaseModal";



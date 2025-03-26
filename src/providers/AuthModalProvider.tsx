import React from "react";
import { ModalContext } from "@/contexts/useAuthModalContext";
import { useAuthModalState } from "@/hooks/auth/useAuthModalState";
import { useAuthModalMethod } from "@/hooks/auth/useAuthModalMethod";
import { useAuthPreviousModalState } from "@/hooks/auth/useAuthPreviousModalState";
import { Children } from "@/shared/types/types";

export const AuthModalProvider: React.FC<Children> = ({ children }) => {
  // States
  const {
    setModalType,
    setIsModalVisible,
    isModalVisible,
    AuthModalRef,
    modalType,
    prevAuthModalState,
    label,
    setLabel,
  } = useAuthModalState();

  // Methods
  const { openAuthModal, authCloseModal, onSwitch } = useAuthModalMethod(
    setModalType,
    setIsModalVisible
  );

  // use Effect
  useAuthPreviousModalState(modalType, prevAuthModalState);

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        AuthModalRef,
        modalType,
        prevAuthModalState,
        openAuthModal,
        authCloseModal,
        onSwitch,
        label,
        setLabel,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

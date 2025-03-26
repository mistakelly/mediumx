import { TAuthModalTypes } from "@/shared/types/types";
import React from "react";

export const useAuthModalState = () => {
  // states
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [modalType, setModalType] = React.useState<TAuthModalTypes>(null);
  const [label, setLabel] = React.useState<TAuthModalTypes>(null);

  // Refs
  const AuthModalRef = React.useRef<HTMLDivElement | null>(null);
  const prevAuthModalState = React.useRef<TAuthModalTypes | null>(null);

  return {
    isModalVisible,
    setIsModalVisible,
    modalType,
    setModalType,
    label,
    setLabel,
    AuthModalRef,
    prevAuthModalState,
  };
};

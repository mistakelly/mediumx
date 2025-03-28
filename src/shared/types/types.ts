import React from "react";

export namespace AuthModal {}

export type TAuthModalContext = {
  isModalVisible: boolean;
  modalType: string | null;
  label: string | null;

  // Refs
  AuthModalRef: React.MutableRefObject<HTMLDivElement | null>;
  prevAuthModalState: React.MutableRefObject<string | null>;

  // States
  setLabel: React.Dispatch<React.SetStateAction<TAuthModalTypes>>;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;

  // Functions
  openAuthModal: (type: TAuthModalTypes) => (e: React.MouseEvent) => void;
  authCloseModal: () => void;
};

export type Children = {
  children: React.ReactNode;
};

export type TAuthModalTypes =
  | "signIn"
  | "signUp"
  | "localEmail"
  | "localAuth"
  | null;

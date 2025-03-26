import { TAuthModalContext } from "@/shared/types/types";
import React from "react";

export const ModalContext = React.createContext<TAuthModalContext | undefined>(
  undefined
);

export const useAuthModalContext = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useAuthModalContext must be used within a AuthModalProvider"
    );
  }
  return context;
};

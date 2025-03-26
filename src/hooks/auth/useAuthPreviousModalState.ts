import { TAuthModalTypes } from "@/shared/types/types";
import React from "react";

export const useAuthPreviousModalState = (
  modalType: TAuthModalTypes,
  prevRef: React.MutableRefObject<TAuthModalTypes | null>
) => {
  React.useEffect(() => {
    prevRef.current = modalType;
  }, [modalType]);
};

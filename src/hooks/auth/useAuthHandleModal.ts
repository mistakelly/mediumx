import { useEffect } from "react";
import { useAuthModalContext } from "@/contexts/useAuthModalContext";
import { toggleBodyOverlay } from "@/shared/utils/domUtils";

export const useAuthHandleModal = () => {
  const { isModalVisible, setIsModalVisible, AuthModalRef } =
    useAuthModalContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModalVisible &&
        AuthModalRef.current &&
        !AuthModalRef.current.contains(event.target as HTMLElement)
      ) {
        setIsModalVisible((prev) => !prev);
      }
    };

    toggleBodyOverlay(isModalVisible);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isModalVisible]);
};

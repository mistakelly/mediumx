import { TAuthModalTypes, TOpenAuthModal } from "@/shared/types/types";

export const useAuthModalMethod = (
  setModalType: React.Dispatch<React.SetStateAction<TAuthModalTypes>>,
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // use function currying to dynamically set which model to open when a 'GetStarted' or 'Sign In' button is clicked
  const openAuthModal =
    (modalType: TOpenAuthModal) => (e: React.MouseEvent) => {
      e.stopPropagation();
      setModalType(modalType);
      setIsModalVisible((prev) => !prev);
    };

  const authCloseModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  let onSwitch = (modalType: TAuthModalTypes) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalType(modalType);
  };

  return {
    openAuthModal,
    authCloseModal,
    onSwitch,
  };
};

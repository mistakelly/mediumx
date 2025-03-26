export const toggleBodyOverlay = (isModalVisible = false): void => {
  document.body.classList.toggle("body-prevent-scroll", isModalVisible);
  document.body.classList.toggle("modal-active", isModalVisible);
};

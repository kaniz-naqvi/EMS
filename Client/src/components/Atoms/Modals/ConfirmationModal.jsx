import React from "react";
import Modal from "./Modal";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "delete",
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      onConfirm={onConfirm}
    >
      <div className="py-4">
        <p>Are you sure you want to {message}?</p>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

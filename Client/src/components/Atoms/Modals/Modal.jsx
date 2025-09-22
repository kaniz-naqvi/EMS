import { useTheme } from "@/styles/theme";
import React from "react";
import Button from "../Buttons/Buttons";
import { Check, Plus } from "lucide-react";
import { lightenColor } from "@/utils/helpers/colorsHelper";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  showButtons = true,
}) => {
  const theme = useTheme();

  if (!isOpen) return null;
  if (isOpen) document.body.style.overflowY = "hidden";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
      style={{ background: lightenColor("#000000", 70) }}
    >
      <div
        className="rounded-xl shadow-xl w-full max-w-md mx-4"
        style={{
          backgroundColor: theme.background,
          color: theme.text,
          border: `1px solid ${theme.primary}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="px-6 py-3">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        )}

        <div className="px-6 py-1">{children}</div>

        {showButtons && (
          <div className="px-6 py-4 flex justify-end space-x-3">
            <Button variant="secondary" color={theme.primary} onClick={onClose}>
              {cancelText}
            </Button>
            <Button variant="primary" color={theme.primary} onClick={onConfirm}>
              {confirmText === "Confirm" ? (
                <>
                  <Check /> {confirmText}
                </>
              ) : confirmText === "Add" ? (
                <>
                  <Plus />
                  {confirmText}
                </>
              ) : (
                confirmText
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

import React, { ReactNode } from "react";

type ModalProps = {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};
const Modal: React.FC<ModalProps> = ({ title, open, onClose, children }) => {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className={`fixed backdrop-blur-sm inset-0 z-10 flex justify-center items-center transition-all ${
            open ? "visible" : "invisible"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white p-6 transition-all rounded-lg relative ${
              open ? "scale-100 opacity-100" : "scale-150 opacity-0"
            }`}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
            >
              X
            </button>
            <h3 className="text-center text-xl font-bold mb-4 font-mono">
              {title}
            </h3>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;

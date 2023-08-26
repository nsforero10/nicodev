import * as React from "react";

interface BackdropProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
export default function Backdrop({ open, onClose, children }: BackdropProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10 flex flex-col justify-center items-center transition-transform duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      }
      `}
      onClick={onClose}
    >
      {children}
    </div>
  );
}

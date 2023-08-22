import * as React from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Drawer({ open, onClose, children }: DrawerProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="fixed w-96 h-full top-0 right-0 flex flex-col z-200 bg-teal pt-14 px-4">
        <button className="absolute top-4 right-4 text-black" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

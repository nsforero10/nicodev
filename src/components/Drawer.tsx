import * as React from "react";
import Backdrop from "./Backdrop";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Drawer({ open, onClose, children }: DrawerProps) {
  return (
    <>
      <Backdrop open={open} />
      <div
        className={`fixed w-80 h-full top-0 right-0 flex flex-col bg-teal pt-14 px-4 transform transition-transform duration-500 delay-150 z-20 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4 text-black" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>
  );
}

import * as React from "react";
import Backdrop from "./Backdrop";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Drawer({ open, onClose, children }: DrawerProps) {
  return (
    <Backdrop open={open}>
      <div
        className={`sidebar fixed w-80 h-full top-0 right-0 flex flex-col z-200 bg-teal pt-14 px-4`}
      >
        <button className="absolute top-4 right-4 text-black" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </Backdrop>
  );
}

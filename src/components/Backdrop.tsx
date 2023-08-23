import * as React from "react";

interface BackdropProps {
  open: boolean;
  children?: React.ReactNode;
}
export default function Backdrop({ open, children }: BackdropProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10 flex flex-col justify-center items-center transition-transform duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      }
      `}
    >
      {children}
    </div>
  );
}

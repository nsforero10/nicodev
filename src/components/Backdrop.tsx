import * as React from "react";

interface BackdropProps {
  open: boolean;
  children: React.ReactNode;
}
export default function Backdrop({ open, children }: BackdropProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex flex-col justify-center items-center ${
        open ? "block" : "hidden"
      }
      `}
    >
      {children}
    </div>
  );
}

import * as React from "react";
import NIconOutline from "../assets/n-logo-outline.svg";
import Drawer from "./Drawer";

export default function NavBar() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <>
      <nav className="w-full bg-black py-9 flex justify-center gap-10 italic text-xl font-light text-gray fixed">
        <NIconOutline className="absolute top-6 left-1 lg:left-8 h-8 lg:h-12" />
        <button className="text-white hidden md:block">
          <a>//Home</a>
        </button>
        <button className="hidden md:block">
          <a>//About</a>
        </button>
        <button className="hidden md:block">
          <a>//Projects</a>
        </button>
        <button className="text-teal hidden md:block">
          <a>//Contact</a>
        </button>
        <button
          className="block md:hidden absolute top-6 right-4"
          onClick={() => setShowDrawer(true)}
        >
          Bars
        </button>
      </nav>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <div className="flex flex-col gap-4 text-black text-xl">
          <a>//Home</a>
          <a>//About</a>
          <a>//Projects</a>
          <a>//Contact</a>
          <span className="text-sm">
            © 2023. Made with passion by Nicolás Forero.
          </span>
          <span className="text-sm">All right reserved.</span>
        </div>
      </Drawer>
    </>
  );
}
NavBar;

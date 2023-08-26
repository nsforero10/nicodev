import * as React from "react";
import NIconOutline from "../assets/n-logo-outline.svg";
import Drawer from "./Drawer";
import { Link } from "gatsby";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavBarProps {
  currentPage: "home" | "about" | "projects";
}

export default function NavBar({ currentPage }: NavBarProps) {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <>
      <nav className="w-full bg-black py-9 flex justify-center gap-10 text-xl font-light text-light-gray fixed z-10">
        <Link to="/">
          <NIconOutline className="absolute top-6 left-1 lg:left-8 h-8 lg:h-12 cursor-pointer" />
        </Link>
        <Link
          to="/"
          className={`${currentPage == "home" && "text-white"} hidden md:block`}
        >
          //Home
        </Link>
        <Link
          to="/about"
          className={`${
            currentPage == "about" && "text-white"
          } hidden md:block`}
        >
          //About
        </Link>
        <Link
          to="/projects"
          className={`${
            currentPage == "projects" && "text-white"
          } hidden md:block`}
        >
          //Projects
        </Link>
        <button
          className="text-teal hidden md:block"
          onClick={() => setShowContactForm(true)}
        >
          //Contact
        </button>
        <button
          className="block  absolute top-6 right-4 "
          onClick={() => setShowDrawer(true)}
        >
          <FontAwesomeIcon className="text-2xl" icon={faBars} />
        </button>
      </nav>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <div className="flex flex-col gap-4 text-black text-xl">
          <Link to="/">//Home</Link>
          <Link to="/about">//About</Link>
          <Link to="/projects">//Projects</Link>
          <button
            className="text-left"
            onClick={() => {
              setShowDrawer(false);
              setShowContactForm(true);
            }}
          >
            //Contact
          </button>
          <span className="text-sm">
            © 2023. Made with passion by Nicolás Forero.
          </span>
          <span className="text-sm">All right reserved.</span>
        </div>
      </Drawer>
      <ContactForm
        open={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </>
  );
}
NavBar;

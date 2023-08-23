import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavBar from "../components/NavBar";
import Iceberg from "../assets/iceberg.svg";
import ContactForm from "../components/ContactForm";

export const Head: HeadFC = () => <title>Nico - Software engineer</title>;
const HomePage: React.FC<PageProps> = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <>
      <main className="flex flex-col items-center bg-black">
        <NavBar currentPage="home" />
        <section className="w-full h-screen max-w-[1440px] flex flex-col justify-evenly items-center pt-24">
          <article className="w-full flex flex-col-reverse lg:flex-row items-center z-[3]">
            <img
              src="nico-photo.png"
              className="w-4/5 sm:w-1/2 lg:3/4 h-auto lg:h-[600px]"
              alt="Nico photo within cirlces"
            />
            <div className="w-full grow flex flex-col items-start lg:items-end px-6 lg:pr-14">
              <span className="text-2xl lg:text-5xl">I'm</span>
              <h1 className="font-display pb-4 text-5xl md:text-7xl lg:p-0 lg:text-8xl lg:text-right">
                Nicolás Forero
              </h1>
              <p className="text-md md:text-xl lg:text-right font-light max-w-[700px]">
                I'm a <span className="text-teal font-normal">Frontend</span>{" "}
                focused{" "}
                <span className="text-teal font-normal">Software Engineer</span>{" "}
                based in Colombia and I love to help{" "}
                <span className="text-teal font-normal">people</span> through{" "}
                <span className="text-teal font-normal">technology</span>
              </p>
              <div className="w-full justify-center hidden lg:flex">
                <Iceberg className="relative max-w-md w-full h-auto" />
              </div>
            </div>
          </article>
          <div className="relative bottom-8 w-min h-16 hover:animate-bounce block hover:z-[4]">
            <button
              className="relative bg-teal h-14 w-56 font-bold z-[2]"
              onClick={() => setShowContactForm(true)}
            >
              <a className="text-2xl text-black"> GET IN TOUCH</a>
            </button>
            <div className="relative bottom-12 left-2 border-2 border-solid border-dark-teal h-14 w-56 z-[1]"></div>
          </div>
        </section>
        <div className="h-[40vh]  hidden lg:block absolute bottom-0 w-full bottom-shine z-[0]" />
      </main>
      <ContactForm
        open={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </>
  );
};

export default HomePage;

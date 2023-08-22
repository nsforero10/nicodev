import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavBar from "../components/NavBar";
import Iceberg from "../assets/iceberg.svg";

export const Head: HeadFC = () => <title>Nico - Software engineer</title>;
const HomePage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col items-center bg-black">
      <NavBar />
      <section className="w-full h-screen max-w-[1440px] flex flex-col justify-evenly items-center pt-28">
        <article className="w-full flex flex-col-reverse lg:flex-row items-center z-[3]">
          <img
            src="nico-photo.png"
            className="w-4/5 md:w-2/4 lg:w-auto h-auto lg:h-[600px]"
            alt="Nico photo within cirlces"
          />
          <div className="w-full grow flex flex-col items-start lg:items-end px-14 lg:pr-14">
            <span className="text-2xl lg:text-5xl">I'm</span>
            <h1 className="font-display pb-4 lg:p-0 text-6xl md:text-7xl lg:text-8xl lg:text-right">
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
        <div className="w-min h-16">
          <button className="relative bg-teal h-14 w-56 font-bold z-[2]">
            <a className="text-2xl text-black"> GET IN TOUCH</a>
          </button>
          <div className="relative bottom-12 left-2 border-2 border-solid border-dark-teal h-14 w-56 z-[1]"></div>
        </div>
        <div className="h-[40vh] block absolute bottom-0 w-full bottom-shine z-[0]" />
      </section>
    </main>
  );
};

export default HomePage;

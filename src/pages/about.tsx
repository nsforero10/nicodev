import * as React from "react";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center bg-black h-screen">
      <NavBar currentPage="about" />
      <h1>About Page</h1>
    </main>
  );
};

export default AboutPage;

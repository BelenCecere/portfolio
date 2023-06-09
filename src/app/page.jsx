import React from "react";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Projects from "./projects.jsx";
import Links from "./components/links";
import Image from "next/image";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 py-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold"> Belén Cécere</h1>
        <h2 className="text-white text-3xl mt-4">
          FullStack Javascript Developer
        </h2>
      </div>
      <Links />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default index;

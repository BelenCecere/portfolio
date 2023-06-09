import React from "react";

const navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#" className="ml-3 text-xl">
            Belén Cécere
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-white">
          <a href="#skills" className="mr-5 hover:underline">
            Tecnologías
          </a>
          <a href="#projects" className="mr-5 hover:underline">
            Proyectos
          </a>
          <a href="cv.pdf" download="cv.pdf" className="mr-5 hover:underline">
            CV
          </a>
          <a href="#contact" className="mr-5 hover:underline">
            Contactame
          </a>
        </nav>
      </div>
    </header>
  );
};

export default navbar;

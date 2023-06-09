import React from "react";
import Image from "next/image";
import { CodeIcon } from "@heroicons/react/solid";
import { BsGithub } from "react-icons/bs";

const project = () => {
  const projects = [
    {
      title: "TunEcommerce",
      subtitle: "React | PSQL | Node",
      description:
        "Desarrollo íntegro de plataforma de e-commerce de instrumentos musicales, con filtros por categoría y carrito de compras. Proyecto grupal hecho en dos semanas por 6 integrantes.",
      image: "/public/perfil.jpeg",
      link: "https://tunecommerce-frontend-j4fq.vercel.app/",
      github: "https://github.com/martin441/Tunecommerce-frontend",
    },

    {
      title: "House of Dev",
      subtitle: "React | PSQL | Node",
      description:
        "Desarrollo de aplicación para emprendimiento inmobiliario donde se puede filtrar las propiedades y agendar citas para visitas. Proyecto grupal hecho en 4 semanas por 3 integrantes.",
      image: "/public/perfil.jpeg",
      link: "https://github.com/Anibal-Quiroz-P5/house-of-dev",
      github: "https://github.com/Anibal-Quiroz-P5/house-of-dev",
    },
  ];

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Mis proyectos
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Desarrollados de forma individual y grupal
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                  width={90}
                  height={90}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900  hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>

                  <p className="leading-relaxed">{project.description}</p>
                  <div className="flex items-center mt-4">
                    <a href={project.github}>
                      <BsGithub className="w-8 h-8 mr-1 flex items-center mt-4 justify-center" />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default project;

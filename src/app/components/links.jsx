import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { BiLink } from "react-icons/bi";
import { TbUserSearch } from "react-icons/tb";

const links = () => {
  const links = [
    { title: "Github", link: "https://github.com/BelenCecere" },
    { title: "Linkedin", link: "https://www.linkedin.com/in/belen-cecere/" },
  ];
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <TbUserSearch className="w-10 h-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Dónde encontrarme
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {links.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BiLink className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  <a href={skill.link}>{skill.title}</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default links;

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      image: "/images/Catchafire.png",
      title: "Green Volunteer Network",
      description:
        "I offer a range of services to help businesses and individuals build modern, scalable, ",
      tags: ["Adobe Illustrator", "Photoshop"],
      code: "#",
      live: "#",
    },
    {
      id: 2,
      image: "/images/Catchafire.png",
      title: "Green Volunteer Network",
      description:
        "I offer a range of services to help businesses and individuals build modern, scalable, ",
      tags: ["Adobe Illustrator", "Photoshop"],
      code: "#",
      live: "#",
    },
    {
      id: 3,
      image: "/images/Catchafire.png",
      title: "Green Volunteer Network",
      description:
        "I offer a range of services to help businesses and individuals build modern, scalable, ",
      tags: ["Adobe Illustrator", "Photoshop"],
      code: "#",
      live: "#",
    },
  ];
  return (
    <div className="py-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent">
          Featured Projects
        </h1>
        {/* Paragraph */}
        <p className="text-center text-[var(--text-color)] leading-relaxed text-sm md:text-lg"></p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover "
                />
              </div>
              {/* Content */}
              <div className="p-3 flex flex-col">
                <h3 className="text-lg md:text-2xl font-medium text-center">
                  {project.title}
                </h3>
                <p className="text-sm md:text-[16px] text-[var(--text-color)] leading-relaxed mt-4 md:mt-5 text-justify">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-[12px] md:text-sm rounded-full bg-[var(--primary-color)]/30 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* CTAs */}
                <div className="flex justify-between gap-2 md:gap-3 ">
                  <a
                    href={project.code}
                    target="_blank"
                    className="w-[50%] mt-5 flex items-center justify-center gap-2 border border-[var(--primary-color)]  h-10 rounded-bl-2xl hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition"
                  >
                    <FaGithub size={18} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="w-[50%] mt-5 flex items-center justify-center gap-2 border border-[var(--primary-color)]  h-10 rounded-br-2xl hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

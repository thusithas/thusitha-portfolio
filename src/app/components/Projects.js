"use client";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import animations from "./animation/variants";

function Projects() {
  const projects = [
    {
      id: 1,
      image: "/images/Catchafire.png",
      title: "Green Volunteer Network",
      description:
        "A web application built with Laravel to connect volunteers with environmental projects and NGOs. It streamlines volunteer registration, event management, and project coordination while ensuring a simple and intuitive user experience.",
      tags: ["Laravel", "MySQL"],
      code: "#",
      live: "#",
    },
    {
      id: 2,
      image: "/images/Catchafire.png",
      title: "Interactive Resume Builder",
      description:
        "A React-based tool that allows users to create, customize, and download professional resumes with ease. It features real-time previews, clean design templates, and a seamless user experience.",
      tags: ["React", "Tailwind CSS"],
      code: "#",
      live: "#",
    },
    {
      id: 3,
      image: "/images/Catchafire.png",
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website developed with Next.js to showcase my skills, projects, and experiences. It highlights smooth animations, optimized performance, and a professional design.",
      tags: ["Next.JS", "Tailwind CSS"],
      code: "#",
      live: "#",
    },
    {
      id: 4,
      image: "/images/Catchafire.png",
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website developed with Next.js to showcase my skills, projects, and experiences. It highlights smooth animations, optimized performance, and a professional design.",
      tags: ["Next.JS", "Tailwind CSS"],
      code: "#",
      live: "#",
    },
  ];
  return (
    <div id="projects" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Heading */}
        <motion.h1
          variants={animations.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h1>
        {/* Paragraph */}
        <motion.p
          variants={animations.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-[var(--text-color)] leading-relaxed text-sm md:text-lg"
        >
          Here are some of my featured projects that showcase my skills in
          design, development, and problem-solving. Each project reflects my
          passion for building practical solutions, experimenting with new
          technologies, and creating user-friendly experiences.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          variants={animations.fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
        >
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
                <h3 className="text-[var(--primary-color)] text-lg md:text-2xl font-bold text-center">
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
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;

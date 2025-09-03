import { Code2, Palette, Server, Smartphone } from "lucide-react";
import { FaWordpress } from "react-icons/fa";
import React from "react";

function Services() {
  const services = [
    {
      name: "Frontend Development",
      description:
        "Building responsive, user friendly, and dynamic interfaces using React, Next.js, and modern frameworks for a seamless user experience.",
      icon: <Code2 size={32} />,
    },
    {
      name: "Backend Development",
      description:
        "Developing secure, scalable, and efficient server side solutions with Laravel, CodeIgniter, and MySQL to power your applications.",
      icon: <Server size={32} />,
    },
    {
      name: "Mobile Application Development",
      description:
        "Creating cross platform mobile apps with React Native and Android Studio (Java), ensuring smooth performance and intuitive design.",
      icon: <Smartphone size={32} />,
    },
    {
      name: "Wordpress Development",
      description:
        "Developing and customizing WordPress websites that are fast, SEO friendly, and tailored to meet business needs.",
      icon: <FaWordpress size={32} />,
    },
    {
      name: "UI/UX Design",
      description:
        "Crafting modern, engaging, and intuitive user experiences with Figma, focusing on usability and aesthetics.",
      icon: <Palette size={32} />,
    },
  ];
  return (
    <div className="py-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent">
          Services
        </h1>
        {/* Paragraph */}
        <p className="text-center text-[var(--text-color)] leading-relaxed text-sm md:text-lg">
          I offer a range of services to help businesses and individuals build
          modern, scalable, and visually appealing digital solutions. From
          full-stack web development to mobile apps and creative UI/UX design, I
          ensure quality and innovation in every project.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-lg shadow-xl border border-[var(--primary-color)]/20 flex flex-col  gap-2 p-3 rounded-2xl overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300 "
            >
              <div className="w-12 h-12 md:w-15 md:h-15 rounded-2xl border-2 border-[var(--primary-color)] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-lg md:text-2xl font-medium group-hover:text-[#66e5ff] transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-sm md:text-[16px] text-[var(--text-color)] leading-relaxed">
                {service.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

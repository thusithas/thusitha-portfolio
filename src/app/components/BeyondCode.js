import { BiLogoFigma } from "react-icons/bi";
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiShutterstock } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { MoveRight } from "lucide-react";

function BeyondCode() {
  const cards = [
    {
      title: "Stock Photography",
      description:
        "I capture and sell high-quality stock photos on Adobe Stock and Shutterstock, where my work has reached global audiences. My photography focuses on technology, lifestyle, and creative concepts.",

      platforms: [
        <Image
          src="/Images/logos/adobe stock.svg"
          width={20}
          height={20}
          alt="Adobe Stock"
        />,
        <SiShutterstock className="text-xl" />,
      ],
      link: "#",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive, user-centered digital experiences in Figma. I focus on blending functionality with aesthetics to create engaging interfaces.",

      platforms: [<BiLogoFigma className="text-xl" />],
      link: "#",
    },
    {
      title: "Graphic Design",
      description:
        "From brand identities to digital art. Skilled with Illustrator, Photoshop, and Canva, I bring ideas to life visually",

      platforms: [<SiAdobeillustrator className="text-xl" />, <SiAdobephotoshop className="text-xl" />, <SiCanva className="text-xl" />],
      link: "#",
    },
    {
      title: "Content Creation",
      description:
        "Through our channel, I share knowledge and creative tutorials, making technology and design accessible to a wider audience",

      platforms: [<FaYoutube className="text-xl" />],
      link: "#",
    },
  ];
  return (
    <div className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent">
          Featured Projects
        </h1>
        {/* Paragraph */}
        <p className="text-center text-[var(--text-color)] leading-relaxed text-sm md:text-lg">
          Exploring the intersection of technology and creativity through
          multiple disciplines
        </p>

        <div className="bg-[var(--secondary-color)]/10">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[var(--primary-color)]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-[var(--text-color)] leading-relaxed mb-5 flex-grow">
                  {card.description}
                </p>

                {/* Platforms */}
                <div className="flex gap-2 mb-5">
                  {card.platforms.map((platform, i) => (
                    <div key={i} className="bg-white/8 p-2 rounded-md">
                      {platform}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={card.link}
                  className="inline-flex items-center justify-center gap-2 bg-[var(--primary-color)]/30 hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] px-4 py-2 rounded-lg transition-colors duration-300 font-medium text-sm"
                >
                  Explore <MoveRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeyondCode;

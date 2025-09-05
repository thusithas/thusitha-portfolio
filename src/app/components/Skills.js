"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Skills() {
  const skillCards = [
    {
      name: "HTML",
      logo: "/images/logos/html.png",
      level: "80",
      category: "Languages",
    },
    {
      name: "CSS",
      logo: "/images/logos/css.png",
      level: "80",
      category: "Languages",
    },
    {
      name: "JavaScript",
      logo: "/images/logos/javascript.png",
      level: "70",
      category: "Languages",
    },
    {
      name: "PHP",
      logo: "/images/logos/php.png",
      level: "70",
      category: "Languages",
    },
    {
      name: "MySQL",
      logo: "/images/logos/Mysql.png",
      level: "70",
      category: "Databases",
    },
    {
      name: "Bootstrap",
      logo: "/images/logos/bootstrap.png",
      level: "70",
      category: "Frameworks & Libraries",
    },
    {
      name: "Tailwind CSS",
      logo: "/images/logos/tailwind.png",
      level: "75",
      category: "Frameworks & Libraries",
    },
    {
      name: "React",
      logo: "/images/logos/react.png",
      level: "75",
      category: "Frameworks & Libraries",
    },
    {
      name: "Next.JS",
      logo: "/images/logos/next js.png",
      level: "75",
      category: "Frameworks & Libraries",
    },
    {
      name: "Codeigniter",
      logo: "/images/logos/codeigniter.png",
      level: "75",
      category: "Frameworks & Libraries",
    },
    {
      name: "Laravel",
      logo: "/images/logos/laravel 2.png",
      level: "70",
      category: "Frameworks & Libraries",
    },
    {
      name: "Wordpress",
      logo: "/images/logos/wordpress.png",
      level: "70",
      category: "CMS",
    },
    {
      name: "Java",
      logo: "/images/logos/java 2.png",
      level: "65",
      category: "Languages",
    },
    {
      name: "C#",
      logo: "/images/logos/c sharp 2.png",
      level: "60",
      category: "Languages",
    },
    {
      name: "GitHub",
      logo: "/images/logos/Github black.png",
      level: "75",
      category: "Version Control",
    },
    {
      name: "Figma",
      logo: "/images/logos/figma.png",
      level: "75",
      category: "Design",
    },
    {
      name: "Illustrator",
      logo: "/images/logos/illustrator.png",
      level: "80",
      category: "Design",
    },
    {
      name: "Photoshop",
      logo: "/images/logos/photoshop 2.png",
      level: "80",
      category: "Design",
    },
    {
      name: "Android Studio",
      logo: "/images/logos/android studio.png",
      level: "65",
      category: "Other Tools",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Skills");
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Mobile
        setVisibleCount(6);
      } else if (window.innerWidth < 768) { // Tablet
        setVisibleCount(8);
      } else { // Desktop
        setVisibleCount(12);
      }
    };
      handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredCards =
    selectedCategory === "All Skills"
      ? skillCards
      : skillCards.filter((skill) => skill.category === selectedCategory);

  const categoryCounts = {
    "All Skills": skillCards.length,
  };

  const displayedCards = showAll ?
    filteredCards : filteredCards.slice(0, visibleCount);

  skillCards.forEach(skill => {
    if (!categoryCounts[skill.category]) {
      categoryCounts[skill.category] = 0;
    }
    categoryCounts[skill.category]++;
  });

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  return (
    <div id="skills" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent">
          Skills & Technologies
        </h1>
        {/* Paragraph */}
        <p className="text-center text-[var(--text-color)] leading-relaxed text-sm md:text-lg">
          a Comprehensive toolkit of technologies and frameworks that I used to
          bring ideas to life.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "All Skills",
            "Frameworks & Libraries",
            "Languages",
            "CMS",
            "Databases",
            "Design",
            "Version Control",
            "Other Tools",
          ].map((category, index) => (
            categoryCounts[category] > 0 &&
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm rounded-2xl border-2 transition 
                ${
                  selectedCategory === category
                    ? "bg-[var(--primary-color)] text-black border-[var(--primary-color)] text-[12px] md:text-[14px]"
                    : "bg-[var(--primary-color)]/10 border-[var(--primary-color)]/30 hover:bg-[var(--primary-color)]/30 text-[12px] md:text-[14px]"
                }`}
            >
              {category} ({categoryCounts[category] || 0})
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 mt-6">
          {displayedCards.map((skill, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-md shadow-lg border border-white/20 flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 p-3 md:p-5 rounded-2xl overflow-hidden group"
            >
              {/* Glass shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent">

              </div>
              {/* Logo */}
              <div className="relative w-10 h-10 md:w-16 md:h-16 z-10">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <p className="text-white text-sm md:text-lg font-semibold text-center z-10">{skill.name}</p>
              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2.5 z-10">
                <div
                  className="h-1.5 md:h-2.5 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              {/* Percentage  */}
              <span className="text-[var(--text-color)] text-sm md:text-lg">{skill.level}%</span>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredCards.length > visibleCount && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer px-6 py-2 bg-[var(--primary-color)] text-black rounded-full font-medium text-sm md:text-[16px] hover:bg-[var(--primary-color)]/90 transition-colors"
            >
              {showAll ? "Show Less" : `Show More (${filteredCards.length - visibleCount})`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;

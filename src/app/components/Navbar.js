"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#beyondCode", label: "Beyond Code" },
  ];

  useEffect(() => {
    const sections = [
      ...navItems.map((item) => document.querySelector(item.href)),
      document.querySelector("#contact"),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent font-bold"
          >
            Thusitha
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group px-1 transition duration-300 ${
                  activeSection === link.href.slice(1) && activeSection !== "contact"
                    ? "text-[var(--primary-color)]"
                    : "text-white hover:text-[var(--primary-color)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 ${
                    activeSection === link.href.slice(1) && activeSection !== "contact"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className={`font-semibold border-2 rounded-xl px-5 py-2.5 transition-all duration-300 ${
                activeSection === "contact"
                  ? "bg-[var(--primary-color)] text-[var(--secondary-color)] border-[var(--primary-color)]"
                  : "border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/10 backdrop-blur-md py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  activeSection === link.href.slice(1) && activeSection !== "contact"
                    ? "text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                    : "text-white hover:text-[var(--primary-color)]"
                } py-2`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Contact button */}
            <Link
              href="#contact"
              className={`transition-colors duration-300 font-semibold ${
                activeSection === "contact"
                  ? "text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                  : "text-white hover:text-[var(--primary-color)]"
              } py-2`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

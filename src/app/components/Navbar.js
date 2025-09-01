"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];
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
                className="relative group px-1 hover:text-[var(--primary-color)] transition duration-300"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div>
            <Link
              href="/contact"
              className="font-semibold border-2 border-[var(--primary-color)] rounded-xl px-5 py-2.5 hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-all duration-300"
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
                className="hover:text-[var(--primary-color)] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

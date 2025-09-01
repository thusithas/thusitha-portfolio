"use client";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="py-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Heading */}
        <h1 className="text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 -mt-10 md:-mt-10 lg:mt-0">
          {/* Left side */}
          <div className="flex-1">
            <p className="text-[var(--text-color)] leading-relaxed text-sm md:text-lg text-center lg:text-justify">
               I am Thusitha, a passionate and dedicated software developer with
              a strong focus on creating innovative web and mobile applications.
              With a background in computer science and years of experience in
              the industry, I have honed my skills in various programming
              languages and frameworks. My expertise lies in front-end and
              back-end development, UI/UX design, and mobile app development. I
              thrive in collaborative environments and enjoy working on projects
              that challenge me to think creatively and push the boundaries of
              technology. My goal is to deliver high-quality solutions that not
              only meet but exceed client expectations, while continuously
              learning and growing as a developer.
            </p>

            {/* <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#112240] p-4 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-cyan-400 font-semibold">Frontend</h3>
                <p className="text-gray-400 text-sm">React, Next.js, Vue</p>
              </div>
              <div className="bg-[#112240] p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-blue-400 font-semibold">Backend</h3>
                <p className="text-gray-400 text-sm">PHP, Laravel, Node.js</p>
              </div>
              <div className="bg-[#112240] p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="text-green-400 font-semibold">Mobile</h3>
                <p className="text-gray-400 text-sm">React Native, Flutter</p>
              </div>
              <div className="bg-[#112240] p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-purple-400 font-semibold">Design</h3>
                <p className="text-gray-400 text-sm">Figma, Adobe XD</p>
              </div>
            </div> */}
          </div>

          {/* Right side - ID Card */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md perspective-1000">
              {/* Card container */}
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-2 border-cyan-400/20 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:rotate-0 rotate-3 group">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile Image */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)] to-blue-500 rounded-full opacity-75 blur"></div>
                        <Image
                          src="/images/profile img.jpg"
                          alt="profile"
                          width={120}
                          height={120}
                          className="rounded-full relative z-10 object-cover border-4 border-[#1a1a2e]"
                        />
                      </div>

                      {/* QR code */}
                      <div className="mt-6 p-2 bg-white rounded-lg">
                        <Image
                          src="/images/about img.jpg"
                          alt="QR Code"
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Name and Title */}
                      <div className="text-center md:text-left">
                        <h2 className="text-[var(--primary-color)] text-2xl font-bold">
                          Thusitha Sampath
                        </h2>
                        <h3 className="text-[var(--text-color)] text-lg">
                          Full-Stack Developer
                        </h3>
                        <div className="w-full h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full my-2 mx-auto md:mx-0"></div>
                      </div>

                      {/* Contact */}
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone size={16} className="text-[var(--primary-color)]" />
                          <span className="text-[var(--text-color)] text-sm">
                            +94 76 123 4567
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={16} className="text-[var(--primary-color)]" />
                          <span className="text-[var(--text-color)] text-sm">
                            thusithas120@gmail.com
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Linkedin size={16} className="text-[var(--primary-color)]" />
                          <span className="text-[var(--text-color)] text-sm">
                            /in/thusitha-sampath
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Github size={16} className="text-[var(--primary-color)]" />
                          <span className="text-[var(--text-color)] text-sm">
                            @thusithas
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-[var(--primary-color)]" />
                          <span className="text-[var(--text-color)] text-sm">
                            Embilipitiya, Sri Lanka
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 w-full flex flex-wrap justify-center gap-2 p-4 border-t border-cyan-400/20">
                  <div className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-cyan-400/30">
                    React
                  </div>
                  <div className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-[var(--primary-color)]/30">
                    Next.Js
                  </div>
                  <div className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-[var(--primary-color)]/30">
                    Codeigniter
                  </div>
                  <div className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-[var(--primary-color)]/30">
                    Laravel
                  </div>
                  <div className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-[var(--primary-color)]/30">
                    Wordpress
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default About;

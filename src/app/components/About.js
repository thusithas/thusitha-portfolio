"use client";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";
import React from "react";
import { motion } from "framer-motion";
import animations from "./animation/variants";

function About() {
  return (
    <div id="about" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Heading */}
        <motion.h1
          variants={animations.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 -mt-10 md:-mt-10 lg:mt-0">
          {/* Left side */}
          <motion.div
            variants={animations.fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <motion.p
              variants={animations.staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[var(--text-color)] leading-relaxed text-sm md:text-lg text-center lg:text-justify"
            >
              I’m Thusitha Sampath, a passionate and detail-oriented aspiring
              full-stack web developer. I enjoy building clean, functional, and
              user-friendly applications while continuously learning new
              technologies and improving my skills. Over time, I’ve worked on
              projects ranging from web development to UI/UX design, with a
              focus on creating intuitive digital experiences. I’m motivated by
              problem-solving, teamwork, and the opportunity to turn ideas into
              real solutions. Outside of coding, I enjoy exploring the latest
              tech trends, sharing knowledge, and working on creative side
              projects that challenge me to grow both personally and
              professionally.
            </motion.p>

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
          </motion.div>

          {/* Right side - ID Card */}
          <motion.div
            variants={animations.fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-full max-w-md perspective-1000">
              {/* Card container */}
              <motion.div
                variants={animations.scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ rotate: 0, transition: { duration: 0.5 } }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-2 border-cyan-400/20 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:rotate-0 rotate-3 group"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile Image */}
                    <motion.div
                      variants={animations.fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)] to-blue-500 rounded-full opacity-75 blur"></div>
                        <Image
                          src="/images/Me3.png"
                          alt="profile"
                          width={120}
                          height={120}
                          className="rounded-full relative z-10 object-cover border-4 border-[#1a1a2e]"
                        />
                      </div>

                      {/* QR code */}
                      <motion.div
                        variants={animations.fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 p-2 bg-white rounded-lg"
                      >
                        <QRCodeCanvas
                          value="https://portfolio-thusitha.netlify.app/cv/Thusitha-Sampath-CV.pdf"
                          size={80}
                          bgColor="#ffffff"
                          fgColor="#000000"
                        />
                      </motion.div>
                    </motion.div>

                    <div className="flex-1">
                      {/* Name and Title */}
                      <motion.div
                        variants={animations.fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                      >
                        <h2 className="text-[var(--primary-color)] text-2xl font-bold">
                          Thusitha Sampath
                        </h2>
                        <h3 className="text-[var(--text-color)] text-lg">
                          Full-Stack Developer
                        </h3>
                        <div className="w-full h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full my-2 mx-auto md:mx-0"></div>
                      </motion.div>

                      {/* Contact */}
                      <motion.div
                        variants={animations.staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-4 space-y-2"
                      >
                        <motion.div
                          variants={animations.fadeInUp}
                          className="flex items-center gap-2"
                        >
                          <Phone
                            size={16}
                            className="text-[var(--primary-color)]"
                          />
                          <span className="text-[var(--text-color)] text-sm">
                            076 5608 702
                          </span>
                        </motion.div>
                        <motion.div
                          variants={animations.fadeInUp}
                          className="flex items-center gap-2"
                        >
                          <Mail
                            size={16}
                            className="text-[var(--primary-color)]"
                          />
                          <span className="text-[var(--text-color)] text-sm">
                            thusithas120@gmail.com
                          </span>
                        </motion.div>
                        <motion.div
                          variants={animations.fadeInUp}
                          className="flex items-center gap-2"
                        >
                          <Linkedin
                            size={16}
                            className="text-[var(--primary-color)]"
                          />
                          <span className="text-[var(--text-color)] text-sm">
                            /in/thusitha-sampath-2000ts
                          </span>
                        </motion.div>
                        <motion.div
                          variants={animations.fadeInUp}
                          className="flex items-center gap-2"
                        >
                          <Github
                            size={16}
                            className="text-[var(--primary-color)]"
                          />
                          <span className="text-[var(--text-color)] text-sm">
                            thusithas
                          </span>
                        </motion.div>
                        <motion.div
                          variants={animations.fadeInUp}
                          className="flex items-center gap-2"
                        >
                          <MapPin
                            size={16}
                            className="text-[var(--primary-color)]"
                          />
                          <span className="text-[var(--text-color)] text-sm">
                            Embilipitiya, Sri Lanka
                          </span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <motion.div
                  variants={animations.fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 w-full flex flex-wrap justify-center gap-2 p-4 border-t border-[var(--primary-color)]/20"
                >
                  <motion.div
                    variants={animations.fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-[var(--primary-color)]/30"
                  >
                    React
                  </motion.div>
                  <motion.div
                    variants={animations.fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-[var(--primary-color)]/30"
                  >
                    Next.Js
                  </motion.div>
                  <motion.div
                    variants={animations.fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-[var(--primary-color)]/30"
                  >
                    Codeigniter
                  </motion.div>
                  <motion.div
                    variants={animations.fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-[var(--primary-color)]/30"
                  >
                    Laravel
                  </motion.div>
                  <motion.div
                    variants={animations.fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-[var(--text-color)] bg-[var(--primary-color)]/10 text-center px-3 py-1 rounded-full text-xs border border-[var(--primary-color)]/30"
                  >
                    Wordpress
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;

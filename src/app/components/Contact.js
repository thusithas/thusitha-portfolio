"use client"
import React from 'react'
import { BiLogoBehance, BiLogoGithub, BiLogoLinkedin, BiLogoYoutube, BiLogoFacebook } from 'react-icons/bi'
import { IoMail, IoCall  } from "react-icons/io5";
import { motion } from "framer-motion";
import animations from "./animation/variants";

function Contact() {
    const icons = [
        {
            name: <BiLogoLinkedin /> ,
            link: "https://www.linkedin.com/in/thusitha-sampath-2000ts/"
        },
        {
            name: <BiLogoGithub /> ,
            link: "https://github.com/thusithas"
        },
        {
            name: <BiLogoYoutube /> ,
            link: "https://www.youtube.com/@Codrawgraphic"
        },
        {
            name: <BiLogoBehance /> ,
            link: "https://www.behance.net/thusithasampath6"
        },
        {
            name: <BiLogoFacebook /> ,
            link: ""
        },
    ]
    
  return (
    <div id="contact" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 items-center">

        {/* Heading */}
        <motion.h1
          variants={animations.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
          className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent"
        >
          Get In Touch
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
          Have a project in mind or want to collaborate? 
          <br />
          Let's talk.
        </motion.p>
        
        {/* Contact buttons container */}
        <motion.div
          variants={animations.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[var(--primary-color)]/10 flex gap-5 p-4 justify-center"
        >
            {icons.map((icon, index) => (
                <motion.a
                    variants={animations.scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    href={icon.link}
                    key={index}
                    target="_blank"
                    className="text-[var(--primary-color)] hover:bg-white hover:text-[var(--secondary-color)] p-2 text-[30px] rounded-full transition-colors duration-300"
                 >
                    {icon.name}
                </motion.a>
            ))}
        </motion.div>

        <motion.div 
          variants={animations.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center mx-auto space-y-3"
        >
            <motion.div 
              variants={animations.fadeInLeft}
              className="flex items-center gap-2"
            >
              <IoMail className="bg-white text-black p-1 text-[30px] rounded-md" /> 
              thusithas120@gmail.com
            </motion.div>
            
            <motion.div 
              variants={animations.fadeInRight}
              className="flex items-center gap-2"
            >
              <IoCall className="bg-white text-black p-1 text-[30px] rounded-md" /> 
              076 5608 702
            </motion.div>
        </motion.div>

        <motion.div 
          variants={animations.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
            <motion.a 
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                href="mailto:thusithas120@gmail.com" 
                className="border-2 hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] p-3 rounded-full"
            >
                Send Message
            </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
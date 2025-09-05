import React from 'react'
import { BiLogoBehance, BiLogoGithub, BiLogoLinkedin, BiLogoYoutube, BiLogoFacebook } from 'react-icons/bi'
import { IoMail, IoCall  } from "react-icons/io5";
function Contact() {
    const icons = [
        {
            name: <BiLogoLinkedin /> ,
            link: ""
        },
        {
            name: <BiLogoGithub /> ,
            link: ""
        },
        {
            name: <BiLogoYoutube /> ,
            link: ""
        },
        {
            name: <BiLogoBehance /> ,
            link: ""
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
        <h1 className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent">
          Get In Touch
        </h1>
        {/* Paragraph */}
        <p className="text-center text-[var(--text-color)] leading-relaxed text-sm md:text-lg">
          Have a project in mind or want to collaborate? 
          <br />
          Let's talk.
        </p>
        {/* Contact buttons container */}
        <div className="bg-[var(--primary-color)]/10 flex gap-5 p-4 justify-center">
            {icons.map((icon, index) => (
                <a 
                    href={icon.link}
                    key={index}
                    target="_blank"
                    className="text-[var(--primary-color)] hover:bg-white hover:text-[var(--secondary-color)] p-2 text-[30px] rounded-full transition-colors duration-300"
                 >
                    {icon.name}
                </a>
            ))}

        </div>

        <div className="flex flex-col justify-center mx-auto space-y-3 ">
            <div className="flex items-center gap-2"><IoMail className=" bg-white text-black p-1 text-[30px] rounded-md" /> thusithas120@gmail.com</div>
            <div className="flex items-center gap-2"><IoCall className=" bg-white text-black p-1 text-[30px] rounded-md" /> 076 5608 702</div>
        </div>

        <div className="flex justify-center">
            <a 
                href="mailto:thusithas120@gmail.com" 
                className="border-2 hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] p-3 rounded-full"
            >
                Send Message
            </a>
        </div>
      </div>
      
    </div>
  )
}

export default Contact

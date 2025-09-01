"use client";
import { Download, Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="py-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left side */}
        <div className="flex-1 text-center lg:text-left">
          <div className="overflow-hidden shadow-[-20px_0px_50px_10px_rgba(0,200,255,0.8)] rounded-full w-[200px] h-[200px] mx-auto my-15 lg:m-10 ">
            <Image
              src="/images/profile img.jpg"
              alt="myphoto"
              width={200}
              height={200}
              className="rounded-full mx-auto lg:mx-auto object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-5xl text-[var(--primary-color)] mt-4">
            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
              Hi, It's Thusitha
            </span>
          </h1>
          <h1 className="text-3xl md:text-5xl text-[var(--primary-color)]">
            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
              I'm a
            </span>{" "}
            Web Developer
          </h1>

          <p className="text-[var(--text-color)] mt-4 text-sm md:text-base">
            Passionate about building scalable web and{" "}
            <br className="hidden md:block" /> mobile applications, designing
            modern UI/UX, and <br className="hidden md:block" />
            creating visuals for global platforms.
          </p>
          <br />

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href=""
              className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 justify-center"
            >
              <Eye size={20} /> See My Work
            </a>
            <a
              href=""
              className="border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--primary-color)] flex items-center gap-2 hover:text-white transition-all duration-300 justify-center"
            >
              <Download size={20} /> Download CV
            </a>
          </div>
        </div>

        {/* Right side - Laptop with floating icons */}
        <div className="flex-1 flex justify-center lg:justify-end mt-15 md:mt-20 lg:mt-0">
          <div className="relative">
            {/* Floating Icons */}
            {/* Top Left - React */}
            <div className="absolute -top-12 left-5 md:top-10 md:-left-20 lg:-top-10 lg:-left-5 animate-float">
              <div className="bg-[#00D8FF]/20 border-[#00D8FF] border-2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-lg hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/react.png"
                  width={25}
                  height={25}
                  alt="React"
                  className="md:w-10 md:h-10"
                />
              </div>
            </div>

            {/* Top - WordPress */}
            <div className="absolute -top-12 left-70 transform -translate-x-1/2 md:top-10 md:left-130 lg:-top-20 lg:left-60 animate-float-delayed">
              <div className="bg-[#0073AA]/20 border-[#0073AA] border-2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-lg hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/wordpress.png"
                  width={25}
                  height={25}
                  alt="WordPress"
                  className="md:w-10 md:h-10"
                />
              </div>
            </div>

            {/* Left - CodeIgniter */}
            <div className="absolute top-35 -left-3 transform -translate-y-1/2 md:top-70 md:-left-20 lg:top-42 lg:-left-25 animate-float">
              <div className="bg-[#DD4814]/20 border-[#DD4814] border-2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-lg hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/codeigniter.png"
                  width={25}
                  height={25}
                  alt="CodeIgniter"
                  className="md:w-10 md:h-10"
                />
              </div>
            </div>

            {/* Bottom Left - Laravel */}
            <div className="absolute top-30 left-73 md:top-60 md:left-125 lg:top-80 lg:-left-5 animate-float-delayed">
              <div className="bg-[#FF2D20]/20 border-[#FF2D20] border-2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-lg hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/laravel.png"
                  width={40}
                  height={40}
                  alt="Laravel"
                  className="md:w-13 md:h-13 object-cover"
                />
              </div>
            </div>

            {/* Bottom - Figma */}
            <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 md:-bottom-25 lg:-bottom-30 animate-float">
              <div className="figma-bg border-[#A259FF] border-2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-lg hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/figma.png"
                  width={25}
                  height={25}
                  alt="Figma"
                  className="md:w-10 md:h-10"
                />
              </div>
            </div>

            {/* Laptop */}
            <div className="flex flex-col items-center">
              <div className="lap-frame bg-gray-300/80 w-60 h-38 md:w-96 md:h-60 lg:w-[400px] lg:h-[260px] rounded-t-2xl flex items-center justify-center">
                <div className="screen bg-gray-900 w-56 h-32 md:w-[350px] md:h-[200px] lg:w-90 lg:h-55 rounded-lg font-mono overflow-hidden">
                  {/* Code content*/}
                  <div className="text-cyan-400 mt-2 ml-2 md:ml-4 text-xs md:text-sm">
                    &lt;<span className="text-pink-500">div</span>{" "}
                    <span className="text-yellow-300">className</span>=
                    <span className="text-green-300">"portfolio"</span>&gt;
                  </div>
                  <div className="ml-4 md:ml-8 text-cyan-400 text-xs md:text-sm">
                    &lt;<span className="text-pink-500">h1</span>&gt;
                  </div>
                  <div className="ml-6 md:ml-12 text-gray-200/70 text-xs md:text-sm">
                    Welcome to My Portfolio
                  </div>
                  <div className="ml-4 md:ml-8 text-cyan-400 text-xs md:text-sm">
                    &lt;/<span className="text-pink-500">h1</span>&gt;
                  </div>

                  <div className="ml-4 md:ml-8 text-cyan-400 text-xs md:text-sm">
                    &lt;<span className="text-pink-500">p</span>&gt;
                  </div>
                  <div className="ml-6 md:ml-12 text-gray-200/70 text-xs md:text-sm">
                    Explore my work
                  </div>
                  <div className="ml-4 md:ml-8 text-cyan-400 text-xs md:text-sm">
                    &lt;/<span className="text-pink-500">p</span>&gt;
                  </div>

                  <div className="text-cyan-400 ml-2 md:ml-4 text-xs md:text-sm">
                    &lt;/<span className="text-pink-500">div</span>&gt;
                  </div>
                  <div className="inline-block w-1 h-3 md:h-4 bg-gray-300/70 animate-pulse ml-3 md:ml-5"></div>
                </div>
              </div>
              <div className="bg-gray-300/80 w-80 h-3 md:w-[480px] md:h-5 lg:w-[500px] mt-3 md:mt-5 rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
}

export default Hero;

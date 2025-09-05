import React from "react";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Associate Software Engineer",
      company: "JFS ICT Services (Pvt) Ltd",
      period: "2025 Feb - 2025 Aug",
      description:
        "Developing scalable web applications using React and Node.js. Leading UI/UX improvements that increased user engagement by 40%.",
      side: "left",
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "JFS ICT Services (Pvt) Ltd",
      period: "2024 Aug - 2025 Feb",
      description:
        "Developing scalable web applications using React and Node.js. Leading UI/UX improvements that increased user engagement by 40%.",
      side: "right",
    },
  ];
  return (
    <div id="experience" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-b [var(--primary-color)] to-[var(--primary-color)] bg-clip-text text-transparent">
          Featured Projects
        </h1>
        {/* Paragraph */}
        <p className="text-center text-[var(--text-color)] leading-relaxed text-sm md:text-lg"></p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] h-full rounded-full shadow-lg shadow-blue-500/30"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-center">
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[var(--primary-color)] to-blue-400 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50 z-10">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>

                {/* Experience Card */}
                <div
                  className={`w-full flex ${
                    exp.side === "left"
                      ? "justify-start pr-0 md:pr-8"
                      : "justify-end pl-0 md:pl-8"
                  }`}
                >
                  <div
                    className={`w-full max-w-md ${
                      exp.side === "left" ? "md:mr-8" : "md:ml-8"
                    } group`}
                  >
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-800/70">
                      {/* Connector Line to Dot */}
                      <div
                        className={`absolute top-8 ${
                          exp.side === "left"
                            ? "right-0 translate-x-full"
                            : "left-0 -translate-x-full"
                        } w-8 h-0.5 bg-gradient-to-r ${
                          exp.side === "left"
                            ? "from-slate-700/50 to-transparent"
                            : "from-transparent to-slate-700/50"
                        } group-hover:${
                          exp.side === "left"
                            ? "from-blue-400/50"
                            : "to-blue-400/50"
                        } transition-all duration-300`}
                      ></div>

                      {/* Card Content */}
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-lg md:text-xl font-bold text-[var(--primary-color)]">
                          {exp.title}
                        </h3>
                        <h4 className="text-[15px] md:text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                          {exp.company}
                        </h4>
                        <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-[12px] md:text-sm text-blue-300 font-medium">
                          {exp.period}
                        </div>
                        <p className="text-sm md:text-base text-[var(--text-color)] leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          {exp.description}
                        </p>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

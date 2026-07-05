import { cn } from "../../lib/util";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { fadeUp, staggerContainer, cardVariant, viewportOnce } from "../../lib/motion";
import PersonalPortfolio from "../../assets/personalPortfolio.png";
import BignnerPortfolio from "../../assets/levelBignner.png";

const projects = [
  {
    image: BignnerPortfolio,
    name: "Portfolio Website",
    des: "Developed a responsive portfolio website using HTML, CSS, and JavaScript to showcase my skills and projects. Focused on clean UI design, responsive layouts, and improving front-end development fundamentals.",
    link: "https://portfolio-fsvljeokc-thana9as-projects.vercel.app/",
    gitLink: "https://github.com/Thana9a/Portfolio",
  },
  {
    image: PersonalPortfolio,
    name: "React Personal Portfolio",
    des: "Built a dynamic portfolio web application using React.js to present personal projects and technical skills. Applied component-based architecture and modern UI design to create a responsive and interactive experience.",
    link: "",
    gitLink: "https://github.com/Thana9a/Thaiphanna-Portfolio",
  },
];

function Projects({ id }) {
  return (
    <motion.section
      id={id}
      className={cn("flex items-center justify-center px-4 py-24")}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white"
        >
          My <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariant}
              className={cn("card-hover w-80 dark:border-zinc-600 border")}
            >
              {/* Project image */}
              <div className="w-full h-48 rounded-t-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">
                  {project.des}
                </p>

                {/* Action buttons — wired to real links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("section-btn flex items-center gap-1.5")}
                  >
                    <Github size={14} />
                    Code
                  </a>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("primary-btn flex items-center gap-1.5")}
                    >
                      <ExternalLink size={14} />
                      Preview
                    </a>
                  ) : (
                    <button disabled className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-zinc-300 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-500 cursor-not-allowed">
                      Preview
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
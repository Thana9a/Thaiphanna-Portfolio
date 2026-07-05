import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { cn } from "../../lib/util";
import { Code2, MonitorSmartphone, FileCode } from "lucide-react";
import {
  fadeUp,
  fadeLeft,
  staggerContainer,
  cardVariant,
  viewportOnce,
} from "../../lib/motion";

const cards = [
  {
    icon: Code2,
    title: "Backend Development",
    body: "Building REST APIs and backend systems using Spring Boot with layered architecture — Repository pattern, Service layer, and DTO. Containerized with Docker and Nginx for deployment.",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    body: "Developing responsive web interfaces using React and Tailwind CSS. Comfortable building component-based UIs and deploying on Vercel.",
  },
  {
    icon: FileCode,
    title: "Clean & Maintainable Code",
    body: "Writing structured, readable code following best practices including separation of concerns, proper layering, and version control with Git and GitHub.",
  },
];

function About({ id, className }) {
  return (
    <motion.section
      id={id}
      className={cn(
        "flex items-center justify-center px-4 py-24",
        className,
      )}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-5xl w-full">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold md:text-4xl mb-12 text-center"
        >
          About <span className="text-gray-500">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: bio text */}
          <motion.div variants={fadeLeft} className="space-y-5">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
                Passionate about Backend Development
              </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I am a fourth-year Computer Science student at the Royal University
                  of Phnom Penh with a genuine interest in backend development. I have
                  built a Club Management System using Spring Boot, applying layered
                  architecture — Repository pattern, Service layer, DTO, and REST API —
                  containerized with Docker and Nginx.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I also have basic experience with Laravel and front-end development
                  using React and Tailwind CSS. I am continuously learning through
                  hands-on projects and seeking an internship to grow in a professional
                  environment.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Outside of coding, I enjoy playing badminton and exploring new
                  technologies in backend and DevOps.
                </p>
          </motion.div>

          {/* Right: highlight cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 gap-5"
          >
            {/* eslint-disable-next-line no-unused-vars */}
            {cards.map(({ icon: CardIcon, title, body }) => (
              <motion.div
                key={title}
                variants={cardVariant}
                className="p-6 card-hover"
              >
                <h4 className="inline-flex items-center gap-2 font-bold mb-2">
                  <CardIcon size={20} className="text-indigo-400 dark:text-indigo-400 shrink-0" />
                  {title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;


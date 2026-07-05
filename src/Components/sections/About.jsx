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
    title: "Front-End Development",
    body: "Building responsive and interactive web applications using React and modern JavaScript. I focus on creating smooth user experiences with clean structure and reusable components.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web Design",
    body: "Developing mobile-friendly and cross-device interfaces that adapt seamlessly to different screen sizes using modern CSS and Tailwind CSS.",
  },
  {
    icon: FileCode,
    title: "Clean & Maintainable Code",
    body: "Writing structured, readable, and scalable code while following best practices to ensure long-term maintainability and performance.",
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
              Passion for Web Development and Design
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a third-year Computer Science student at the Royal University
              of Phnom Penh with a strong foundation in front-end development. I
              enjoy building clean, responsive, and user-friendly web
              applications using React, JavaScript, and modern UI practices.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Currently, I am expanding my skills into back-end development. I
              am learning Python and preparing to work with Django, while also
              studying PHP and Laravel at university. My goal is to become a
              full-stack developer capable of building complete and scalable web
              applications.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am passionate about continuous learning and improving my
              technical skills through projects and hands-on practice.
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


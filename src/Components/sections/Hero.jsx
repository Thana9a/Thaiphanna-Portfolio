import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { m, useScroll, useTransform, LazyMotion, domAnimation } from "framer-motion";
import { CircleUser, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { cn } from "../../lib/util";
import { fadeUp, staggerContainer } from "../../lib/motion";
import heroimage from "../../assets/image.png";



export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Thana9a", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hong-thaiphanna", icon: Linkedin },
  { label: "Email", href: "mailto:thanapro70@gmail.com", icon: Mail },
];



function Hero({ id, className }) {
  const sectionRef = useRef(null);

  // Parallax: image moves up slightly as user scrolls past the hero
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={sectionRef}
        id={id}
        className={cn(
          "relative min-h-screen flex items-center justify-center px-4",
          "dark:bg-zinc-950",
          className,
        )}
      >
        {/* Main content — staggered entrance */}
        <m.div
          className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left text block */}
          <div className="text-center md:text-left">

            {/* Badge */}
            <m.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border mb-2.5 border-slate-500/60 px-4 py-1 text-slate-700 transition-colors hover:bg-slate-900/5 dark:border-gray-400/70 dark:text-gray-200 dark:hover:bg-white/5">
                <CircleUser size={16} />
                <span>Backend Developer</span>
              </div>
            </m.div>
            <m.div variants={fadeUp} className="mt-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="block md:inline bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Hong Thaiphanna
                </span>
              </h1>
              <p className="mt-4 max-w-xl mx-auto md:mx-0 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                I focus on building{" "}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  backend systems and REST APIs
                </span>{" "}
                using Spring Boot, Docker, and MySQL.
              </p>
            </m.div>

            {/* CTA buttons */}
            <m.div variants={fadeUp} className="flex mt-8 justify-center md:justify-start gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href="HongThaiphannaCV2.pdf"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors duration-200"
              >
                Resume
              </a>
            </m.div>

            {/* Social links */}
            <m.div variants={fadeUp} className="flex gap-1 mt-6 justify-center md:justify-start -ml-1.5">
              {/* eslint-disable-next-line no-unused-vars */}
              {SOCIAL_LINKS.map(({ label, href, icon: SocialIcon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                >
                  <SocialIcon size={18} />
                </a>
              ))}
            </m.div>
          </div>

          {/* Right: parallax image */}
          <m.div
            variants={fadeUp}
            className="flex justify-center md:justify-end"
          >
            <m.img
              style={{ y: imageY }}
              src={heroimage}
              alt="Hong Thaiphanna"
              className="w-64 sm:w-64 md:w-80 lg:w-96 rounded-2xl mx-auto shadow-xl dark:shadow-zinc-900/80 ring-1 ring-zinc-200 dark:ring-zinc-800"
            />
          </m.div>
        </m.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600">
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
          <m.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default Hero;
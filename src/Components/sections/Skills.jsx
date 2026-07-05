import { cn } from "../../lib/util";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardVariant, viewportOnce } from "../../lib/motion";

const skills = [
  // Frontend
  { name: "HTML / CSS",    level: 75, category: "Frontend"    }, 
  { name: "JavaScript",   level: 60, category: "Frontend"    }, 
  { name: "React",        level: 65, category: "Frontend"    }, 
  { name: "Bootstrap",    level: 80, category: "Frontend"    }, 
  { name: "Tailwind CSS", level: 75, category: "Frontend"    }, 

  // Backend
  { name: "PHP",          level: 35, category: "Backend"     }, 
  { name: "Laravel",      level: 30, category: "Backend"     }, 
  { name: "Spring Boot",  level: 38, category: "Backend"     }, 

  // Programming
  { name: "C / C++",      level: 55, category: "Programming" }, 
  { name: "Python",       level: 20, category: "Programming" }, 
  { name: "Java",         level: 65, category: "Programming" }, 
  { name: "C#",           level: 55, category: "Programming" },

  // Database
  { name: "SQL Server",   level: 45, category: "Database"    }, 
  { name: "MySQL",        level: 50, category: "Database"    }, 

  // Tools
  { name: "Docker",       level: 57, category: "Tools"       }, 
  { name: "Git / GitHub", level: 65, category: "Tools"       }, 
];

function Skills({ id }) {
  return (
    <motion.section
      id={id}
      className={cn("flex items-center justify-center px-4 py-24")}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="px-4">
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white"
          >
            My{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariant}
                className={cn(
                  "card-hover w-80 p-5 px-6 border-zinc-100 border dark:border-zinc-700",
                )}
              >
                {/* Name + percentage row */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold">{skill.name}</h3>
                  <span className="text-xs font-medium text-indigo-500 dark:text-indigo-400">
                    {skill.level}
                  </span>
                </div>

                {/* Progress bar track */}
                <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-1.5 overflow-hidden">
                  {/* Fill bar — this is the actual progress */}
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  />
                </div>

                {/* Category tag */}
                <div className="mt-2 text-right">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-medium">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;


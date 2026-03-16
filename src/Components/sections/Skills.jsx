import { cn } from "../../lib/util";
import React from "react";
import {} from "lucide-react";

function Skills({ id}) {
  const skills = [
    // Frontend
    { name: "HTML/CSS", level: 80, category: ["Frontend"] },
    { name: "JavaScript", level: 70, category: ["Frontend", "Programming"] },
    { name: "React", level: 70, category: ["Frontend"] },
    { name: "Bootstrap", level: 85, category: ["Frontend"] },
    { name: "Tailwind CSS", level: 80, category: ["Frontend"] },

    // Backend
    { name: "PHP", level: 30, category: ["Backend", "Programming"] },
    // { name: "Laravel", level: 25, category: ["Backend"] },
    { name: "Python", level: 25, category: ["Backend", "Programming"] },

    // Programming
    { name: "C/C++", level: 70, category: ["Programming"] },
    { name: "Java", level: 70, category: ["Programming"] },
    {
      name: "C#",
      level: 60,
      category: ["Programming", "Desktop"],
    },

    // Database
    // { name: "SQL", level: 50, category: ["Database"] },
    { name: "SQL Server", level: 50, category: ["Database"] },
    { name: "MySQL", level: 40, category: ["Database"] },
  ];
  return (
    <section
      id={id}
      className={cn("min-h-screen flex items-center justify-center px-4")}
    >
      {/* hello are you okay? */}
      <div className="px-4 py-20">
        <div className="Container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            My <span>skill</span>{" "}
          </h2>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 justify-center"}>
            {skills.map((skill) => (
              <div key={skill.name} className={cn("card-hover w-80 h-28 p-6 px-12 border-zinc-100 border-1 dark:border-zinc-700")}>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-600 rounded-full h-2.5 dark:bg-gray-500"
                     style={{ width: `${skill.level}%` }}>
                </div>
                {/*categoria*/}
                <div className=" flex flex-row text-sm font-medium justify-end">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

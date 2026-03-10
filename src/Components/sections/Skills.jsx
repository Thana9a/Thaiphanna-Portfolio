import { cn } from "../../lib/util";
import React from "react";

function Skills({ id, className }) {
  const skills = [
    // Frontend
    { name: "HTML/CSS", level: 80, category: ["Frontend"] },
    { name: "JavaScript", level: 70, category: ["Frontend", "Programming"] },
    { name: "React", level: 70, category: ["Frontend"] },
    { name: "Bootstrap", level: 85, category: ["Frontend"] },
    { name: "Tailwind CSS", level: 80, category: ["Frontend"] },

    // Backend
    { name: "PHP", level: 30, category: ["Backend", "Programming"] },
    { name: "Laravel", level: 25, category: ["Backend"] },
    { name: "Python", level: 25, category: ["Backend", "Programming"] },

    // Programming
    { name: "C/C++", level: 70, category: ["Programming"] },
    { name: "Java", level: 70, category: ["Programming"] },
    {
      name: "C# (Windows Forms)",
      level: 60,
      category: ["Programming", "Desktop"],
    },

    // Database
    { name: "SQL", level: 50, category: ["Database"] },
    { name: "SQL Server", level: 50, category: ["Database"] },
    { name: "MySQL", level: 40, category: ["Database"] },
  ];
  return (
    <section
      id={id}
      className={cn("min-h-screen flex items-center justify-center px-4")
      }
    >
      {/* hello are you okay? */}
      <div className="px-4 py-20">
        <div className="Container mx-auto max-w-5xl">
            <h2 className = "">My <span>skill</span> </h2>
        </div>
      </div>
    
    </section>
  );
}

export default Skills;

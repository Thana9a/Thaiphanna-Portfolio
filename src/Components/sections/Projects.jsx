import { cn } from "../../lib/util";
import React from "react";
import {} from "lucide-react"
import PersonalPortfolio from "../../assets/personalPortfolio.png";
import BignnerPortfolio from "../../assets/levelBignner.png";




function Projects({id}) {
    const projects = [
        {
            image: BignnerPortfolio,
            name: "Portfolio Website",
            des: "Developed a responsive portfolio website using HTML, CSS, and JavaScript to showcase my skills and projects. Focused on clean UI design, responsive layouts, and improving front-end development fundamentals.",
            link: "https://portfolio-fsvljeokc-thana9as-projects.vercel.app/",
            gitLink: "https://github.com/Thana9a/Portfolio"
        },
        {
            image: PersonalPortfolio,
            name: "React Personal Portfolio",
            des: "Built a dynamic portfolio web application using React.js to present personal projects and technical skills. Applied component-based architecture and modern UI design to create a responsive and interactive experience.",
            link: "",
            gitLink: "https://github.com/Thana9a/Thaiphanna-Portfolio"
        },
    ];
    return (
        <section id={id} className={cn("min-h-screen flex items-center justify-center px-4")}>
            <div className={"container mx-auto max-w-5xl"}>
                <h2 className={"text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white"}>My <span>Projects</span></h2>
                <div className={"grid grid-cols-1 md:grid-cols-2 justify-items-center"}>
                    {projects.map((project) => (
                        <div key={project.name} className={cn("card-hover w-80 h-5xl dark:border-zinc-600 border-1")}>
                            <div className={"w-full h-48 bg-gray-200 rounded-2xl mb-4"}>
                                <img src={project.image} alt={project.name} className={"w-full h-full object-cover rounded-t-xl"} />
                            </div>
                            <h3 className={"text-lg font-semibold mb-2 mx-2"}>{project.name}</h3>
                            <p className={"indent-5 mx-4 mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-3"}>{project.des}</p>
                            <div className={ "flex flex-end justify-center mb-4"}>
                                <button className={cn("section-btn mr-10 border-zinc-600 border-1")}>Project</button>
                                <button className={cn("primary-btn")}>Preview</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
export default Projects;
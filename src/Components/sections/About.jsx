import React from "react";
import { cn } from "../../lib/util";
import ImFarmer from "../../assets/I'mfarmer.jpg";
import {Code2, MonitorSmartphone, FileCode} from "lucide-react";

function About({ id, className }) {
  return (
    <section
      id={id}
      className={cn(
        "lg:gap-6 min-h-screen flex items-center justify-center px-4 py-20",
        className,
      )}
    >
      <div className="Container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold md:text-4xl mb-12 text-center">
          About <span className="text-gray-500 items-center">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="forground text-2xl font-semibold">
              Passionation for Web Development and Design
            </h3>
            <p className="forground">
                I am a third-year Computer Science student at the Royal University of Phnom Penh with a strong foundation in front-end development. I enjoy building clean, responsive, and user-friendly web applications using React, JavaScript, and modern UI practices
              products.
            </p>
              <p>
                  Currently, I am expanding my skills into back-end development. I am learning Python and preparing to work with Django, while also studying PHP and Laravel at university. My goal is to become a full-stack developer capable of building complete and scalable web applications.
              </p>
              <p>
                  I am passionate about continuous learning and improving my technical skills through projects and hands-on practice.
              </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <h4 className={"title inline-block font-bold"}> <Code2 size={24} className=" inline mr-2 text-gray-500 text-gray-400" />Front-End Development</h4>
                <p>Building responsive and interactive web applications using React and modern JavaScript. I focus on creating smooth user experiences with clean structure and reusable components.</p>
            </div>

            <div className="gradient-border p-6 card-hover">
                <h4 className={"inline-block font-bold"}> <MonitorSmartphone size={24} className="mr-2 inline text-gray-500 hover:text-gray-400" /> Responsive Web Design</h4>

                <p>Developing mobile-friendly and cross-device interfaces that adapt seamlessly to different screen sizes using modern CSS and Tailwind CSS.</p>
            </div>

            <div className="gradient-border p-6 card-hover ">
                <h4 className={"inline-block font-bold"}> <FileCode size={24} className={"inline mr-2 text-gray-500 hover:text-gray-400"}/>Clean & Maintainable Code</h4>
                <p>Writing structured, readable, and scalable code while following best practices to ensure long-term maintainability and performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

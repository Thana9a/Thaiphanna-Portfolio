    import React, { useEffect, useState } from "react";
    import { CircleUser, Github, Linkedin, Mail, MoveDown } from "lucide-react";
    import { cn } from "../../lib/util";
    import heroimage from "../../assets/image.png";

    const SOCIAL_LINKS = [
      { label: "GitHub",   href: "https://github.com/yourusername",      icon: Github   },
      { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
      { label: "Email",    href: "mailto:you@example.com",               icon: Mail     },
    ];

    function Hero({ id, className }) {
      const [visible, setVisible] = useState(true);

      useEffect(() => {
        function handleScroll() { setVisible(window.scrollY < 60); }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return (
        <section
          id={id}
          className={cn(
            "relative min-h-screen flex items-center justify-center px-4",
            "dark:bg-zinc-950",   // ← matches About
            className,
          )}
        >
          {/* Main content */}
          <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border mb-2.5 border-slate-500/60 px-4 py-1 text-slate-700 transition-colors hover:bg-slate-900/5 dark:border-gray-400/70 dark:text-gray-200 dark:hover:bg-white/5">
                <CircleUser size={16} />
                <span>Front-end Developer</span>
              </div>

              {/* Heading */}
              <div className="mt-6">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  Hi, I'm <span className="block md:inline">Hong Thaiphanna</span>
                </h1>
                <p className="mt-4 max-w-xl mx-auto md:mx-0 text-slate-500 dark:text-slate-400 text-lg">
                  I focus on creating clean, responsive,{" "}
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    user-friendly web interfaces
                  </span>{" "}
                  using modern front-end technologies.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex mt-6 justify-center md:justify-start gap-3">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors duration-200"
                >
                  Get in Touch
                </a>
                <a
                  href="/resume.pdf"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors duration-200"
                >
                  Resume
                </a>
              </div>

              {/* Social buttons */}
              <div className="flex gap-1 mt-6 justify-center md:justify-start -ml-1.5">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

            </div>

            {/* Right image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={heroimage}
                alt="hero"
                className="w-64 sm:w-64 md:w-80 lg:w-96 rounded-2xl mx-auto shadow-lg dark:shadow-zinc-900"
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={cn(
              "absolute bottom-8 left-1/2 -translate-x-1/2",
              "flex flex-col items-center gap-1",
              "text-slate-300 dark:text-slate-600",
              "transition-opacity duration-500",
              visible ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <MoveDown size={14} className="animate-bounce" />
          </div>

        </section>
      );
    }

    export default Hero;
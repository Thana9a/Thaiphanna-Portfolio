import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./Theme.jsx";
import { CONFIG } from "./NavConfig.js";
import "./Navbar.css";

function BrandIcon({ size = 28 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    );
}

export default function Nav() {
    const [scrolled,  setScrolled]  = useState(false);
    const [menuOpen,  setMenuOpen]  = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    const navRef       = useRef(null);
    const linkRefs     = useRef([]);
    const indicatorRef = useRef(null);
    const popupRef     = useRef(null);

    useEffect(() => {
        const root = document.documentElement.style;
        root.setProperty("--accent",      CONFIG.colors.accent);
        root.setProperty("--accent-glow", CONFIG.colors.accentGlow);
        root.setProperty("--nav-blur",    CONFIG.nav.blur);
        root.setProperty("--nav-radius",  CONFIG.nav.radius);
        root.setProperty("--nav-top",     CONFIG.nav.topOffset);
        root.setProperty("--nav-side",    CONFIG.nav.sideOffset);
        root.setProperty("--speed",       CONFIG.speed.transition);
        root.setProperty("--scroll-spd",  CONFIG.speed.scroll);
    }, []);

    useEffect(() => {
        const hero = document.getElementById(CONFIG.heroId);
        function handleScroll() {
            if (!hero) return;
            setScrolled(hero.getBoundingClientRect().bottom <= 0);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = CONFIG.links
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = sections.indexOf(entry.target);
                        if (idx !== -1) setActiveIdx(idx);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 768) return;
        const activeLink = linkRefs.current[activeIdx];
        const indicator  = indicatorRef.current;
        const navList    = activeLink?.closest("ul");
        if (!activeLink || !indicator || !navList) return;
        const listRect = navList.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        indicator.style.left   = linkRect.left   - listRect.left   + "px";
        indicator.style.top    = linkRect.top    - listRect.top    + "px";
        indicator.style.width  = linkRect.width  + "px";
        indicator.style.height = linkRect.height + "px";
    }, [activeIdx, scrolled]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) setMenuOpen(false);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function openMenu() {
        if (navRef.current && popupRef.current) {
            const navBottom = navRef.current.getBoundingClientRect().bottom;
            popupRef.current.style.top = navBottom + 8 + "px";
        }
        setMenuOpen(true);
    }

    function closeMenu() { setMenuOpen(false); }

    return (
        <>
            {/* ── Desktop navbar ── */}
            <nav
                ref={navRef}
                className={`glass-navbar ${scrolled ? "scrolled" : ""}`}
            >
                <div className="relative z-10 flex items-center justify-between px-8 py-[0.7rem]">

                    {/* Brand */}
                    <a
                        href={CONFIG.brand.href}
                        className="
              flex items-center gap-[10px] no-underline
              text-[1.15rem] font-bold tracking-[-0.02em]
              text-slate-800 dark:text-slate-200
              hover:opacity-80 transition-opacity duration-200
            "
                    >
                        <div className="flex text-[var(--accent)] [filter:drop-shadow(0_0_6px_var(--accent-glow))]">
                            <BrandIcon />
                        </div>
                        <span>{CONFIG.brand.name}</span>
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-[6px] list-none m-0 p-0 relative">
                        <div ref={indicatorRef} className="nav-indicator" />
                        {CONFIG.links.map((link, i) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    ref={(el) => (linkRefs.current[i] = el)}
                                    className={`nav-link ${activeIdx === i ? "active" : ""}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right side: CTA + hamburger + theme toggle */}
                    <div className="flex items-center gap-2">
                        {CONFIG.cta && (
                            <a href={CONFIG.cta.href} className="navbar-cta hidden md:inline-flex">
                                {CONFIG.cta.label}
                            </a>
                        )}

                        <button
                            className={`mobile-toggle md:hidden ${menuOpen ? "open" : ""}`}
                            onClick={() => (menuOpen ? closeMenu() : openMenu())}
                            aria-label="Toggle menu"
                        >
                            <span className="block w-[22px] h-[2px] rounded-sm bg-slate-800 dark:bg-slate-200 transition-transform duration-300" />
                            <span className="block w-[22px] h-[2px] rounded-sm bg-slate-800 dark:bg-slate-200 transition-opacity duration-300" />
                            <span className="block w-[22px] h-[2px] rounded-sm bg-slate-800 dark:bg-slate-200 transition-transform duration-300" />
                        </button>

                        <ThemeToggle />
                    </div>

                </div>
            </nav>

            {/* ── Mobile overlay ── */}
            <div
                onClick={closeMenu}
                className={`
          fixed inset-0 z-[1998]
          bg-black/20 dark:bg-black/40
          backdrop-blur-sm
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
            />

            {/* ── Mobile dropdown ── */}
            <div
                ref={popupRef}
                className={`
          fixed left-3 right-3 z-[1999] p-[6px] rounded-[22px]
          bg-white/80 dark:bg-white/5
          border border-black/10 dark:border-white/15
          shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          [backdrop-filter:blur(40px)_saturate(200%)]
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${menuOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }
        `}
            >
                {/* Popup brand row */}
                <div className="
          flex items-center gap-2
          px-[14px] py-[10px] mb-1
          border-b border-black/10 dark:border-white/[0.08]
          text-slate-700 dark:text-slate-200
          text-[0.88rem] font-bold tracking-[-0.01em] opacity-70
        ">
                    <div className="flex w-[22px] h-[22px] text-[var(--accent)]">
                        <BrandIcon size={22} />
                    </div>
                    <span>{CONFIG.brand.name}</span>
                </div>

                {/* Popup nav links */}
                <nav className="flex flex-col gap-[2px] mb-1">
                    {CONFIG.links.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className={`popup-link ${activeIdx === i ? "active" : ""}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Popup CTA */}
                {CONFIG.cta && (
                    <a href={CONFIG.cta.href} className="popup-cta">
                        {CONFIG.cta.label}
                    </a>
                )}
            </div>
        </>
    );
}
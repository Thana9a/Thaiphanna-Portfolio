// ============================================================
// ⚙️  CONFIG — Edit everything here only!
// ============================================================
export const CONFIG = {
  // Brand (logo text + link)
  brand: {
    name: "Phanna",
    href: "#home",
  },

  // Navigation links — add, remove, or rename freely
  links: [
    { label: "Home",     href: "#home"     },
    { label: "About",    href: "#about"    },
    { label: "Projects", href: "#projects" },
    { label: "Skills",   href: "#skills"   },
    { label: "Contact",  href: "#contact"  },
  ],

  // The section ID that triggers the "floating glass" scroll effect
  heroId: "home",

  // Accent color used for highlights and the active link indicator
  colors: {
    accent:     "#6366f1",
    accentGlow: "rgba(99, 102, 241, 0.4)",
  },

  // Navbar visual settings
  nav: {
    blur:       "18px",
    radius:     "999px",  // 999px = pill shape, 20px = rounded rect
    topOffset:  "1rem",   // distance from top of page when floating
    sideOffset: "2rem",   // distance from sides of page when floating
  },

  // Animation durations
  speed: {
    transition: "0.25s",
    scroll:     "0.45s",
  },
};
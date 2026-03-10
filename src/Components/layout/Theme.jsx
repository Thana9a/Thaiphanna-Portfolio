import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light",
  );

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color mode"
      className={`theme-toggle ${className}`.trim()}
    >
      {theme === "light" ? (
        <Moon className="text-blue-700" size={18} />
      ) : (
        <Sun className="text-yellow-700" size={18} />
      )}
    </button>
  );
}

export default ThemeToggle;

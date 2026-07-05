/**
 * A subtle gradient horizontal line used between page sections.
 * Fades in from transparent → zinc/indigo → transparent.
 */
export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="
        w-full max-w-4xl mx-auto
        h-px
        bg-gradient-to-r
          from-transparent
          via-zinc-300/60
          to-transparent
        dark:via-zinc-700/50
        my-0
      "
    />
  );
}

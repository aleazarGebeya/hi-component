const GREETING = "HI";

/**
 * The single display element of this interface: one greeting, centered,
 * rendered as the page's only accessible heading.
 */
export default function GreetingDisplay() {
  return (
    <section aria-label="Greeting" className="group relative z-10 px-4">
      <h1 className="select-none text-balance text-center text-[clamp(7rem,30vw,24rem)] font-semibold leading-[0.82] tracking-[-0.05em] text-zinc-950 transition-colors duration-500 group-hover:text-zinc-500 motion-safe:animate-[greet-in_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
        {GREETING}
      </h1>
    </section>
  );
}
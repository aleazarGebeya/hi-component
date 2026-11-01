import GreetingDisplay from "./components/GreetingDisplay";

function Crosshair({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute hidden -translate-x-1/2 -translate-y-1/2 md:block ${className}`}
    >
      <span className="absolute left-1/2 top-1/2 h-px w-2 -translate-x-1/2 -translate-y-1/2 bg-zinc-300" />
      <span className="absolute left-1/2 top-1/2 h-2 w-px -translate-x-1/2 -translate-y-1/2 bg-zinc-300" />
    </span>
  );
}

function App() {
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-zinc-50 p-4 text-zinc-950 antialiased sm:p-6 md:p-10">
      <div className="relative h-[calc(100dvh-2rem)] max-h-[900px] w-full max-w-[1400px] overflow-hidden rounded-2xl border border-zinc-200/90 bg-white sm:h-[calc(100dvh-3rem)] md:h-[calc(100dvh-5rem)]">
        {/* Editorial hairline grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px bg-zinc-200/90 md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px bg-zinc-200/90 md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px bg-zinc-200/90 md:block"
        />
        <Crosshair className="left-1/3 top-1/2" />
        <Crosshair className="left-2/3 top-1/2" />
        <Crosshair className="left-1/2 top-1/2" />

        {/* Micro labels */}
        <span className="pointer-events-none absolute left-5 top-5 hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 sm:block md:left-8 md:top-8">
          Greeting
        </span>
        <span className="pointer-events-none absolute bottom-5 right-5 hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 sm:block md:bottom-8 md:right-8">
          Single word
        </span>

        <div className="flex h-full w-full items-center justify-center">
          <GreetingDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
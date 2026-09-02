import { Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="max-w-[22ch] font-display text-[32px] font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl">
            The next generation of application development starts with the{" "}
            <span className="font-hand text-[0.95em] font-medium italic">compiler.</span>
          </h2>
          <p className="mt-6 max-w-[44ch] font-mono text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
            Build for the web. Build for native. Let Vesk handle the translation.
          </p>
          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
            <a href="#get-started" className="btn-solid px-6 py-3 text-sm sm:min-w-[10rem]">
              Get Started
            </a>
            <a href="#docs" className="btn-outline px-6 py-3 text-sm sm:min-w-[10rem]">
              Read the Docs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

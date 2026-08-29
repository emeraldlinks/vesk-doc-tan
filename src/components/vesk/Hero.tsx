import { motion } from "motion/react";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.2, 0, 0, 1] as const },
});

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 pt-12 pb-14 sm:px-8 sm:pt-20 sm:pb-20 lg:grid lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pt-24">
        <div>
          <motion.div
            {...rise(0)}
            className="mb-6 inline-flex items-center gap-2 border border-border px-2.5 py-1"
          >
            <span className="size-1.5 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              compiler-first framework · v0.4
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.06)}
            className="font-display text-[40px] font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Build once.
            <br />
            Compile <span className="font-hand text-[0.95em] font-medium italic">everywhere.</span>
          </motion.h1>

          <motion.p
            {...rise(0.12)}
            className="mt-6 max-w-[46ch] font-mono text-[13px] leading-relaxed text-muted-foreground text-pretty sm:text-sm"
          >
            Vesk is a compiler-first framework. Write one modern component model, and its compiler
            transforms your code into optimized web and native Kotlin applications — never a wrapped
            WebView.
          </motion.p>

          <motion.div {...rise(0.18)} className="mt-8 flex flex-col gap-2.5 sm:flex-row">
            <a
              id="get-started"
              href="#dx"
              className="btn-solid px-6 py-3 text-sm sm:min-w-[10rem]"
            >
              Get Started
            </a>
            <a href="#docs" className="btn-outline px-6 py-3 text-sm sm:min-w-[10rem]">
              Explore the Docs
            </a>
          </motion.div>
        </div>

        <motion.div {...rise(0.24)} className="mt-12 lg:mt-0">
          <div className="panel">
            <div className="border-b border-border px-3 py-1.5">
              <span className="eyebrow">compiler pipeline</span>
            </div>
            <div className="px-4 py-5 font-mono text-[13px] leading-tight">
              <PipeRow label="app.vsk" note="source" />
              <Arrow />
              <PipeRow label="vesk compiler" note="analyze · lower · emit" accent />
              <Arrow />
              <div className="grid grid-cols-2 gap-2 pl-3">
                <div className="border border-border px-3 py-2.5 text-center text-[12px]">web</div>
                <div className="border border-border px-3 py-2.5 text-center text-[12px]">
                  kotlin native
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-border px-3 py-2 font-mono text-[10px] text-muted-foreground">
              <span>build 412 ms</span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 bg-accent caret" /> stable
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PipeRow({
  label,
  note,
  accent,
}: {
  label: string;
  note: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 pl-3">
      <span className="flex items-center gap-2">
        <span className={accent ? "size-1.5 bg-accent" : "size-1.5 bg-foreground/60"} />
        <span className="text-foreground">{label}</span>
      </span>
      <span className="text-[11px] text-muted-foreground">{note}</span>
    </div>
  );
}

function Arrow() {
  return <div className="py-1.5 pl-3 text-muted-foreground/70">↓</div>;
}

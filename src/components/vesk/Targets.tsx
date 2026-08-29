import { Eyebrow, Heading, Lede, Reveal, Section } from "./primitives";

export function Targets() {
  return (
    <Section id="targets" tone="paper">
      <Reveal>
        <p className="eyebrow mb-5 flex items-center gap-2 text-paper-muted">
          <span className="text-accent">05</span>
          <span>web + native</span>
        </p>
        <Heading className="max-w-[26ch] text-paper-foreground">
          One development experience. Different targets.
        </Heading>
        <Lede className="mt-5 max-w-[50ch] text-paper-muted">
          Not "write once, run anywhere". Vesk preserves the semantics of your source application and
          emits output that is appropriate for each platform it targets.
        </Lede>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 border border-paper-foreground/25 bg-paper">
          <div className="border-b border-paper-foreground/20 px-3 py-1.5">
            <span className="eyebrow text-paper-muted">target graph</span>
          </div>
          <div className="px-4 py-8 sm:px-8 sm:py-12">
            <div className="mx-auto max-w-md font-mono text-[12px] text-paper-foreground">
              <div className="mx-auto w-fit border border-paper-foreground px-5 py-2 font-medium">
                vesk
              </div>
              <div className="mx-auto h-6 w-px bg-paper-foreground/40" />
              <div className="mx-auto grid w-full grid-cols-2">
                <div className="border-t border-r border-paper-foreground/40 h-6" />
                <div className="border-t border-paper-foreground/40 h-6" />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <Branch title="web" sub="web platform" note="DOM · CSS · ESM" />
                <Branch title="native" sub="kotlin" note="Compose · Material 3" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Branch({ title, sub, note }: { title: string; sub: string; note: string }) {
  return (
    <div className="text-center">
      <div className="border border-paper-foreground/40 px-3 py-2.5 font-medium">{title}</div>
      <div className="mx-auto h-5 w-px bg-paper-foreground/30" />
      <div className="border border-paper-foreground/20 px-3 py-2.5">{sub}</div>
      <p className="mt-2 text-[11px] text-paper-muted">{note}</p>
    </div>
  );
}

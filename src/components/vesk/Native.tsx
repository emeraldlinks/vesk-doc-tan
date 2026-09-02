import { Eyebrow, Heading, Lede, Reveal, Section } from "./primitives";

const capabilities = [
  "Android",
  "Native Kotlin",
  "Material 3",
  "Tailwind utilities",
  "Motion-style animation",
  "Native APIs",
  "Fast dev workflow",
];

const rows = [
  { name: "project-aurora", meta: "note · 2.1 kB" },
  { name: "todo-backlog", meta: "task · 1.3 kB" },
  { name: "meeting-notes", meta: "note · 1.8 kB" },
  { name: "field-log", meta: "note · 954 B" },
];

export function Native() {
  return (
    <Section id="native" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow index="03">vesk native</Eyebrow>
            <Heading className="max-w-[24ch]">
              Build native apps with the tools you already love.
            </Heading>
            <Lede className="mt-5 max-w-[46ch]">
              Write the same Vesk components you write for the web. Vesk Native compiles them toward
              Kotlin application targets — real native views, real platform APIs, Material 3
              defaults.
            </Lede>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-7 flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
            <a
              href="#docs"
              className="mt-7 inline-flex items-center gap-1.5 font-display text-sm font-medium underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
            >
              Explore Vesk Native <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="panel-strong p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
              <span className="uppercase tracking-[0.2em]">vesk native · preview</span>
              <span>360 × 740</span>
            </div>

            {/* Device frame drawn with borders — no imagery */}
            <div className="mx-auto w-[220px] border border-border-strong bg-background p-2 sm:w-[248px]">
              <div className="flex items-center justify-between border-b border-border pb-2 font-mono text-[9px] text-muted-foreground">
                <span>9:41</span>
                <span>▮▮▮</span>
              </div>
              <div className="pt-3">
                <p className="font-display text-sm font-semibold tracking-tight">Entries</p>
                <div className="mt-2 flex gap-3 border-b border-border pb-2 font-mono text-[9px]">
                  <span className="text-accent">All</span>
                  <span className="text-muted-foreground">Notes</span>
                  <span className="text-muted-foreground">Tasks</span>
                </div>
                <ul className="mt-1">
                  {rows.map((r) => (
                    <li
                      key={r.name}
                      className="flex items-center justify-between border-b border-border/60 py-2 font-mono text-[10px]"
                    >
                      <span className="text-foreground/85">{r.name}</span>
                      <span className="text-muted-foreground">{r.meta}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 grid grid-cols-3 border-t border-border pt-2 font-mono text-[9px]">
                  <span className="text-center text-accent">entries</span>
                  <span className="text-center text-muted-foreground">tags</span>
                  <span className="text-center text-muted-foreground">settings</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] text-muted-foreground">
              <span>Entries.vsk → Entries.kt</span>
              <span className="text-accent">compiled · 2.1 kB</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

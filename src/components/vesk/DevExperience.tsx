import { useEffect, useState } from "react";

import { Eyebrow, Heading, Lede, Reveal, Section } from "./primitives";

const lines = [
  { text: "$ npm create vesk@latest", kind: "cmd" },
  { text: "$ cd my-app", kind: "cmd" },
  { text: "$ npm run dev", kind: "cmd" },
  { text: "✓ Vesk compiler ready", kind: "ok" },
  { text: "✓ Development server started · :3000", kind: "ok" },
  { text: "✓ HMR enabled", kind: "ok" },
  { text: "✓ Application running", kind: "ok" },
  { text: "→ web target · kotlin target", kind: "note" },
] as const;

export function DevExperience() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setShown((n) => (n >= lines.length ? 0 : n + 1));
    }, 600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Section id="dx">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <Eyebrow index="07">developer experience</Eyebrow>
          <Heading className="max-w-[20ch]">The loop is the point.</Heading>
          <Lede className="mt-5 max-w-[42ch]">
            One command to start. Compiler diagnostics in the terminal, hot module replacement in the
            browser, and the same project compiling toward native without a second toolchain.
          </Lede>
          <div className="mt-7 grid gap-px border border-border bg-border font-mono text-[11px] sm:grid-cols-3">
            {[
              ["cold start", "412 ms"],
              ["hmr patch", "18 ms"],
              ["native build", "6.4 s"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background px-3 py-3">
                <div className="text-muted-foreground">{k}</div>
                <div className="mt-1 font-display text-base font-semibold tracking-tight">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel-strong">
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
              <span className="size-2 bg-border-strong" />
              <span className="size-2 bg-border-strong" />
              <span className="size-2 bg-accent" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">vesk — zsh</span>
            </div>
            <div className="min-h-[248px] px-4 py-4 font-mono text-[11.5px] leading-[1.9] sm:text-[12.5px]">
              {lines.slice(0, shown).map((l) => (
                <div
                  key={l.text}
                  className={
                    l.kind === "ok"
                      ? "text-accent"
                      : l.kind === "note"
                        ? "text-muted-foreground"
                        : "text-foreground/85"
                  }
                >
                  {l.text}
                </div>
              ))}
              <span className="caret inline-block h-3 w-1.5 bg-foreground/70 align-middle" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

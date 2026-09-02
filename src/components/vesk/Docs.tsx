import { Eyebrow, Heading, Lede, Reveal, Section } from "./primitives";

const nav = [
  "Getting Started",
  "Installation",
  "Core Concepts",
  "Components",
  "Styling",
  "Animations",
  "Vesk Native",
  "Compiler",
  "npm Packages",
  "API",
  "Deployment",
];

const ecosystem = [
  ["TypeScript", "typed logic"],
  ["Tailwind", "styling model"],
  ["npm", "packages"],
  ["Material 3", "native design"],
  ["Kotlin", "native target"],
  ["Motion", "animation model"],
];

export function Docs() {
  return (
    <Section id="docs" tone="paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow mb-5 flex items-center gap-2 text-paper-muted">
              <span className="text-accent">08</span>
              <span>documentation</span>
            </p>
            <Heading className="max-w-[22ch] text-paper-foreground">
              Documentation is part of the product.
            </Heading>
            <Lede className="mt-5 max-w-[44ch] text-paper-muted">
              Concepts first, then reference. Every compiler behaviour, diagnostic and native
              capability is written down — not inferred from example projects.
            </Lede>
            <a
              href="#get-started"
              className="mt-7 inline-flex items-center gap-1.5 border border-paper-foreground bg-paper-foreground px-5 py-3 font-display text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Read the Documentation <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="border border-paper-foreground/25">
            <div className="border-b border-paper-foreground/20 px-3 py-1.5">
              <span className="eyebrow text-paper-muted">docs / contents</span>
            </div>
            <ul className="font-mono text-[12.5px]">
              {nav.map((item, i) => (
                <li key={item} className="border-b border-paper-foreground/12 last:border-b-0">
                  <a
                    href="#docs"
                    className="flex items-center justify-between px-3 py-2.5 text-paper-foreground/80 transition-colors hover:bg-paper-foreground/5 hover:text-paper-foreground"
                  >
                    <span>{item}</span>
                    <span className="text-[10px] text-paper-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="mt-14 border-t border-paper-foreground/20 pt-8">
          <p className="eyebrow mb-5 text-paper-muted">ecosystem · built on what you know</p>
          <div className="grid gap-px bg-paper-foreground/15 sm:grid-cols-3 lg:grid-cols-6">
            {ecosystem.map(([name, role]) => (
              <div key={name} className="bg-paper px-3 py-4">
                <div className="font-display text-sm font-semibold tracking-tight text-paper-foreground">
                  {name}
                </div>
                <div className="mt-1 font-mono text-[11px] text-paper-muted">{role}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-[62ch] font-mono text-[12px] leading-relaxed text-paper-muted">
            Vesk is designed to work with technologies developers already understand rather than
            forcing an entirely foreign ecosystem.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

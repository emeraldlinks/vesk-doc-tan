import { Eyebrow, Heading, Reveal, Section } from "./primitives";

const phases = [
  {
    label: "Now",
    state: "in progress",
    items: ["Core compiler", "Vesk Native", "Developer tooling", "Documentation"],
  },
  {
    label: "Next",
    state: "planned",
    items: ["Improved HMR", "More native APIs", "Package ecosystem", "Build diagnostics"],
  },
  {
    label: "Future",
    state: "exploring",
    items: [
      "Additional platforms",
      "Advanced compiler optimizations",
      "Larger ecosystem",
      "Production-scale tooling",
    ],
  },
];

export function Roadmap() {
  return (
    <Section id="roadmap" tone="surface">
      <Reveal>
        <Eyebrow index="10">roadmap</Eyebrow>
        <Heading className="max-w-[24ch]">Ambitious, and honest about it.</Heading>
      </Reveal>

      <div className="mt-10 grid gap-px bg-border lg:grid-cols-3">
        {phases.map((phase, i) => (
          <Reveal key={phase.label} delay={i * 0.06}>
            <div className="h-full bg-background p-5 sm:p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-semibold tracking-tight">{phase.label}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {phase.state}
                </span>
              </div>
              <div className={`mt-4 h-px ${i === 0 ? "bg-accent" : "bg-border"}`} />
              <ul className="mt-4 font-mono text-[12px]">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-border/60 py-2.5 last:border-b-0"
                  >
                    <span className={i === 0 ? "text-accent" : "text-muted-foreground"}>
                      {i === 0 ? "●" : "○"}
                    </span>
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

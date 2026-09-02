import { Eyebrow, Heading, Reveal, Section } from "./primitives";

const projects = [
  {
    name: "Aurora Console",
    description: "Operations dashboard for a deployment platform, compiled to the web target.",
    platform: "Web",
    tech: "TypeScript · Tailwind",
    metric: "48 kB shipped",
  },
  {
    name: "Fieldbook",
    description: "Offline-first field notes app compiled toward native Kotlin with Material 3.",
    platform: "Android",
    tech: "Vesk Native · Kotlin",
    metric: "cold start 240 ms",
  },
  {
    name: "Signal Docs",
    description: "Documentation site sharing the same component library as its native companion.",
    platform: "Web + Native",
    tech: "One codebase",
    metric: "2 targets, 1 model",
  },
];

const community = [
  ["GitHub", "source, issues, RFCs"],
  ["Discord", "build in the open"],
  ["Examples", "starter projects"],
  ["Contributors", "compiler & tooling"],
];

export function Showcase() {
  return (
    <Section id="showcase">
      <Reveal>
        <Eyebrow index="09">showcase</Eyebrow>
        <Heading className="max-w-[24ch]">Built with Vesk.</Heading>
      </Reveal>

      <div className="mt-10 grid gap-3 lg:grid-cols-3 lg:gap-4">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <article className="panel-strong group flex h-full flex-col justify-between p-5 transition-colors hover:border-border-strong">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                  <span className="uppercase tracking-[0.18em]">{p.platform}</span>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 max-w-[34ch] font-mono text-[12px] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-3 font-mono text-[11px]">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>{p.tech}</span>
                  <span className="text-accent">{p.metric}</span>
                </div>
                <a
                  href="#showcase"
                  className="mt-3 inline-flex items-center gap-1.5 text-foreground underline decoration-border underline-offset-4 transition-colors group-hover:decoration-accent"
                >
                  View project <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <a href="#get-started" className="btn-outline mt-8 w-full px-6 py-3 text-sm sm:w-auto sm:min-w-[16rem]">
          Build something with Vesk
        </a>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mt-16 border-t border-border pt-8">
          <p className="eyebrow mb-5">community</p>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {community.map(([name, role]) => (
              <a key={name} href="#showcase" className="group bg-background px-4 py-5">
                <div className="font-display text-sm font-semibold tracking-tight">
                  {name} <span className="text-muted-foreground transition-colors group-hover:text-accent">→</span>
                </div>
                <div className="mt-1 font-mono text-[11px] text-muted-foreground">{role}</div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

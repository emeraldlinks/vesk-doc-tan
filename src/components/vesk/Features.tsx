import {
  Boxes,
  Cpu,
  FileCode2,
  Gauge,
  Package,
  Paintbrush,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";

import { Eyebrow, Heading, Reveal, Section } from "./primitives";

const features = [
  { icon: Cpu, title: "Compiler-first architecture", body: "Build-time guarantees over runtime cost." },
  { icon: FileCode2, title: ".vsk components", body: "Markup, styling and logic in one unit." },
  { icon: Boxes, title: "TypeScript", body: "Typed logic and typed component contracts." },
  { icon: Paintbrush, title: "Tailwind CSS", body: "The same utility model on web and native." },
  { icon: Smartphone, title: "Vesk Native", body: "Compile toward native Kotlin targets." },
  { icon: Sparkles, title: "Animation primitives", body: "Motion-style transitions, compiled." },
  { icon: RefreshCw, title: "Hot Module Replacement", body: "Sub-second feedback while you build." },
  { icon: Package, title: "npm compatibility", body: "Use the ecosystem you already depend on." },
  { icon: ShieldCheck, title: "Compile-time validation", body: "Unsupported semantics fail the build." },
  { icon: Gauge, title: "Production builds", body: "Optimized output per platform target." },
  { icon: Terminal, title: "Developer tooling", body: "CLI, diagnostics and build inspection." },
  { icon: Wrench, title: "Native APIs", body: "Platform capabilities without escape hatches." },
];

export function Features() {
  return (
    <Section id="features">
      <Reveal>
        <Eyebrow index="06">features</Eyebrow>
        <Heading className="max-w-[24ch]">What ships in the box.</Heading>
      </Reveal>

      <div className="mt-10 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.04}>
            <article className="h-full border-r border-b border-border p-5">
              <f.icon className="size-4 text-accent" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 font-display text-sm font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-1.5 font-mono text-[11.5px] leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

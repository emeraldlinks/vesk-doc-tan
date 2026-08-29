import nativeScreen from "@/assets/native-app-screen.jpg";

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

export function Native() {
  return (
    <Section id="native" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
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
            <div className="grid place-items-center bg-background/60 py-6">
              <div className="border border-border-strong p-1">
                <img
                  src={nativeScreen}
                  alt="A Vesk Native application running on Android, showing a dark entries list with Material 3 navigation"
                  loading="lazy"
                  width={640}
                  height={1024}
                  className="h-auto w-[200px] sm:w-[240px]"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] text-muted-foreground">
              <span>Entries.vsk → Entries.kt</span>
              <span className="text-accent">compiled · 2.1 kB</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

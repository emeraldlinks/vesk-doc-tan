import { useState } from "react";

import { Eyebrow, Heading, Lede, Reveal, Section } from "./primitives";

const stages = [
  {
    id: "source",
    name: "Vesk Source",
    detail: ".vsk components — markup, styling utilities and logic in one declarative unit.",
  },
  {
    id: "parser",
    name: "Parser",
    detail: "Source becomes a typed syntax tree. Structure, attributes and expressions are exact.",
  },
  {
    id: "semantic",
    name: "Semantic Analysis",
    detail:
      "Types, styling utilities and platform capabilities are resolved. Unsupported semantics are rejected here.",
  },
  {
    id: "compiler",
    name: "Vesk Compiler",
    detail: "Lowering and optimization: layout, state and effects become target-native constructs.",
  },
  {
    id: "platform",
    name: "Platform Code",
    detail: "Optimized web output or native Kotlin — emitted, not interpreted at runtime.",
  },
];

export function Architecture() {
  const [active, setActive] = useState(2);

  return (
    <Section id="architecture">
      <Reveal>
        <Eyebrow index="04">compiler architecture</Eyebrow>
        <Heading className="max-w-[24ch]">The compiler is the product.</Heading>
        <Lede className="mt-5 max-w-[48ch]">
          Five stages, no hidden runtime. Select a stage to see what happens to your code inside it.
        </Lede>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal>
          <ol className="border-t border-border">
            {stages.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id} className="border-b border-border">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-current={isActive}
                    className={`flex w-full items-center gap-4 px-3 py-4 text-left transition-colors ${
                      isActive ? "bg-surface" : "hover:bg-surface/60"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] ${isActive ? "text-accent" : "text-muted-foreground"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm font-medium tracking-tight">
                      {s.name}
                    </span>
                    <span
                      className={`ml-auto h-px flex-1 ${isActive ? "bg-accent" : "bg-border"}`}
                    />
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel-strong flex h-full flex-col justify-between">
            <div className="border-b border-border px-4 py-2">
              <span className="eyebrow">stage detail</span>
            </div>
            <div className="px-4 py-6 sm:px-6 sm:py-8">
              <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {stages[active]?.name}
              </h3>
              <p className="mt-3 max-w-[44ch] font-mono text-[12.5px] leading-relaxed text-muted-foreground">
                {stages[active]?.detail}
              </p>
            </div>
            <div className="border-t border-border px-4 py-3 font-mono text-[11px] text-muted-foreground">
              <div className="flex flex-wrap items-center gap-1.5">
                {stages.map((s, i) => (
                  <span key={s.id} className="flex items-center gap-1.5">
                    <span className={i === active ? "text-accent" : ""}>{s.id}</span>
                    {i < stages.length - 1 ? (
                      <span className="text-border-strong">→</span>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

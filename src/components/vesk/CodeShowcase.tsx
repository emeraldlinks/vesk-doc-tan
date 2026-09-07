import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { CodePanel, Eyebrow, Heading, Lede, Reveal, Section } from "./primitives";

const source = `component About {
  <div class="max-w-3xl mx-auto px-4 py-14">
    <h1 class="text-3xl font-semibold text-ink">About Vesk</h1>
    <p class="text-muted">Some text here.</p>
  </div>
}`;

const webOutput = `export function About() {
  const el = document.createElement("div")
  el.className = "max-w-3xl mx-auto px-4 py-14"
  el.append(
    h("h1", "text-3xl font-semibold text-ink", "About Vesk"),
    h("p", "text-muted", "Some text here."),
  )
  return el
}`;

const nativeOutput = `@Composable
fun About() {
  Column(modifier = Modifier.widthIn(max = 768.dp)
    .padding(horizontal = 16.dp, vertical = 56.dp)) {
    Text("About Vesk", style = Type.headlineSmall, color = Ink)
    Text("Some text here.", color = Muted)
  }
}`;

const stages = ["parse", "analyze", "emit"] as const;

export function CodeShowcase() {
  const [target, setTarget] = useState<"web" | "native">("native");
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setStage((s) => (s + 1) % (stages.length + 1)), 1100);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Section id="compiler" tone="surface">
      <Reveal>
        <Eyebrow index="01">write → understand → compile → ship</Eyebrow>
        <Heading>The compiler reads your intent.</Heading>
        <Lede className="mt-4 max-w-[52ch]">
          A <span className="text-foreground">.vsk</span> component is parsed, checked for semantics
          the target can honour, then lowered into platform code. Same source, two honest outputs.
        </Lede>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
        <Reveal className="min-w-0">
          <CodePanel filename="About.vsk" meta="source" code={source} />
        </Reveal>

        <Reveal className="min-w-0" delay={0.08}>
          <div className="panel-strong min-w-0 overflow-hidden">
            <div className="flex min-w-0 items-center justify-between border-b border-border px-3 py-1.5">
              <div className="flex min-w-0">
                {(["web", "native"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTarget(t)}
                    className={`shrink-0 px-3 py-1 font-mono text-[11px] transition-colors ${
                      target === t
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t === "web" ? "about.js" : "About.kt"}
                  </button>
                ))}
              </div>
              <span className="eyebrow shrink-0 text-[10px] text-accent">compiled</span>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.pre
                key={target}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
                className="min-w-0 max-w-full overflow-x-auto px-4 py-4 font-mono text-[11.5px] leading-[1.75] text-foreground/70 sm:text-[12.5px]"
              >
                <code>{target === "web" ? webOutput : nativeOutput}</code>
              </motion.pre>
            </AnimatePresence>
            <div className="flex min-w-0 items-center gap-3 border-t border-border px-3 py-2 font-mono text-[10px] text-muted-foreground">
              {stages.map((s, i) => (
                <span key={s} className={i < stage ? "text-accent" : ""}>
                  {i < stage ? "✓" : "·"} {s}
                </span>
              ))}
              <span className="ml-auto">{stage > stages.length - 1 ? "done · 3.1 ms" : "…"}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <p className="mt-6 max-w-[60ch] font-mono text-[12px] leading-relaxed text-muted-foreground">
          If Vesk cannot preserve the semantics of your component on a target, the build fails — it
          never silently ships different behaviour.
        </p>
      </Reveal>
    </Section>
  );
}

import { Eyebrow, Heading, Reveal, Section } from "./primitives";

const items = [
  {
    n: "01",
    title: "Compiler first",
    body: "Guarantees move from runtime to build time. Less shipped abstraction, more known-good output.",
  },
  {
    n: "02",
    title: "One development model",
    body: "A single component and styling model across targets — no per-platform rewrites of the same screen.",
  },
  {
    n: "03",
    title: "Native applications",
    body: "Vesk Native compiles toward native Kotlin rather than wrapping a web app inside a WebView.",
  },
  {
    n: "04",
    title: "Developer experience",
    body: "Modern tooling, fast feedback, HMR, Tailwind utilities, icons and motion primitives you already know.",
  },
  {
    n: "05",
    title: "Performance",
    body: "The compiler produces optimized platform output instead of carrying a runtime abstraction along.",
  },
  {
    n: "06",
    title: "Safety",
    body: "When semantics can't be preserved on a target, the compiler fails the build. Silence is the bug.",
  },
];

export function Philosophy() {
  return (
    <Section id="why">
      <Reveal>
        <Eyebrow index="02">the philosophy</Eyebrow>
        <Heading className="max-w-[26ch]">Why Vesk exists.</Heading>
      </Reveal>

      <div className="mt-10 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.n} delay={i * 0.04}>
            <article className="h-full border-b border-border px-0 py-6 sm:px-6 sm:[&:nth-child(odd)]:pl-0 lg:border-l lg:first:border-l-0">
              <span className="font-mono text-[11px] text-accent">{item.n}</span>
              <h3 className="mt-3 font-display text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[38ch] font-mono text-[12px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

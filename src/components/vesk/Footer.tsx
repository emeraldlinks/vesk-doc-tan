const columns = [
  {
    title: "Product",
    links: ["Vesk", "Vesk Native", "Compiler", "Features", "Showcase"],
  },
  {
    title: "Developers",
    links: ["Documentation", "Getting Started", "Examples", "API", "GitHub"],
  },
  {
    title: "Community",
    links: ["GitHub", "Discord", "Discussions", "Contributors"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center bg-foreground font-display text-[11px] font-bold text-background">
                V
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">vesk</span>
            </div>
            <p className="mt-4 max-w-[34ch] font-mono text-[11.5px] leading-relaxed text-muted-foreground">
              A unified, compiler-driven way to build modern applications. Vesk is an open,
              experimental developer platform under active development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow mb-3">{col.title}</p>
                <ul className="font-mono text-[12px]">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="block py-1 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-5 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Vesk · a compiler-first application framework</span>
          <span>compiler v0.4 · build stable</span>
        </div>
      </div>
    </footer>
  );
}

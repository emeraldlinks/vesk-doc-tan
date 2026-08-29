import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "compiler", href: "#compiler" },
  { label: "native", href: "#native" },
  { label: "features", href: "#features" },
  { label: "docs", href: "#docs" },
  { label: "showcase", href: "#showcase" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-6 place-items-center bg-foreground font-display text-[11px] font-bold text-background">
            V
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">vesk</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            compiler-first
          </span>
        </a>

        <nav className="hidden items-center gap-6 font-mono text-[11px] text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href="#get-started" className="btn-solid px-3 py-1.5 text-[11px]">
            Get Started
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-8 place-items-center border border-border md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-5 py-3 font-mono text-[12px] md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-2.5 text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#get-started"
            onClick={() => setOpen(false)}
            className="btn-solid mt-3 w-full px-3 py-2.5 text-[12px]"
          >
            Get Started
          </a>
        </nav>
      ) : null}
    </header>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { docGroups, docPages } from "@/content/docs";
import { cn } from "@/lib/utils";

export function DocsSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const [query, setQuery] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const match = (t: string) => t.toLowerCase().includes(q);
    return docGroups
      .map((group) => ({
        group,
        pages: docPages.filter(
          (p) => p.group === group && (!q || match(p.title) || match(p.description)),
        ),
      }))
      .filter((g) => g.pages.length > 0);
  }, [query]);

  return (
    <div className="flex h-full flex-col">
      <div className="relative border-b border-border">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search docs"
          aria-label="Search documentation"
          className="w-full bg-transparent px-9 py-3 font-mono text-[12px] text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {query ? (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setQuery("")}
            className="absolute right-2 top-1/2 grid size-6 -translate-y-1/2 place-items-center text-muted-foreground hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        ) : null}
      </div>

      <nav className="flex-1 overflow-y-auto py-5">
        {groups.length === 0 ? (
          <p className="px-4 font-mono text-[12px] text-muted-foreground">No pages match.</p>
        ) : null}
        {groups.map(({ group, pages }) => (
          <div key={group} className="mb-6 last:mb-0">
            <p className="eyebrow px-4 pb-2">{group}</p>
            <ul>
              {pages.map((p, i) => {
                const to = `/docs/${p.slug}`;
                const active = pathname === to;
                return (
                  <li key={p.slug}>
                    <Link
                      to="/docs/$slug"
                      params={{ slug: p.slug }}
                      onClick={onNavigate}
                      className={cn(
                        "flex items-center justify-between gap-2 border-l px-4 py-1.5 font-mono text-[12.5px] transition-colors",
                        active
                          ? "border-accent bg-surface/60 text-foreground"
                          : "border-transparent text-muted-foreground hover:border-border-strong hover:text-foreground",
                      )}
                    >
                      <span>{p.title}</span>
                      <span className="text-[10px] text-muted-foreground/70">
                        {String(docPages.indexOf(p) + 1).padStart(2, "0")}
                      </span>
                    </Link>
                    {i === pages.length - 1 ? null : null}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-border px-4 py-3">
        <Link to="/" onClick={onNavigate} className="font-mono text-[11px] text-muted-foreground hover:text-foreground">
          ← back to vesk.dev
        </Link>
      </div>
    </div>
  );
}

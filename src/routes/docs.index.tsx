import { Link, createFileRoute } from "@tanstack/react-router";

import { docGroups, docPages } from "@/content/docs";

const title = "Vesk Documentation — compiler-first framework reference";
const description =
  "Guides and reference for the Vesk compiler-first framework: installation, core concepts, styling, native Kotlin output, diagnostics and deployment.";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocsIndex,
});

function DocsIndex() {
  return (
    <div className="px-5 py-12 sm:px-10 sm:py-16">
      <p className="eyebrow mb-5">documentation</p>
      <h1 className="max-w-[24ch] font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">
        Everything the compiler does, written down.
      </h1>
      <p className="mt-5 max-w-[58ch] font-mono text-[13px] leading-relaxed text-muted-foreground">
        Start with the quickstart, then read concepts before reference. Every diagnostic, target
        behaviour and configuration option has a page.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/docs/$slug"
          params={{ slug: "getting-started" }}
          className="btn-solid px-5 py-3 font-display text-sm"
        >
          Quickstart
        </Link>
        <Link
          to="/docs/$slug"
          params={{ slug: "api" }}
          className="btn-outline px-5 py-3 font-display text-sm"
        >
          API reference
        </Link>
      </div>

      <div className="mt-14 space-y-10">
        {docGroups.map((group) => {
          const pages = docPages.filter((p) => p.group === group);
          if (pages.length === 0) return null;
          return (
            <section key={group}>
              <p className="eyebrow mb-4 border-b border-border pb-2">{group}</p>
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {pages.map((p) => (
                  <Link
                    key={p.slug}
                    to="/docs/$slug"
                    params={{ slug: p.slug }}
                    className="group bg-background p-5 transition-colors hover:bg-surface/60"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="font-display text-base font-semibold tracking-tight">
                        {p.title}
                      </h2>
                      <span className="font-mono text-[11px] text-muted-foreground transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-[12px] leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

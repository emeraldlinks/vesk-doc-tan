import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { DocsBlocks } from "@/components/vesk/docs/DocsBlocks";
import { DocsToc } from "@/components/vesk/docs/DocsToc";
import { getDoc, getNeighbours, headingId } from "@/content/docs";

export const Route = createFileRoute("/docs/$slug")({
  loader: ({ params }) => {
    const doc = getDoc(params.slug);
    if (!doc) throw notFound();
    return { doc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Page not found — Vesk Docs" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.doc.title} — Vesk Docs`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.doc.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.doc.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: DocNotFound,
  component: DocPageView,
});

function DocNotFound() {
  return (
    <div className="px-5 py-16 sm:px-10">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-2xl font-semibold tracking-tight">No such page</h1>
      <p className="mt-3 font-mono text-[13px] text-muted-foreground">
        That documentation page doesn't exist yet.
      </p>
      <Link to="/docs" className="btn-outline mt-6 px-4 py-2.5 font-mono text-[12px]">
        Docs index
      </Link>
    </div>
  );
}

function DocPageView() {
  const { doc } = Route.useLoaderData();
  const { prev, next } = getNeighbours(doc.slug);
  const toc = doc.blocks
    .filter((b): b is { kind: "h2"; text: string } => b.kind === "h2")
    .map((b) => ({ id: headingId(b.text), text: b.text }));

  return (
    <div className="grid gap-10 px-5 py-12 sm:px-10 sm:py-14 xl:grid-cols-[minmax(0,1fr)_180px]">
      <article className="min-w-0">
        <p className="eyebrow mb-4 flex items-center gap-2">
          <Link to="/docs" className="hover:text-foreground">
            docs
          </Link>
          <span aria-hidden>/</span>
          <span>{doc.group}</span>
        </p>
        <h1 className="max-w-[26ch] font-display text-2xl font-semibold leading-[1.1] tracking-tight sm:text-3xl">
          {doc.title}
        </h1>
        <p className="mt-4 max-w-[64ch] font-mono text-[13px] leading-relaxed text-muted-foreground">
          {doc.description}
        </p>

        <div className="mt-10">
          <DocsBlocks blocks={doc.blocks} />
        </div>

        <nav className="mt-14 grid gap-px border-t border-border bg-border sm:grid-cols-2">
          {prev ? (
            <Link
              to="/docs/$slug"
              params={{ slug: prev.slug }}
              className="bg-background px-4 py-4 transition-colors hover:bg-surface/60"
            >
              <span className="eyebrow">previous</span>
              <span className="mt-1 block font-display text-sm font-medium">← {prev.title}</span>
            </Link>
          ) : (
            <span className="bg-background" />
          )}
          {next ? (
            <Link
              to="/docs/$slug"
              params={{ slug: next.slug }}
              className="bg-background px-4 py-4 text-right transition-colors hover:bg-surface/60"
            >
              <span className="eyebrow">next</span>
              <span className="mt-1 block font-display text-sm font-medium">{next.title} →</span>
            </Link>
          ) : (
            <span className="bg-background" />
          )}
        </nav>
      </article>

      <DocsToc items={toc} />
    </div>
  );
}

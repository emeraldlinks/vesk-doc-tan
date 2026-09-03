import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { DocsSidebar } from "@/components/vesk/docs/DocsSidebar";

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
});

function DocsLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid size-6 place-items-center bg-foreground font-display text-[11px] font-bold text-background">
              V
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">vesk</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              docs
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/docs/$slug"
              params={{ slug: "getting-started" }}
              className="hidden font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              quickstart
            </Link>
            <Link to="/" className="btn-outline px-3 py-1.5 font-mono text-[11px]">
              vesk.dev
            </Link>
            <button
              type="button"
              aria-label={open ? "Close documentation menu" : "Open documentation menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-8 place-items-center border border-border lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="border-b border-border bg-background lg:hidden">
          <div className="max-h-[70vh] overflow-y-auto">
            <DocsSidebar onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}

      <div className="mx-auto flex w-full max-w-7xl">
        <div className="sticky top-[53px] hidden h-[calc(100vh-53px)] w-64 shrink-0 border-r border-border lg:block">
          <DocsSidebar />
        </div>
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

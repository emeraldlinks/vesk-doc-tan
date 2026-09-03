import { Check, Copy, Info, TriangleAlert } from "lucide-react";
import { useState } from "react";

import { CodePanel } from "@/components/vesk/primitives";
import type { Block } from "@/content/docs";
import { headingId } from "@/content/docs";
import { cn } from "@/lib/utils";

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label={copied ? "Copied" : "Copy code"}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1400);
        } catch {
          setCopied(false);
        }
      }}
      className="absolute right-2 top-1.5 z-10 grid size-7 place-items-center border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
    >
      {copied ? <Check className="size-3.5 text-accent" /> : <Copy className="size-3.5" />}
    </button>
  );
}

function CodeBlock({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="relative">
      <CopyButton code={code} />
      <CodePanel filename={filename} code={code} />
    </div>
  );
}

function Tabs({ tabs }: { tabs: { label: string; filename: string; code: string }[] }) {
  const [index, setIndex] = useState(0);
  const current = tabs[index] ?? tabs[0];
  if (!current) return null;
  return (
    <div>
      <div className="flex flex-wrap gap-px bg-border">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setIndex(i)}
            aria-pressed={i === index}
            className={cn(
              "px-3 py-2 font-mono text-[11.5px] transition-colors",
              i === index
                ? "bg-foreground text-background"
                : "bg-surface text-muted-foreground hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <CodeBlock filename={current.filename} code={current.code} />
    </div>
  );
}

export function DocsBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "h2":
            return (
              <h2
                key={i}
                id={headingId(block.text)}
                className="scroll-mt-24 border-t border-border pt-8 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p
                key={i}
                className="max-w-[70ch] font-mono text-[13px] leading-relaxed text-muted-foreground text-pretty"
              >
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="max-w-[70ch] space-y-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-mono text-[13px] leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-[7px] size-1 shrink-0 bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "note":
            return (
              <div
                key={i}
                className={cn(
                  "flex max-w-[70ch] gap-3 border-l-2 bg-surface/50 px-4 py-3",
                  block.tone === "warn" ? "border-accent" : "border-border-strong",
                )}
              >
                {block.tone === "warn" ? (
                  <TriangleAlert className="mt-0.5 size-4 shrink-0 text-accent" />
                ) : (
                  <Info className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                )}
                <p className="font-mono text-[12.5px] leading-relaxed text-foreground/80">
                  {block.text}
                </p>
              </div>
            );
          case "code":
            return <CodeBlock key={i} filename={block.filename} code={block.code} />;
          case "tabs":
            return <Tabs key={i} tabs={block.tabs} />;
          case "table":
            return (
              <div key={i} className="overflow-x-auto border border-border">
                <table className="w-full border-collapse font-mono text-[12px]">
                  <thead>
                    <tr className="border-b border-border bg-surface/60 text-left">
                      {block.head.map((h) => (
                        <th
                          key={h}
                          className="px-3 py-2 font-medium uppercase tracking-[0.14em] text-[10px] text-muted-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-b border-border/60 last:border-b-0">
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={cn(
                              "px-3 py-2 align-top",
                              c === 0 ? "text-foreground" : "text-muted-foreground",
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "dark",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "dark" | "surface" | "paper";
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-border",
        tone === "surface" && "bg-surface/40",
        tone === "paper" && "bg-paper text-paper-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="eyebrow mb-5 flex items-center gap-2">
      {index ? <span className="text-accent">{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}

export function Heading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-tight text-balance",
        Tag === "h2" ? "text-2xl leading-[1.05] sm:text-4xl" : "text-lg leading-tight",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-mono text-[13px] leading-relaxed text-muted-foreground text-pretty sm:text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
}

const TOKEN_RE =
  /("[^"\n]*")|(\b(?:component|return|fun|val|var|import|export|const|if|else)\b)|(<\/?[A-Za-z][\w.-]*|\/>|>)|(\b[A-Z][A-Za-z0-9]*\b)/g;

function highlight(code: string) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(code)) !== null) {
    if (match.index > last) nodes.push(code.slice(last, match.index));
    const [text, str, keyword, tag] = match;
    const className = str
      ? "text-accent"
      : keyword
        ? "text-foreground/95 font-medium"
        : tag
          ? "text-muted-foreground"
          : "text-foreground/80";
    nodes.push(
      <span key={key++} className={className}>
        {text}
      </span>,
    );
    last = match.index + text.length;
  }
  if (last < code.length) nodes.push(code.slice(last));
  return nodes;
}

export function CodePanel({
  filename,
  meta,
  code,
  muted = false,
  className,
}: {
  filename: string;
  meta?: string;
  code: string;
  muted?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("panel-strong", className)}>
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <span className="font-mono text-[11px] text-foreground/70">{filename}</span>
        {meta ? <span className="eyebrow text-[10px]">{meta}</span> : null}
      </div>
      <pre
        className={cn(
          "overflow-x-auto px-4 py-4 font-mono text-[11.5px] leading-[1.75] sm:text-[12.5px]",
          muted ? "text-foreground/55" : "text-foreground/85",
        )}
      >
        <code>{muted ? code : highlight(code)}</code>
      </pre>
    </div>
  );
}

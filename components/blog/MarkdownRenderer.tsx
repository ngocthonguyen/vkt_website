import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Lightweight markdown renderer supporting:
 * - H2 (##), H3 (###), H4 (####)
 * - Bold (**text**), italic (*text*)
 * - Unordered lists (- / *)
 * - Ordered lists (1.)
 * - Blockquotes (>)
 * - Tables (| a | b |)
 * - Inline links [text](url)
 * - Horizontal rules (---)
 * - Paragraphs
 */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  // Split by markdown syntax for inline elements
  const parts: ReactNode[] = [];
  let remaining = text;
  let i = 0;

  const regex =
    /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)|(`([^`]+)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(remaining)) !== null) {
    if (match.index > lastIndex) {
      parts.push(remaining.slice(lastIndex, match.index));
    }
    if (match[1]) {
      // Link
      const url = match[3];
      const label = match[2];
      const isExternal = url.startsWith("http");
      parts.push(
        isExternal ? (
          <a
            key={`${keyPrefix}-l-${i}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {label}
          </a>
        ) : (
          <Link
            key={`${keyPrefix}-l-${i}`}
            href={url}
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {label}
          </Link>
        )
      );
    } else if (match[4]) {
      parts.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-foreground">
          {match[5]}
        </strong>
      );
    } else if (match[6]) {
      parts.push(
        <code
          key={`${keyPrefix}-c-${i}`}
          className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono"
        >
          {match[7]}
        </code>
      );
    }
    i++;
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < remaining.length) {
    parts.push(remaining.slice(lastIndex));
  }
  return parts.length ? parts : [text];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function extractHeadings(
  md: string
): { level: 2 | 3; text: string; id: string }[] {
  const headings: { level: 2 | 3; text: string; id: string }[] = [];
  md.split("\n").forEach((line) => {
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    if (h2) headings.push({ level: 2, text: h2[1], id: slugify(h2[1]) });
    else if (h3) headings.push({ level: 3, text: h3[1], id: slugify(h3[1]) });
  });
  return headings;
}

export default function MarkdownRenderer({ content }: { content: string }) {
  // Normalize: ensure headings, hr, and list/quote starts are on their own blocks
  // by inserting blank lines around them when missing.
  const normalized = content
    // Blank line BEFORE heading / hr if previous line is non-empty
    .replace(/([^\n])\n(#{2,4}\s)/g, "$1\n\n$2")
    .replace(/([^\n])\n(---+\s*$)/gm, "$1\n\n$2")
    // Blank line AFTER heading line if next line is non-empty and not another heading
    .replace(/^(#{2,4}\s[^\n]+)\n(?!\n|#)/gm, "$1\n\n");

  const blocks = normalized.split(/\n\n+/);
  const rendered: ReactNode[] = [];

  blocks.forEach((block, bi) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    // Horizontal rule
    if (/^---+$/.test(trimmed)) {
      rendered.push(<hr key={bi} className="my-10 border-border" />);
      return;
    }

    // Headings
    const h2 = trimmed.match(/^##\s+(.+)$/);
    if (h2 && !trimmed.startsWith("###")) {
      const id = slugify(h2[1]);
      rendered.push(
        <h2
          id={id}
          key={bi}
          className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4"
        >
          {renderInline(h2[1], `${bi}`)}
        </h2>
      );
      return;
    }
    const h3 = trimmed.match(/^###\s+(.+)$/);
    if (h3) {
      const id = slugify(h3[1]);
      rendered.push(
        <h3
          id={id}
          key={bi}
          className="scroll-mt-24 text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3"
        >
          {renderInline(h3[1], `${bi}`)}
        </h3>
      );
      return;
    }
    const h4 = trimmed.match(/^####\s+(.+)$/);
    if (h4) {
      rendered.push(
        <h4 key={bi} className="text-lg font-semibold text-foreground mt-6 mb-2">
          {renderInline(h4[1], `${bi}`)}
        </h4>
      );
      return;
    }

    // Blockquote
    if (trimmed.startsWith(">")) {
      const text = trimmed.replace(/^>\s?/gm, "");
      rendered.push(
        <blockquote
          key={bi}
          className="border-l-4 border-primary bg-primary/5 pl-6 pr-4 py-3 my-6 rounded-r text-muted-foreground italic"
        >
          {renderInline(text, `${bi}`)}
        </blockquote>
      );
      return;
    }

    // Table
    if (trimmed.includes("\n|") || trimmed.startsWith("|")) {
      const lines = trimmed.split("\n").filter((l) => l.trim().startsWith("|"));
      if (lines.length >= 2) {
        const headerCells = lines[0]
          .split("|")
          .map((c) => c.trim())
          .filter((c) => c.length > 0);
        // lines[1] is separator
        const bodyRows = lines.slice(2).map((row) =>
          row
            .split("|")
            .map((c) => c.trim())
            .filter((c) => c.length > 0 || row.split("|").length > 2)
        );
        rendered.push(
          <div key={bi} className="my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  {headerCells.map((h, i) => (
                    <th
                      key={i}
                      className="text-left font-semibold text-foreground py-3 px-3"
                    >
                      {renderInline(h, `${bi}-h-${i}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border/50">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="py-3 px-3 text-muted-foreground align-top"
                      >
                        {renderInline(cell, `${bi}-${ri}-${ci}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        return;
      }
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed
        .split("\n")
        .filter((l) => /^\d+\.\s/.test(l.trim()))
        .map((l) => l.replace(/^\d+\.\s/, "").trim());
      rendered.push(
        <ol key={bi} className="list-decimal list-outside space-y-2 my-5 pl-6 text-muted-foreground">
          {items.map((item, i) => (
            <li key={i} className="leading-relaxed pl-1">
              {renderInline(item, `${bi}-${i}`)}
            </li>
          ))}
        </ol>
      );
      return;
    }

    // Unordered list
    if (/^[-*]\s/.test(trimmed)) {
      const items = trimmed
        .split("\n")
        .filter((l) => /^[-*]\s/.test(l.trim()))
        .map((l) => l.replace(/^[-*]\s/, "").trim());
      rendered.push(
        <ul key={bi} className="list-disc list-outside space-y-2 my-5 pl-6 text-muted-foreground marker:text-primary">
          {items.map((item, i) => (
            <li key={i} className="leading-relaxed pl-1">
              {renderInline(item, `${bi}-${i}`)}
            </li>
          ))}
        </ul>
      );
      return;
    }

    // Paragraph
    rendered.push(
      <p key={bi} className="text-base md:text-lg text-muted-foreground leading-[1.8] mb-5">
        {renderInline(trimmed, `${bi}`)}
      </p>
    );
  });

  return <div className="blog-content">{rendered}</div>;
}

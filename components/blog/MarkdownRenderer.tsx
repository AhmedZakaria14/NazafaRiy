import React from 'react';
import Link from 'next/link';

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  // Split into lines or blocks
  const lines = content.split('\n');
  const renderedElements: React.ReactNode[] = [];
  let inTable = false;
  let tableHeader: string[] = [];
  let tableRows: string[][] = [];
  let listItems: string[] = [];
  let isNumberedList = false;

  const flushList = () => {
    if (listItems.length > 0) {
      if (isNumberedList) {
        renderedElements.push(
          <ol
            key={`ol-${renderedElements.length}`}
            className="list-decimal list-inside space-y-2 my-4 text-gray-300 font-light pr-2"
          >
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ol>
        );
      } else {
        renderedElements.push(
          <ul
            key={`ul-${renderedElements.length}`}
            className="space-y-2.5 my-4 text-gray-300 font-light pr-2"
          >
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2.5 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ul>
        );
      }
      listItems = [];
      isNumberedList = false;
    }
  };

  const flushTable = () => {
    if (inTable && tableHeader.length > 0) {
      renderedElements.push(
        <div
          key={`table-${renderedElements.length}`}
          className="my-8 overflow-x-auto rounded-2xl border border-white/15 liquid-glass"
        >
          <table className="w-full text-right text-xs sm:text-sm">
            <thead className="bg-white/10 text-white font-medium border-b border-white/15">
              <tr>
                {tableHeader.map((th, idx) => (
                  <th key={idx} className="p-3.5 sm:p-4">
                    <span dangerouslySetInnerHTML={{ __html: formatInline(th.trim()) }} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-gray-300 font-light">
              {tableRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3.5 sm:p-4">
                      <span dangerouslySetInnerHTML={{ __html: formatInline(cell.trim()) }} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      inTable = false;
      tableHeader = [];
      tableRows = [];
    }
  };

  function formatInline(text: string): string {
    // Bold: **text**
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
    // Markdown link: [text](url)
    formatted = formatted.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-sky-300 hover:text-white underline underline-offset-4 decoration-sky-300/40 transition-colors">$1</a>'
    );
    // Code inline `code`
    formatted = formatted.replace(
      /`([^`]+)`/g,
      '<code class="px-1.5 py-0.5 rounded bg-white/10 text-amber-200 text-xs font-mono">$1</code>'
    );
    return formatted;
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      flushList();
      flushTable();
      continue;
    }

    // Markdown Table handling
    if (line.startsWith('|') && line.endsWith('|')) {
      flushList();
      const cells = line
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim());

      // If it's a separator line | :--- | :--- |
      if (cells.every((c) => /^:?-+:?$/.test(c))) {
        inTable = true;
        continue;
      }

      if (!inTable && tableHeader.length === 0) {
        tableHeader = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else {
      flushTable();
    }

    // Horizontal Rule ---
    if (line === '---' || line === '***') {
      flushList();
      renderedElements.push(
        <hr key={`hr-${i}`} className="my-10 border-t border-white/10" />
      );
      continue;
    }

    // H2 Heading: ## Title {#custom-id} or ## Title
    if (line.startsWith('## ')) {
      flushList();
      let headingText = line.replace('## ', '');
      let id = '';
      const idMatch = headingText.match(/\{#(.*?)\}/);
      if (idMatch) {
        id = idMatch[1];
        headingText = headingText.replace(/\{#(.*?)\}/, '').trim();
      } else {
        id = headingText.toLowerCase().replace(/[^\w\u0621-\u064A]+/g, '-');
      }

      renderedElements.push(
        <div key={`h2-wrap-${i}`} id={id} className="scroll-mt-28 pt-6 pb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-6 rounded-full bg-white/70" />
            <span dangerouslySetInnerHTML={{ __html: formatInline(headingText) }} />
          </h2>
        </div>
      );
      continue;
    }

    // H3 Heading: ### Title
    if (line.startsWith('### ')) {
      flushList();
      let headingText = line.replace('### ', '');
      let id = '';
      const idMatch = headingText.match(/\{#(.*?)\}/);
      if (idMatch) {
        id = idMatch[1];
        headingText = headingText.replace(/\{#(.*?)\}/, '').trim();
      }

      renderedElements.push(
        <div key={`h3-wrap-${i}`} id={id || undefined} className="scroll-mt-28 pt-4 pb-1">
          <h3 className="text-lg sm:text-xl font-medium text-gray-100">
            <span dangerouslySetInnerHTML={{ __html: formatInline(headingText) }} />
          </h3>
        </div>
      );
      continue;
    }

    // Numbered List (1. ...)
    if (/^\d+\.\s/.test(line)) {
      isNumberedList = true;
      listItems.push(line.replace(/^\d+\.\s/, ''));
      continue;
    }

    // Bullet List (- ... or * ...)
    if (line.startsWith('- ') || line.startsWith('* ')) {
      isNumberedList = false;
      listItems.push(line.substring(2));
      continue;
    }

    // Paragraph
    flushList();
    renderedElements.push(
      <p
        key={`p-${i}`}
        className="text-sm sm:text-base text-gray-300 font-light leading-relaxed my-3"
        dangerouslySetInnerHTML={{ __html: formatInline(line) }}
      />
    );
  }

  flushList();
  flushTable();

  return <div className="space-y-2">{renderedElements}</div>;
}

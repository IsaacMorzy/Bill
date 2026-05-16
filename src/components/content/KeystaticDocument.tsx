import Markdoc from '@markdoc/markdoc';
import type { Node } from '@markdoc/markdoc';
import React from 'react';

/**
 * Renders a Markdoc document node using @markdoc/markdoc.
 * Wraps the rendered React tree in a div with Tailwind typography prose classes.
 */
export default function KeystaticDocument({
  node,
}: {
  node: Node;
}) {
  const renderable = Markdoc.transform(node);
  const content = Markdoc.renderers.react(renderable, React);

  return (
    <div className="prose prose-lg max-w-none
      prose-headings:font-instrument-serif
      prose-a:text-[var(--theme-amber)] prose-a:no-underline hover:prose-a:underline
      prose-strong:text-[var(--theme-text)]
      prose-img:rounded-xl prose-img:shadow-lg
    ">
      {content}
    </div>
  );
}

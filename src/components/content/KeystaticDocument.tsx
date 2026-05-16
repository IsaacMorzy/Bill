import { DocumentRenderer, type DocumentRendererProps } from '@keystatic/core/renderer';

/**
 * Renders a Keystatic document using the built-in DocumentRenderer.
 * Wraps the document in a div with Tailwind typography prose classes for styling.
 */
export default function KeystaticDocument({
  document,
  renderers,
}: {
  document: DocumentRendererProps['document'];
  renderers?: DocumentRendererProps['renderers'];
}) {
  return (
    <div className="prose prose-lg prose-amber max-w-none
      prose-headings:font-instrument-serif prose-headings:text-amber-earth
      prose-a:text-amber-earth prose-a:no-underline hover:prose-a:underline
      prose-strong:text-[#101010] prose-code:text-amber-earth
      prose-img:rounded-xl prose-img:shadow-lg
    ">
      <DocumentRenderer document={document} renderers={renderers} />
    </div>
  );
}

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const proseClasses = {
  p: 'font-sans text-gray-700 leading-relaxed mb-4',
  h1: 'font-serif text-2xl font-semibold text-gray-900 mt-8 mb-3 first:mt-0',
  h2: 'font-serif text-xl font-semibold text-gray-900 mt-8 mb-3 border-b border-gray-200 pb-1',
  h3: 'font-serif text-lg font-semibold text-gray-900 mt-6 mb-2',
  h4: 'font-serif text-base font-semibold text-gray-900 mt-4 mb-2',
  h5: 'font-sans text-sm font-semibold text-gray-900 mt-4 mb-2 uppercase tracking-wide',
  h6: 'font-sans text-sm font-semibold text-gray-600 mt-3 mb-1',
  strong: 'font-semibold text-gray-800',
  em: 'italic',
  blockquote:
    'font-sans border-l-4 border-accent pl-4 py-1 my-4 text-gray-600 italic bg-gray-50/80 rounded-r',
  ul: 'list-disc list-inside mb-4 space-y-1 font-sans text-gray-700',
  ol: 'list-decimal list-inside mb-4 space-y-1 font-sans text-gray-700',
  li: 'leading-relaxed',
  a: 'text-accent hover:underline font-medium',
  code: 'font-mono text-sm bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded',
  pre: 'font-mono text-sm bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto mb-4',
  hr: 'border-t border-gray-200 my-6',
};

interface ArticleBodyProps {
  content: string;
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="article-body font-sans text-gray-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className={proseClasses.p}>{children}</p>,
          h1: ({ children }) => <h1 className={proseClasses.h1}>{children}</h1>,
          h2: ({ children }) => <h2 className={proseClasses.h2}>{children}</h2>,
          h3: ({ children }) => <h3 className={proseClasses.h3}>{children}</h3>,
          h4: ({ children }) => <h4 className={proseClasses.h4}>{children}</h4>,
          h5: ({ children }) => <h5 className={proseClasses.h5}>{children}</h5>,
          h6: ({ children }) => <h6 className={proseClasses.h6}>{children}</h6>,
          strong: ({ children }) => (
            <strong className={proseClasses.strong}>{children}</strong>
          ),
          em: ({ children }) => (
            <em className={proseClasses.em}>{children}</em>
          ),
          blockquote: ({ children }) => (
            <blockquote className={proseClasses.blockquote}>
              {children}
            </blockquote>
          ),
          hr: () => <hr className={proseClasses.hr} />,
          ul: ({ children }) => <ul className={proseClasses.ul}>{children}</ul>,
          ol: ({ children }) => <ol className={proseClasses.ol}>{children}</ol>,
          li: ({ children }) => <li className={proseClasses.li}>{children}</li>,
          a: ({ href, children }) => {
            const isInternal =
              href?.startsWith('/') && !href.startsWith('//');
            if (isInternal && href) {
              return (
                <Link href={href} className={proseClasses.a}>
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={proseClasses.a}
              >
                {children}
              </a>
            );
          },
          code: ({ className, children, ...props }) => {
            const isBlock = Boolean(className?.includes('language-'));
            if (isBlock) {
              return (
                <pre className={proseClasses.pre}>
                  <code className={className}>{children}</code>
                </pre>
              );
            }
            return (
              <code className={proseClasses.code} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => <>{children}</>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

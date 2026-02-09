import { calculateReadingMinutes, getAllArticleSlugs, getArticleBySlug } from '@/lib/articles';

import ArticleBody from '@/app/components/ArticleBody';
import ArticlePageLayout from '@/app/[post-slug]/ArticlePageLayout';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ 'post-slug': string }>;
}

// NOTE: this is used to generate the static pages for the articles
// TODO: remove this once we the backend returns the articles
export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ 'post-slug': slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { 'post-slug': slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Artículo no encontrado' };
  return {
    title: article.pageTitle,
    description: article.metaDescription,
    keywords: article.metaKeywords.split(',').map((k) => k.trim()),
    openGraph: {
      title: article.pageTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('es', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function PostPage({ params }: PageProps) {
  const { 'post-slug': slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <ArticlePageLayout>
      <div
        className="mx-auto max-w-2xl px-4 py-8 md:py-12"
        style={{
          background: `linear-gradient(to right, transparent 0px, var(--background) 21px, var(--background) calc(100% - 21px), transparent 100%)`,
        }}
      >
        <Link
          href="/"
          className="mb-8 inline-block text-gray-600 hover:text-gray-900 transition-colors font-sans text-sm"
        >
          ← Volver
        </Link>

        <header className="mb-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mt-2 font-sans text-lg text-gray-600">
              {article.subtitle}
            </p>
          )}
          <div className="mt-4 flex justify-center gap-x-4 gap-y-1 font-sans text-sm text-gray-500">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span>·</span>
            <span>{calculateReadingMinutes(article.wordCount)}</span>
          </div>
        </header>

        {article.coverImageUrl && (
          <div className="mx-auto mb-8 aspect-square relative w-full max-w-md overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={article.coverImageUrl}
              alt={article.coverImageAlt ?? article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 28rem"
              priority
            />
          </div>
        )}

        <ArticleBody content={article.body} />

        <footer className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-3">
          <div
            className={`relative size-12 rounded-full overflow-hidden shrink-0 ${
              slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 2 === 0
                ? 'bg-primary'
                : 'bg-accent-light'
            }`}
          >
            <Image
              src="/images/lean.png"
              alt=""
              fill
              className="object-cover"
              sizes="3rem"
            />
          </div>
          <div className="min-w-0">
            <p className="font-sans text-md font-medium text-gray-900">
              leancontinuo
            </p>
            <p className="font-sans text-sm text-gray-500">
              creador, tecnólogo, filósofo
            </p>
          </div>
        </footer>
      </div>
    </ArticlePageLayout>
  );
}

import { getAllArticleSlugs, getArticleBySlug } from '@/lib/articles';

import ArticleBody from '@/app/components/ArticleBody';
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
    <article className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
        <Link
          href="/"
          className="mb-8 inline-block text-gray-600 hover:text-gray-900 transition-colors font-sans text-sm"
        >
          ← Volver
        </Link>

        <header className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mt-2 font-sans text-lg text-gray-600">
              {article.subtitle}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm text-gray-500">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span>·</span>
            <span>{article.wordCount} palabras</span>
          </div>
        </header>

        {article.coverImageUrl && (
          <div className="mb-8 aspect-square relative w-full max-w-md overflow-hidden rounded-lg bg-gray-100">
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
      </div>
    </article>
  );
}

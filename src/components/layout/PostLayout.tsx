import type { ReactNode } from "react";
import Link from "next/link";
import type { Post, Heading } from "@/types/post";
import { formatDateTime } from "@/lib/date";
import TOC from "@/components/blog/TOC";
import TagBadge from "@/components/blog/TagBadge";
import CategoryBadge from "@/components/blog/CategoryBadge";
import SeriesNav from "@/components/blog/SeriesNav";

const PostLayout = ({
  post,
  headings,
  seriesPosts,
  children,
}: {
  post: Post;
  headings: Heading[];
  seriesPosts?: Post[];
  children: ReactNode;
}) => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <article>
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
          <Link href="/" className="transition-[color] duration-150 ease-out-expo hover:text-zinc-600 dark:hover:text-zinc-300">
            Home
          </Link>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <Link href="/blog" className="transition-[color] duration-150 ease-out-expo hover:text-zinc-600 dark:hover:text-zinc-300">
            Blog
          </Link>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <span className="truncate text-zinc-600 dark:text-zinc-400">{post.title}</span>
        </nav>

        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <CategoryBadge category={post.category} />
            <div className="flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <time className="tabular-nums" dateTime={post.date}>{formatDateTime(post.date)}</time>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readingTime}</span>
            </div>
          </div>
          <h1 className="mb-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            {post.summary}
          </p>
        </header>

        {post.series && seriesPosts && (
          <SeriesNav
            series={post.series}
            currentOrder={post.seriesOrder ?? 1}
            posts={seriesPosts}
          />
        )}

        <div className="lg:flex lg:gap-12">
          <div className="min-w-0 flex-1 prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-primary-400">
            {children}
          </div>
          <aside className="hidden w-60 shrink-0 lg:block">
            <TOC headings={headings} />
          </aside>
        </div>

        <footer className="mt-16 border-t border-zinc-200/60 pt-8 dark:border-zinc-800/60">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
};

export default PostLayout;

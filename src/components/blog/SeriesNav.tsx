import Link from "next/link";
import type { Post } from "@/types/post";

const SeriesNav = ({
  series,
  currentOrder,
  posts,
}: {
  series: string;
  currentOrder: number;
  posts: Post[];
}) => {
  return (
    <div className="my-8 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-50 to-white shadow-border dark:from-zinc-900 dark:to-zinc-950">
      <div className="border-b border-zinc-100 px-5 py-4 sm:px-6 dark:border-zinc-800/50">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          Series
        </p>
        <Link
          href={`/series/${encodeURIComponent(series)}`}
          className="text-balance text-base font-bold text-zinc-900 transition-colors duration-150 hover:text-primary-600 sm:text-lg dark:text-zinc-100 dark:hover:text-primary-400"
        >
          {series}
        </Link>
      </div>
      <ol className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
        {posts.map((post) => {
          const isCurrent = post.seriesOrder === currentOrder;
          return (
            <li key={post.slug}>
              {isCurrent ? (
                <div className="flex items-center gap-3 bg-primary-50/50 px-5 py-3 sm:px-6 dark:bg-primary-900/10">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold tabular-nums text-white dark:bg-primary-500">
                    {post.seriesOrder}
                  </span>
                  <span className="text-pretty text-sm font-semibold text-primary-700 dark:text-primary-400">
                    {post.title}
                  </span>
                </div>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-3 px-5 py-3 transition-[background-color] duration-150 ease-out-expo hover:bg-zinc-50 sm:px-6 dark:hover:bg-zinc-800/30"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold tabular-nums text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
                    {post.seriesOrder}
                  </span>
                  <span className="text-pretty text-sm text-zinc-600 dark:text-zinc-400">
                    {post.title}
                  </span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default SeriesNav;

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
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200/60 bg-gradient-to-br from-gray-50 to-white dark:border-gray-800/60 dark:from-gray-900 dark:to-gray-950">
      <div className="border-b border-gray-100 px-6 py-4 dark:border-gray-800/50">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          Series
        </p>
        <Link
          href={`/series/${encodeURIComponent(series)}`}
          className="text-lg font-bold text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
        >
          {series}
        </Link>
      </div>
      <ol className="divide-y divide-gray-100 dark:divide-gray-800/50">
        {posts.map((post) => {
          const isCurrent = post.seriesOrder === currentOrder;
          return (
            <li key={post.slug}>
              {isCurrent ? (
                <div className="flex items-center gap-3 bg-primary-50/50 px-6 py-3 dark:bg-primary-900/10">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white dark:bg-primary-500">
                    {post.seriesOrder}
                  </span>
                  <span className="text-sm font-semibold text-primary-700 dark:text-primary-400">
                    {post.title}
                  </span>
                </div>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-3 px-6 py-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/30"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                    {post.seriesOrder}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
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

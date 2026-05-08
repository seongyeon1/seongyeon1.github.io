import Link from "next/link";
import type { Post, Category } from "@/types/post";
import TagBadge from "./TagBadge";
import CategoryBadge from "./CategoryBadge";

const categoryGradients: Record<Category, string> = {
  study: "from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10",
  "paper-review": "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10",
  project: "from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10",
  tutorial: "from-orange-500/20 to-amber-500/20 dark:from-orange-500/10 dark:to-amber-500/10",
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-gray-200/60 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 dark:border-gray-800/60 dark:bg-gray-900 dark:hover:shadow-gray-950/50">
      {/* Gradient header strip */}
      <div className={`h-1.5 bg-gradient-to-r ${categoryGradients[post.category]}`} />

      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <CategoryBadge category={post.category} />
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            {post.date}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readingTime}
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="mb-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400">
            {post.title}
          </h2>
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {post.summary}
          </p>
        </Link>

        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
          {post.tags.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-400 dark:bg-gray-800 dark:text-gray-500">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;

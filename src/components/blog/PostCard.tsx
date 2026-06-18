import Link from "next/link";
import type { Post, Category } from "@/types/post";
import { formatDateShort, formatDateTime } from "@/lib/date";
import TagBadge from "./TagBadge";
import CategoryBadge from "./CategoryBadge";

const categoryGradients: Record<Category, string> = {
  concept: "from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10",
  guide: "from-orange-500/20 to-amber-500/20 dark:from-orange-500/10 dark:to-amber-500/10",
  "paper-review": "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10",
  project: "from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10",
  tool: "from-rose-500/20 to-red-500/20 dark:from-rose-500/10 dark:to-red-500/10",
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900">
      <div className={`h-1 bg-gradient-to-r sm:h-1.5 ${categoryGradients[post.category]}`} />

      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <CategoryBadge category={post.category} />
          <span className="h-[3px] w-[3px] rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="inline-flex items-center gap-1 text-[11px] tabular-nums text-zinc-400 sm:text-xs dark:text-zinc-500">
            <span className="sm:hidden">{formatDateShort(post.date)}</span>
            <span className="hidden sm:inline">{formatDateTime(post.date)}</span>
          </span>
          <span className="h-[3px] w-[3px] rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400 sm:text-xs dark:text-zinc-500">
            {post.readingTime}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="mb-2 text-balance text-[17px] font-bold leading-snug tracking-tight text-zinc-900 transition-colors group-hover:text-primary-600 sm:text-lg dark:text-zinc-100 dark:group-hover:text-primary-400">
            {post.title}
          </h2>
          <p className="mb-4 line-clamp-2 text-pretty text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {post.summary}
          </p>
        </Link>

        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
          {post.tags.length > 3 && (
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs tabular-nums text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;

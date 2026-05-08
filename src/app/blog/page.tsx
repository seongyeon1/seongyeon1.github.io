import { getAllPosts } from "@/lib/posts";
import { getTagList } from "@/lib/tags";
import PostCard from "@/components/blog/PostCard";
import TagBadge from "@/components/blog/TagBadge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "All blog posts",
};

const BlogPage = () => {
  const posts = getAllPosts();
  const tags = getTagList();

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          All Posts
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {posts.length} articles published
        </p>
      </div>

      {/* Tags */}
      <div className="mb-10 flex flex-wrap gap-2">
        {tags.map(({ tag, count }) => (
          <span key={tag} className="flex items-center gap-1">
            <TagBadge tag={tag} />
            <span className="text-xs text-gray-300 dark:text-gray-600">
              {count}
            </span>
          </span>
        ))}
      </div>

      {/* Post List */}
      <div className="grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
            <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            No posts yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;

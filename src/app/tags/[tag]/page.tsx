import { getAllTags } from "@/lib/tags";
import { getPostsByTag } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ tag: string }>;
};

export const generateStaticParams = () => {
  const tags = getAllTags();
  return Array.from(tags.keys()).map((tag) => ({ tag }));
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `#${decoded}`,
    description: `Posts tagged with ${decoded}`,
  };
};

const TagPage = async ({ params }: Props) => {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getPostsByTag(decoded);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-10">
        <h1 className="mb-2 text-balance text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-300">
            #
          </span>
          {decoded}
        </h1>
        <p className="text-pretty text-zinc-500 dark:text-zinc-400">
          <span className="tabular-nums">{posts.length}</span> {posts.length === 1 ? "post" : "posts"} tagged
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TagPage;

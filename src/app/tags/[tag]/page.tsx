import { getAllTags } from "@/lib/tags";
import { getPostsByTag } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ tag: string }>;
};

export const generateStaticParams = () => {
  const tags = getAllTags();
  // Same dev/build split as /series/[name]: `next build` (output: export)
  // decodes the param when creating the directory, but `next dev` matches the
  // URL segment verbatim — so any tag with a space or non-ASCII char 500s in
  // dev unless returned pre-encoded. `TagPage`/`generateMetadata` decode it.
  const encodeForDev = process.env.NODE_ENV !== "production";
  return Array.from(tags.keys()).map((tag) => ({
    tag: encodeForDev ? encodeURIComponent(tag) : tag,
  }));
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
    <div className="mx-auto max-w-5xl px-5 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="mb-8 sm:mb-10">
        <h1 className="mb-2 text-balance text-[26px] font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-300">
            #
          </span>
          {decoded}
        </h1>
        <p className="text-pretty text-zinc-500 dark:text-zinc-400">
          <span className="tabular-nums">{posts.length}</span> {posts.length === 1 ? "post" : "posts"} tagged
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TagPage;

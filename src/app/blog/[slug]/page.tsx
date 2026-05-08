import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostsBySeries } from "@/lib/posts";
import { renderMDX } from "@/lib/mdx";
import PostLayout from "@/components/layout/PostLayout";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
  return getAllPosts().map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
};

const PostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content, headings } = await renderMDX(post.content);
  const seriesPosts = post.series ? getPostsBySeries(post.series) : undefined;

  return (
    <>
      {post.math && (
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          crossOrigin="anonymous"
        />
      )}
      <PostLayout post={post} headings={headings} seriesPosts={seriesPosts}>
        {content}
      </PostLayout>
    </>
  );
};

export default PostPage;

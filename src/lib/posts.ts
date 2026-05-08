import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, Frontmatter } from "@/types/post";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

const getPostFiles = (): string[] => {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"));
};

const parsePost = (filename: string): Post => {
  const filePath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as Frontmatter;
  const slug = filename.replace(/\.mdx$/, "");

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: readingTime(content).text,
  };
};

export const getAllPosts = (): Post[] => {
  const isProduction = process.env.NODE_ENV === "production";
  return getPostFiles()
    .map(parsePost)
    .filter((post) => !(isProduction && post.draft))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): Post | undefined => {
  const filename = `${slug}.mdx`;
  const filePath = path.join(POSTS_DIR, filename);
  if (!fs.existsSync(filePath)) return undefined;
  return parsePost(filename);
};

export const getPostsBySeries = (series: string): Post[] => {
  return getAllPosts()
    .filter((post) => post.series === series)
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));
};

export const getPostsByTag = (tag: string): Post[] => {
  return getAllPosts().filter((post) => post.tags.includes(tag));
};

export const getPostsByCategory = (category: string): Post[] => {
  return getAllPosts().filter((post) => post.category === category);
};

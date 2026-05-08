import { getAllPosts } from "./posts";
import type { Post } from "@/types/post";

export type SeriesInfo = {
  name: string;
  posts: Post[];
  totalCount: number;
};

export const getAllSeries = (): SeriesInfo[] => {
  const seriesMap = new Map<string, Post[]>();

  for (const post of getAllPosts()) {
    if (post.series) {
      const posts = seriesMap.get(post.series) ?? [];
      posts.push(post);
      seriesMap.set(post.series, posts);
    }
  }

  return Array.from(seriesMap.entries()).map(([name, posts]) => ({
    name,
    posts: posts.sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0)),
    totalCount: posts.length,
  }));
};

export const getSeriesByName = (name: string): SeriesInfo | undefined => {
  return getAllSeries().find((s) => s.name === name);
};

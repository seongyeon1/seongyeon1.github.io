import { getAllPosts } from "./posts";

export const getAllTags = (): Map<string, number> => {
  const tags = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      tags.set(tag, (tags.get(tag) ?? 0) + 1);
    }
  }
  return tags;
};

export const getTagList = (): { tag: string; count: number }[] => {
  const tags = getAllTags();
  return Array.from(tags.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
};

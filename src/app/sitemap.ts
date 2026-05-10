import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { getAllSeries } from "@/lib/series";
import { getTagList } from "@/lib/tags";
import { SITE_URL } from "@/lib/site";

// Static export: emitted as a plain sitemap.xml at build time.
export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => {
  const posts = getAllPosts();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/series/`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/tags/`, lastModified: now, changeFrequency: "weekly", priority: 0.4 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const seriesRoutes: MetadataRoute.Sitemap = getAllSeries().map((s) => ({
    url: `${SITE_URL}/series/${encodeURIComponent(s.name)}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const tagRoutes: MetadataRoute.Sitemap = getTagList().map((t) => ({
    url: `${SITE_URL}/tags/${encodeURIComponent(t.tag)}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.3,
  }));

  return [...staticRoutes, ...postRoutes, ...seriesRoutes, ...tagRoutes];
};

export default sitemap;

#!/usr/bin/env node
// RSS 2.0 피드 생성기 — 빌드 시 public/rss.xml 작성

import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const SITE_URL = "https://seongyeon1.github.io";
const SITE_TITLE = "AI Tech Blog";
const SITE_DESC = "AI 공부기록, 논문 리뷰, 프로젝트 후기를 담는 기술 블로그";
const POSTS_DIR = "content/posts";
const OUT = "public/rss.xml";

// Bare "YYYY-MM-DD" dates are KST midnight; ISO with explicit time uses its own offset.
const parsePostDate = (d) => {
  if (/T\d/.test(d)) return new Date(d).getTime();
  return new Date(`${d}T00:00:00+09:00`).getTime();
};

const escape = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const main = async () => {
  const files = (await fs.readdir(POSTS_DIR)).filter((f) => f.endsWith(".mdx"));
  const posts = await Promise.all(
    files.map(async (f) => {
      const raw = await fs.readFile(path.join(POSTS_DIR, f), "utf8");
      const { data } = matter(raw);
      return { ...data, slug: f.replace(/\.mdx$/, "") };
    }),
  );
  const now = Date.now();
  const visible = posts
    .filter((p) => !p.draft && parsePostDate(p.date) <= now)
    .sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date));

  const items = visible
    .map(
      (p) => `    <item>
      <title>${escape(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}/</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}/</guid>
      <description>${escape(p.summary || "")}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${escape(p.category)}</category>${(p.tags || []).map((t) => `\n      <category>${escape(t)}</category>`).join("")}
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escape(SITE_DESC)}</description>
    <language>ko</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  await fs.writeFile(OUT, xml);
  console.log(`✓ Generated ${OUT} (${visible.length} posts)`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

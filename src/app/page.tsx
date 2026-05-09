import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllSeries } from "@/lib/series";
import { getAllTags } from "@/lib/tags";
import PostCard from "@/components/blog/PostCard";
import CategoryBadge from "@/components/blog/CategoryBadge";
import TagBadge from "@/components/blog/TagBadge";
import type { Category } from "@/types/post";

const GITHUB_URL = "https://github.com/seongyeon1";

const categoryMeta: Record<Category, { label: string; icon: string; tone: string }> = {
  study: {
    label: "Study",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    tone: "from-blue-500/15 to-blue-500/0 text-blue-600 dark:text-blue-400",
  },
  "paper-review": {
    label: "Paper Review",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    tone: "from-purple-500/15 to-purple-500/0 text-purple-600 dark:text-purple-400",
  },
  project: {
    label: "Project",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    tone: "from-emerald-500/15 to-emerald-500/0 text-emerald-600 dark:text-emerald-400",
  },
  tutorial: {
    label: "Tutorial",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342",
    tone: "from-amber-500/15 to-amber-500/0 text-amber-600 dark:text-amber-400",
  },
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

const StatCard = ({ value, label }: { value: number | string; label: string }) => (
  <div className="rounded-2xl bg-white p-5 shadow-border dark:bg-zinc-900">
    <p className="text-2xl font-bold tabular-nums tracking-tight text-zinc-900 dark:text-zinc-100">
      {value}
    </p>
    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
      {label}
    </p>
  </div>
);

const HomePage = () => {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7); // dedupe — Featured 제외
  const series = getAllSeries();
  const tagsMap = getAllTags();
  const tags = Array.from(tagsMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
  const totalTags = tags.length;

  const categoryCounts = posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] ?? 0) + 1;
    return acc;
  }, {});

  const featuredMeta = featuredPost ? categoryMeta[featuredPost.category] : null;

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-600/10" />
          <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary-300/10 blur-3xl dark:bg-primary-500/10" />
        </div>
        <div className="animate-fade-in-up">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-500" />
            </span>
            SeongYeon · AI Engineer
          </p>
          <h1 className="mb-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            AI 엔지니어 SeongYeon의
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-400 bg-clip-text text-transparent dark:from-primary-400 dark:via-primary-300 dark:to-cyan-300">
              학습 노트
            </span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            LLM · 논문 리뷰 · 프로젝트 회고를 쓰고 공유합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 pl-4 pr-5 py-2 text-sm font-medium text-white shadow-border transition-[box-shadow,scale] duration-150 ease-out-expo hover:shadow-border-hover active:scale-[0.96] dark:bg-white dark:text-zinc-900"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
            <a
              href="/rss.xml"
              className="inline-flex items-center gap-2 rounded-full bg-white pl-4 pr-5 py-2 text-sm font-medium text-zinc-700 shadow-border transition-[box-shadow,scale] duration-150 ease-out-expo hover:shadow-border-hover active:scale-[0.96] dark:bg-zinc-900 dark:text-zinc-300"
            >
              <svg className="h-4 w-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M3.429 5.1v3.193A12.514 12.514 0 0 1 15.857 20.7H19.05A15.6 15.6 0 0 0 3.429 5.1Zm0 6.385v3.193a6.13 6.13 0 0 1 6.043 6.022h3.193a9.323 9.323 0 0 0-9.236-9.215ZM5.554 17.45a2.121 2.121 0 1 0 .017 0Z" />
              </svg>
              RSS
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mb-20 animate-fade-in-up delay-100">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <StatCard value={posts.length} label="Posts" />
          <StatCard value={series.length} label="Series" />
          <StatCard value={totalTags} label="Tags" />
          <StatCard value={featuredPost ? formatDate(featuredPost.date) : "—"} label="Latest" />
        </div>
      </section>

      {/* Featured Post — magazine layout */}
      {featuredPost && featuredMeta && (
        <section className="mb-20 animate-fade-in-up delay-200">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid overflow-hidden rounded-3xl bg-white shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover lg:grid-cols-[1fr_320px] dark:bg-zinc-900"
          >
            {/* Left: text */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                  Latest
                </span>
                <CategoryBadge category={featuredPost.category} />
                {featuredPost.series && (
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Series · {featuredPost.series}
                  </span>
                )}
              </div>
              <h2 className="mb-4 text-balance text-2xl font-bold leading-tight text-zinc-900 transition-colors group-hover:text-primary-600 dark:text-zinc-100 dark:group-hover:text-primary-400 sm:text-3xl">
                {featuredPost.title}
              </h2>
              <p className="mb-6 max-w-2xl text-pretty leading-relaxed text-zinc-600 dark:text-zinc-400">
                {featuredPost.summary}
              </p>
              <div className="mb-6 flex flex-wrap gap-1.5">
                {featuredPost.tags.slice(0, 5).map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 border-t border-zinc-100 pt-5 text-sm text-zinc-500 dark:border-zinc-800/60 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1.5 tabular-nums">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {formatDate(featuredPost.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {featuredPost.readingTime}
                </span>
                <span className="ml-auto inline-flex items-center gap-2 font-medium text-primary-600 dark:text-primary-400">
                  Read more
                  <svg className="h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Right: visual (hidden on mobile) */}
            <div
              className={`relative hidden overflow-hidden bg-gradient-to-br ${featuredMeta.tone} lg:block`}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center ${featuredMeta.tone.split(" ").filter((c) => c.startsWith("text-")).join(" ")}`}
              >
                <svg className="h-32 w-32 opacity-40 transition-transform duration-500 ease-out-expo group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={featuredMeta.icon} />
                </svg>
              </div>
              <span className="absolute bottom-6 right-6 font-mono text-7xl font-black leading-none tracking-tighter text-zinc-900/[0.06] dark:text-white/[0.06]">
                {String(posts.length).padStart(2, "0")}
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* Categories */}
      <section className="mb-20 animate-fade-in-up delay-300">
        <h2 className="mb-8 text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Categories
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(Object.entries(categoryMeta) as [Category, typeof categoryMeta[Category]][]).map(
            ([key, meta]) => (
              <div
                key={key}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900"
              >
                <div
                  className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${meta.tone} opacity-50 blur-xl`}
                />
                <div
                  className={`relative mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${meta.tone.split(" ").filter((c) => c.startsWith("text-")).join(" ")} bg-zinc-50 dark:bg-zinc-800/60`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={meta.icon} />
                  </svg>
                </div>
                <p className="relative text-2xl font-bold tabular-nums text-zinc-900 dark:text-zinc-100">
                  {categoryCounts[key] ?? 0}
                </p>
                <p className="relative mt-0.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {meta.label}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Series */}
      {series.length > 0 && (
        <section className="mb-20 animate-fade-in-up delay-400">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Series
            </h2>
            <Link
              href="/series"
              className="rounded-md text-sm font-medium text-zinc-500 transition-[color,scale] duration-150 ease-out-expo hover:text-primary-600 active:scale-[0.96] dark:text-zinc-400 dark:hover:text-primary-400"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {series.map((s) => (
              <Link
                key={s.name}
                href={`/series/${encodeURIComponent(s.name)}`}
                className="group rounded-2xl bg-white p-6 shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900"
              >
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg>
                  <span className="text-xs font-medium tabular-nums text-primary-600 dark:text-primary-400">
                    {s.totalCount} posts
                  </span>
                </div>
                <h3 className="text-balance font-bold text-zinc-900 transition-colors group-hover:text-primary-600 dark:text-zinc-100 dark:group-hover:text-primary-400">
                  {s.name}
                </h3>
                {s.posts[s.posts.length - 1] && (
                  <p className="mt-2 text-pretty text-sm text-zinc-500 dark:text-zinc-400">
                    Latest · {s.posts[s.posts.length - 1].title}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="mb-20 animate-fade-in-up delay-400">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Recent Posts
            </h2>
            <Link
              href="/blog"
              className="rounded-md text-sm font-medium text-zinc-500 transition-[color,scale] duration-150 ease-out-expo hover:text-primary-600 active:scale-[0.96] dark:text-zinc-400 dark:hover:text-primary-400"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;

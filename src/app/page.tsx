import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import { getAllSeries } from "@/lib/series";
import PostCard from "@/components/blog/PostCard";
import CategoryBadge from "@/components/blog/CategoryBadge";
import TagBadge from "@/components/blog/TagBadge";
import SocialLinks from "@/components/blog/SocialLinks";
import type { Category } from "@/types/post";

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

const HomePage = () => {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7);
  const series = getAllSeries();

  const featuredMeta = featuredPost ? categoryMeta[featuredPost.category] : null;

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-600/10" />
          <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary-300/10 blur-3xl dark:bg-primary-500/10" />
        </div>
        <div className="grid animate-fade-in-up items-center gap-10 lg:grid-cols-[1fr_240px]">
          {/* Left: text */}
          <div>
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

            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group mt-6 inline-flex max-w-xl items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm shadow-border transition-[box-shadow,transform] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900"
              >
                <span className="text-base">📍</span>
                <span className="text-zinc-500 dark:text-zinc-400">Now ·</span>
                <span className="truncate font-medium text-zinc-700 dark:text-zinc-300">
                  최근엔 &ldquo;{featuredPost.title}&rdquo;에 대해 쓰고 있어요
                </span>
                <svg
                  className="ml-auto h-4 w-4 shrink-0 text-primary-600 transition-transform duration-200 ease-out-expo group-hover:translate-x-1 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            )}

            <div className="mt-8">
              <SocialLinks variant="hero" />
            </div>
          </div>

          {/* Right: avatar — hidden on mobile */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-500/20" />
            <Image
              src="/images/avatar.png"
              alt="SeongYeon avatar"
              width={240}
              height={240}
              priority
              className="image-pixelated h-60 w-60 rounded-full ring-1 ring-zinc-200/70 dark:ring-zinc-700/70"
            />
          </div>
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
          <div className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
            {series.map((s) => (
              <Link
                key={s.name}
                href={`/series/${encodeURIComponent(s.name)}`}
                className="group w-[280px] shrink-0 snap-start rounded-2xl bg-white p-6 shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900"
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

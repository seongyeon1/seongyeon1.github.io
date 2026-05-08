import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllSeries } from "@/lib/series";
import PostCard from "@/components/blog/PostCard";
import CategoryBadge from "@/components/blog/CategoryBadge";
import type { Category } from "@/types/post";

const categoryMeta: Record<Category, { label: string; icon: string; desc: string }> = {
  study: { label: "Study", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", desc: "학습 기록" },
  "paper-review": { label: "Paper Review", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z", desc: "논문 리뷰" },
  project: { label: "Project", icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5", desc: "프로젝트" },
  tutorial: { label: "Tutorial", icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342", desc: "튜토리얼" },
};

const HomePage = () => {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 6);
  const featuredPost = posts[0];
  const series = getAllSeries();

  const categoryCounts = posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-600/10" />
          <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary-300/10 blur-3xl dark:bg-primary-500/10" />
        </div>
        <div className="animate-fade-in-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            AI &amp; Machine Learning
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
            AI 기술을 탐구하고
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-purple-500 bg-clip-text text-transparent dark:from-primary-400 dark:via-primary-300 dark:to-purple-400">
              기록합니다
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            AI 공부기록, 논문 리뷰, 프로젝트 후기를 기록하는 기술 블로그입니다.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-20 animate-fade-in-up delay-100">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block overflow-hidden rounded-2xl border border-gray-200/60 bg-gradient-to-br from-gray-50 to-white transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 dark:border-gray-800/60 dark:from-gray-900 dark:to-gray-950"
          >
            <div className="p-8 sm:p-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                  Latest
                </span>
                <CategoryBadge category={featuredPost.category} />
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400 sm:text-3xl">
                {featuredPost.title}
              </h2>
              <p className="max-w-2xl text-gray-600 dark:text-gray-400">
                {featuredPost.summary}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                Read more
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Categories */}
      <section className="mb-20 animate-fade-in-up delay-200">
        <h2 className="mb-8 text-xl font-bold text-gray-900 dark:text-gray-100">
          Categories
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(Object.entries(categoryMeta) as [Category, typeof categoryMeta[Category]][]).map(
            ([key, meta]) => (
              <div
                key={key}
                className="group relative overflow-hidden rounded-xl border border-gray-200/60 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/5 dark:border-gray-800/60 dark:bg-gray-900"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={meta.icon} />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {categoryCounts[key] ?? 0}
                </p>
                <p className="mt-0.5 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {meta.label}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Series */}
      {series.length > 0 && (
        <section className="mb-20 animate-fade-in-up delay-300">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Series
            </h2>
            <Link
              href="/series"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {series.map((s) => (
              <Link
                key={s.name}
                href={`/series/${encodeURIComponent(s.name)}`}
                className="group rounded-xl border border-gray-200/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/5 dark:border-gray-800/60 dark:bg-gray-900"
              >
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg>
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
                    {s.totalCount} posts
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400">
                  {s.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="mb-20 animate-fade-in-up delay-400">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Recent Posts
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
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
    </div>
  );
};

export default HomePage;

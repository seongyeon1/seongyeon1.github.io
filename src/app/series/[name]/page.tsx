import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSeries, getSeriesByName } from "@/lib/series";
import { formatDateTime } from "@/lib/date";
import CategoryBadge from "@/components/blog/CategoryBadge";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ name: string }>;
};

export const generateStaticParams = () => {
  const series = getAllSeries();
  if (series.length === 0) return [{ name: "__none__" }];
  // Next.js가 파일 경로 생성 시 자동 인코딩하므로 raw 이름을 반환해야 한다.
  // 직접 encodeURIComponent하면 디렉토리명이 %25... 이중 인코딩됨.
  return series.map((s) => ({ name: s.name }));
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { name } = await params;
  const decoded = decodeURIComponent(name);
  return {
    title: decoded,
    description: `Series: ${decoded}`,
  };
};

const SeriesPage = async ({ params }: Props) => {
  const { name } = await params;
  const decoded = decodeURIComponent(name);
  const series = getSeriesByName(decoded);
  if (!series) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          Series
        </p>
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          {series.name}
        </h1>
        <p className="text-pretty text-zinc-500 dark:text-zinc-400">
          <span className="tabular-nums">{series.totalCount}</span> posts in this series
        </p>
      </div>
      <ol className="space-y-3">
        {series.posts.map((post, i) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-zinc-900"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-sm font-bold tabular-nums text-white shadow-sm">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-balance font-bold text-zinc-900 transition-colors group-hover:text-primary-600 dark:text-zinc-100 dark:group-hover:text-primary-400">
                  {post.title}
                </h2>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
                  <CategoryBadge category={post.category} />
                  <span className="tabular-nums">{formatDateTime(post.date)}</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-pretty text-sm text-zinc-500 dark:text-zinc-400">
                  {post.summary}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SeriesPage;

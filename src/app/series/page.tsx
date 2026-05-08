import Link from "next/link";
import { getAllSeries } from "@/lib/series";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Series",
  description: "All post series",
};

const SeriesListPage = () => {
  const seriesList = getAllSeries();

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-10">
        <h1 className="mb-2 text-balance text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Series
        </h1>
        <p className="text-pretty text-gray-500 dark:text-gray-400">
          Curated collections of related posts
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {seriesList.map((s) => (
          <Link
            key={s.name}
            href={`/series/${encodeURIComponent(s.name)}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-border transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-border-hover dark:bg-gray-900"
          >
            <div className="h-1.5 bg-gradient-to-r from-primary-500 to-purple-500" />
            <div className="p-6">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                </svg>
                <span className="text-xs font-semibold tabular-nums text-primary-600 dark:text-primary-400">
                  {s.totalCount} posts
                </span>
              </div>
              <h2 className="mb-4 text-balance text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400">
                {s.name}
              </h2>
              <ol className="space-y-1.5">
                {s.posts.map((p, i) => (
                  <li
                    key={p.slug}
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium tabular-nums text-gray-400 dark:bg-gray-800 dark:text-gray-500">
                      {i + 1}
                    </span>
                    <span className="truncate">{p.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Link>
        ))}
      </div>

      {seriesList.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
            <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>
          </div>
          <p className="text-gray-500 dark:text-gray-400">No series yet.</p>
        </div>
      )}
    </div>
  );
};

export default SeriesListPage;

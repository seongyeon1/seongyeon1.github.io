import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <div className="mb-6 text-8xl font-extrabold">
        <span className="bg-gradient-to-r from-primary-600 via-primary-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </span>
      </div>
      <h1 className="mb-2 text-balance text-xl font-bold text-zinc-900 dark:text-zinc-100">
        Page not found
      </h1>
      <p className="mb-8 text-pretty text-zinc-500 dark:text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 pl-5 pr-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-500/20 transition-[box-shadow,scale] duration-150 ease-out-expo hover:shadow-xl hover:shadow-primary-500/30 active:scale-[0.96]"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

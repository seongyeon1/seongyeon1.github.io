import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary-500 to-primary-700 text-xs font-bold text-white">
              AI
            </div>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Tech Blog
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Blog
            </Link>
            <Link
              href="/series"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Series
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-zinc-100 pt-6 text-center dark:border-zinc-800/50">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} AI Tech Blog. Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

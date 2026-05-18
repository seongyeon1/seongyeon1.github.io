import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import SocialLinks from "@/components/blog/SocialLinks";

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
    {children}
  </h3>
);

const Footer = () => {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <footer className="mt-14 border-t border-zinc-200/60 sm:mt-20 dark:border-zinc-800/60">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/avatar.png"
                alt=""
                width={32}
                height={32}
                className="image-pixelated h-8 w-8 rounded-full ring-1 ring-zinc-200/70 dark:ring-zinc-700/70"
              />
              <span className="font-mono text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                sy<span className="text-primary-600 dark:text-primary-400">/dev</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              AI 엔지니어 SeongYeon의 학습 노트.
            </p>
          </div>

          {/* Explore + Recent in one column on small, two on sm+ */}
          <div>
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/blog" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/series" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                  Series
                </Link>
              </li>
              <li>
                <Link href="/tags" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                  Tags
                </Link>
              </li>
            </ul>

            {recentPosts.length > 0 && (
              <>
                <ColumnHeading>
                  <span className="mt-8 block">Recent</span>
                </ColumnHeading>
                <ul className="flex flex-col gap-2">
                  {recentPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="line-clamp-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                      >
                        · {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Connect */}
          <div>
            <ColumnHeading>Connect</ColumnHeading>
            <SocialLinks variant="footer" />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-100 pt-6 sm:flex-row dark:border-zinc-800/50">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} SeongYeon · Built with Next.js
          </p>
          <a
            href="/rss.xml"
            className="text-xs text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";

const TagBadge = ({ tag }: { tag: string }) => {
  return (
    <Link
      href={`/tags/${tag}`}
      className="inline-flex rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500 transition-[color,background-color,scale] duration-150 ease-out-expo hover:bg-primary-50 hover:text-primary-600 active:scale-[0.96] dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
    >
      #{tag}
    </Link>
  );
};

export default TagBadge;

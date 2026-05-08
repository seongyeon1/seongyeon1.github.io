import Link from "next/link";

const TagBadge = ({ tag }: { tag: string }) => {
  return (
    <Link
      href={`/tags/${tag}`}
      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 transition-all hover:bg-primary-50 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
    >
      #{tag}
    </Link>
  );
};

export default TagBadge;

import type { Category } from "@/types/post";

const categoryConfig: Record<Category, { label: string; color: string }> = {
  concept: {
    label: "Concept",
    color: "bg-blue-50 text-blue-600 ring-1 ring-blue-500/20 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20",
  },
  guide: {
    label: "Guide",
    color: "bg-amber-50 text-amber-600 ring-1 ring-amber-500/20 dark:bg-amber-900/20 dark:text-amber-400 dark:ring-amber-400/20",
  },
  "paper-review": {
    label: "Paper Review",
    color: "bg-purple-50 text-purple-600 ring-1 ring-purple-500/20 dark:bg-purple-900/20 dark:text-purple-400 dark:ring-purple-400/20",
  },
  project: {
    label: "Project",
    color: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/20 dark:bg-emerald-900/20 dark:text-emerald-400 dark:ring-emerald-400/20",
  },
  tool: {
    label: "Tool",
    color: "bg-rose-50 text-rose-600 ring-1 ring-rose-500/20 dark:bg-rose-900/20 dark:text-rose-400 dark:ring-rose-400/20",
  },
};

const CategoryBadge = ({ category }: { category: Category }) => {
  const config = categoryConfig[category];
  return (
    <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${config.color}`}>
      {config.label}
    </span>
  );
};

export default CategoryBadge;

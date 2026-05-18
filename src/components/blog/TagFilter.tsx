"use client";

import { useState } from "react";
import TagBadge from "./TagBadge";

const COLLAPSED_LIMIT = 12;

const TagFilter = ({ tags }: { tags: { tag: string; count: number }[] }) => {
  const [expanded, setExpanded] = useState(false);
  const showToggle = tags.length > COLLAPSED_LIMIT;
  const visibleTags = expanded || !showToggle ? tags : tags.slice(0, COLLAPSED_LIMIT);

  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-2">
        {visibleTags.map(({ tag, count }) => (
          <span key={tag} className="flex items-center gap-1">
            <TagBadge tag={tag} />
            <span className="text-xs tabular-nums text-zinc-300 dark:text-zinc-600">
              {count}
            </span>
          </span>
        ))}
      </div>
      {showToggle && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-3 inline-flex items-center gap-1 rounded-md text-xs font-medium text-zinc-500 transition-[color,scale] duration-150 ease-out-expo hover:text-primary-600 active:scale-[0.96] dark:text-zinc-400 dark:hover:text-primary-400"
        >
          {expanded ? "Show less" : `Show ${tags.length - COLLAPSED_LIMIT} more`}
          <svg
            className={`h-3 w-3 transition-transform duration-200 ease-out-expo ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TagFilter;

"use client";

import { useScrollProgress } from "@/lib/useScrollProgress";

const ReadingProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] sm:hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;

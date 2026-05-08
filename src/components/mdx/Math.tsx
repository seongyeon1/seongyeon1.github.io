import type { ReactNode } from "react";

const Math = ({ children }: { children: ReactNode }) => {
  return (
    <span className="inline-block rounded bg-blue-50 px-2 py-0.5 font-mono text-sm text-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
      {children}
    </span>
  );
};

export default Math;

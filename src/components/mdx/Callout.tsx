import type { ReactNode } from "react";

type CalloutType = "note" | "warning" | "tip" | "danger";

const styles: Record<CalloutType, { bg: string; border: string; icon: string }> = {
  note: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-400 dark:border-blue-500",
    icon: "💡",
  },
  warning: {
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-yellow-400 dark:border-yellow-500",
    icon: "⚠️",
  },
  tip: {
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-400 dark:border-green-500",
    icon: "✅",
  },
  danger: {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-400 dark:border-red-500",
    icon: "🚨",
  },
};

const Callout = ({
  type = "note",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) => {
  const s = styles[type];
  return (
    <div className={`my-6 rounded-lg border-l-4 ${s.border} ${s.bg} p-4`}>
      <div className="flex gap-3">
        <span className="text-lg leading-7">{s.icon}</span>
        <div className="prose-sm flex-1 dark:prose-invert">{children}</div>
      </div>
    </div>
  );
};

export default Callout;

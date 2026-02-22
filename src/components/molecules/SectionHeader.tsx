import React from "react";
import { cn } from "../../utils/cn";

export const SectionHeader = ({
  title,
  icon,
  color = "#0D358C",
  size = "xl",
}: {
  title: string;
  icon?: React.ReactNode;
  color?: string;
  size?: "lg" | "xl";
}) => {
  return (
    <h2
      className={cn(
        "font-extrabold flex items-center gap-2",
        size === "xl" ? "text-xl" : "text-lg"
      )}
      style={{ color }}
    >
      {icon ? (
        <span className="inline-flex" style={{ color }}>
          {icon}
        </span>
      ) : null}
      {title}
    </h2>
  );
};

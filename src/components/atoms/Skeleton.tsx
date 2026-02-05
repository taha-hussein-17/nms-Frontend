import { cn } from "../../utils/cn";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}

export const Skeleton = ({
  className,
  variant = "rectangular",
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-secondary/50",
        variant === "circular" && "rounded-full",
        variant === "rectangular" && "rounded-lg",
        variant === "text" && "rounded h-4 w-full",
        className
      )}
    />
  );
};

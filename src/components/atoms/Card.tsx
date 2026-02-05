import { type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { useTheme } from "../../providers/ThemeContext";
import { THEME_CONFIGS } from "../../constants/themeRegistry";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true }: CardProps) => {
  const { theme } = useTheme();
  const config =
    THEME_CONFIGS[theme as keyof typeof THEME_CONFIGS] || THEME_CONFIGS.default;

  const themeSpecificStyles = {
    kids: "border-4 border-secondary/30 shadow-[10px_10px_0_0_rgba(78,205,196,0.2)]",
    coders:
      "border-2 border-foreground shadow-[4px_4px_0_0_rgba(var(--foreground),1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.1)]",
    azhari:
      "border border-primary/20 bg-gradient-to-br from-card to-secondary/5",
    uni: "border border-border/40 shadow-lg",
    default: "",
  };

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: theme === "kids" ? -10 : -5,
              scale: theme === "kids" ? 1.02 : 1,
            }
          : {}
      }
      className={cn(
        "bg-card border border-border/50 shadow-sm transition-all duration-300",
        config.borderRadius,
        hover && "hover:shadow-xl hover:border-primary/20",
        themeSpecificStyles[theme as keyof typeof themeSpecificStyles],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className }: CardProps) => {
  return <div className={cn("p-8 pb-0", className)}>{children}</div>;
};

export const CardContent = ({ children, className }: CardProps) => {
  return <div className={cn("p-8", className)}>{children}</div>;
};

export const CardFooter = ({ children, className }: CardProps) => {
  return <div className={cn("p-8 pt-0", className)}>{children}</div>;
};

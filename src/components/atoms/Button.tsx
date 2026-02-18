import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useTheme } from "../../providers/ThemeContext";
import { THEME_CONFIGS } from "../../constants/themeRegistry";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon" | "xs";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, ...props }, ref) => {
    const { theme } = useTheme();
    const config =
      THEME_CONFIGS[theme as keyof typeof THEME_CONFIGS] ||
      THEME_CONFIGS.default;

    const variants = {
      primary:
        "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90",
      secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline:
        "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      glass: "glass hover:bg-card/90 text-foreground",
    };

    const themeSpecificStyles = {
      kids:
        variant === "primary"
          ? "shadow-[0_4px_0_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-1 font-black uppercase tracking-wider border-2 border-white/10"
          : "",
      coders:
        "font-mono border-2 shadow-[2px_2px_0_0_currentColor] active:shadow-none active:translate-x-[1px] active:translate-y-[1px]",
      azhari: "font-serif tracking-tight",
      uni: "uppercase tracking-widest font-bold",
      default: "",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 py-2",
      lg: "h-13 px-10 text-lg",
      xs: "h-13 px-4 text-xs",
      icon: "h-11 w-11 p-0",
    };

    const combinedClassName = cn(
      "inline-flex items-center justify-center font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
      variants[variant as keyof typeof variants],
      themeSpecificStyles[theme as keyof typeof themeSpecificStyles],
      sizes[size as keyof typeof sizes],
      config.buttonRadius,
      className
    );

    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement;
      return React.cloneElement(child, {
        className: cn(combinedClassName, child.props.className),
        ...props,
      });
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{
          scale: theme === "kids" ? 1.05 : 1.02,
          cursor: "pointer",
        }}
        whileTap={{ scale: theme === "kids" ? 0.95 : 0.98 }}
        className={combinedClassName}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

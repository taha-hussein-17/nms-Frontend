import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn";
import type { Location } from "react-router-dom";
import {
  Globe,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../../providers/ThemeContext";
import { THEME_CONFIGS } from "../../../constants/themeRegistry";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  isMobile?: boolean;
  onMobileClose?: () => void;
  onLogout: () => void;
  menuItems: { title: string; icon: LucideIcon; path: string }[];
  bottomMenuItems: { title: string; icon: LucideIcon; path: string }[];
  user?: { name?: string; role?: string } | null;
  isAr?: boolean;
  location: Location;
  t: (k: string) => string;
}

export const Sidebar = ({
  isOpen,
  setIsOpen,
  onLogout,
  menuItems,
  bottomMenuItems,
  isAr,
  location,
  t,
}: SidebarProps) => {
  const { theme } = useTheme();
  const config =
    THEME_CONFIGS[theme as keyof typeof THEME_CONFIGS] || THEME_CONFIGS.default;
  const isKids = theme === "kids";
  const isCoders = theme === "programmers";
  const isAzhari = theme === "azhari";
  const isUni = theme === "uni";

  return (
    <motion.div
      initial={false}
      animate={{ width: isOpen ? 240 : 80 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "flex flex-col h-full py-6 transition-colors duration-500",
        isKids && "bg-secondary/10 border-r-4 border-secondary/20",
        isCoders && "bg-black border-r-2 border-green-500 font-mono",
        isAzhari && "bg-primary/5 border-r-2 border-primary/20",
        isUni && "bg-primary/10 border-r-2 border-primary/30",
        !isKids &&
          !isCoders &&
          !isAzhari &&
          !isUni &&
          "bg-card border-r border-border/40"
      )}
    >
      <div className="px-3 mb-5 flex items-center justify-between">
        <div
          className={cn(
            "flex items-center gap-2.5 transition-all duration-300",
            !isOpen && "overflow-hidden"
          )}
        >
          <div
            className={cn(
              "w-9 h-9 bg-primary flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/30",
              config.borderRadius,
              isCoders && "bg-green-500 text-black shadow-green-500/50",
              isAzhari && "bg-primary shadow-primary/20",
              isUni && "bg-primary shadow-primary/20"
            )}
          >
            {isKids ? <Sparkles size={20} /> : isCoders ? ">_" : "N"}
          </div>
          <span
            className={cn(
              "text-lg font-black tracking-tighter transition-opacity duration-200",
              !isOpen && "opacity-0",
              isKids && "text-xl text-primary",
              isCoders && "font-mono text-green-500 tracking-normal",
              isAzhari && "font-serif tracking-tight"
            )}
          >
            {isKids ? "WAKP Kids" : isCoders ? "WAKP.sh" : "WAKP."}
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "p-1.5 hover:bg-secondary/80 text-muted-foreground transition-colors cursor-pointer",
            config.buttonRadius
          )}
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isOpen ? (
            isAr ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )
          ) : isAr ? (
            <ChevronLeft size={18} />
          ) : (
            <ChevronRight size={18} />
          )}
        </button>
      </div>

      <nav className="flex-1 px-2.5 space-y-1.5">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-2.5 px-2.5 py-2.5 font-bold transition-all duration-200 group relative",
              config.borderRadius,
              location.pathname === item.path ||
                (item.path !== "/dashboard" &&
                  location.pathname.startsWith(item.path))
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
              isKids && "text-lg"
            )}
          >
            <item.icon
              size={isKids ? 22 : 18}
              className={
                "shrink-0 transition-transform duration-300 group-hover:scale-110"
              }
            />
            <span
              className={cn(
                "transition-all duration-200 whitespace-nowrap overflow-hidden ml-0.5",
                !isOpen && "opacity-0 max-w-0"
              )}
            >
              {t(item.title)}
            </span>
            {isKids && location.pathname === item.path && (
              <Sparkles className="absolute right-2 top-2 w-4 h-4 text-white/50 animate-pulse" />
            )}
            {!isOpen && location.pathname === item.path && (
              <div
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary",
                  isKids ? "rounded-r-full h-8" : "rounded-r-md"
                )}
              />
            )}
          </Link>
        ))}
      </nav>

      <div
        className={cn(
          "px-2.5 mt-auto pt-5 border-t space-y-1.5",
          isKids ? "border-secondary/20" : "border-secondary"
        )}
      >
        {bottomMenuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-2.5 px-2.5 py-2.5 font-bold transition-colors duration-200 group relative",
              config.borderRadius,
              location.pathname === item.path
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            )}
          >
            <item.icon
              size={20}
              className="shrink-0 transition-transform duration-300 group-hover:rotate-12"
            />
            <span
              className={cn(
                "transition-all duration-300 whitespace-nowrap overflow-hidden",
                !isOpen && "w-0 opacity-0"
              )}
            >
              {t(item.title)}
            </span>
          </Link>
        ))}

        <Link
          to="/"
          className={cn(
            "flex items-center gap-2.5 px-2.5 py-2.5 font-bold text-muted-foreground hover:bg-secondary/80 hover:text-foreground transition-colors duration-200 group relative",
            config.borderRadius
          )}
        >
          <Globe
            size={20}
            className="shrink-0 group-hover:rotate-12 transition-transform"
          />
          <span
            className={cn(
              "transition-all duration-300 whitespace-nowrap overflow-hidden",
              !isOpen && "w-0 opacity-0"
            )}
          >
            {t("dashboard.back_to_website")}
          </span>
        </Link>

        <button
          onClick={onLogout}
          className={cn(
            "w-full flex items-center gap-2.5 px-3.5 py-2.5 font-bold text-destructive hover:bg-destructive/10 hover:cursor-pointer transition-all duration-200 group relative",
            config.borderRadius
          )}
        >
          <LogOut
            size={20}
            className="shrink-0 group-hover:-translate-x-1 transition-transform"
          />
          <span
            className={cn(
              "transition-all duration-300 whitespace-nowrap overflow-hidden",
              !isOpen && "w-0 opacity-0"
            )}
          >
            {t("dashboard.sidebar.logout")}
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;

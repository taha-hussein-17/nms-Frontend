import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn";
import type { Location } from "react-router-dom";
import {
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../../providers/ThemeContext";
import { THEME_CONFIGS } from "../../../constants/themeRegistry";
import Logo from "../../../assets/logo/icon.png";

interface MenuItem {
  title: string;
  icon: LucideIcon;
  path: string;
  children?: { title: string; icon: LucideIcon; path: string }[];
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  isMobile?: boolean;
  onMobileClose?: () => void;
  onLogout: () => void;
  menuItems: MenuItem[];
  bottomMenuItems: MenuItem[];
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
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (path: string) => {
    setExpandedMenus((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

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
              "h-9 bg-primary flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/30",
              config.borderRadius,
              isCoders && "bg-green-500 text-black shadow-green-500/50",
              isAzhari && "bg-primary shadow-primary/20",
              isUni && "bg-primary shadow-primary/20"
            )}
            style={{ width: "130px" }}
          >
            {isKids ? (
              <Sparkles size={20} />
            ) : isCoders ? (
              ">_"
            ) : (
              <img
                src={Logo}
                alt="Logo"
                className="h-5 object-contain brightness-0 invert"
                style={{ width: "100%" }}
              />
            )}
          </div>
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

      <nav className="flex-1 px-2.5 space-y-1.5 overflow-y-auto scrollbar-hide">
        {menuItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/dashboard" &&
              location.pathname.startsWith(item.path));
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedMenus.includes(item.path);

          if (hasChildren) {
            return (
              <div key={item.path} className="space-y-1">
                <button
                  onClick={() => {
                    if (!isOpen) setIsOpen(true);
                    toggleMenu(item.path);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between gap-2.5 px-2.5 py-2.5 font-bold transition-all duration-200 group relative",
                    config.borderRadius,
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                    isKids && "text-lg"
                  )}
                >
                  <div className="flex items-center gap-2.5">
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
                  </div>
                  {isOpen && (
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {isExpanded && isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-1 pl-4"
                    >
                      {item.children?.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={cn(
                            "flex items-center gap-2 px-2.5 py-2 text-sm font-medium transition-colors rounded-lg",
                            location.pathname === child.path
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                          )}
                        >
                          {child.icon && <child.icon size={16} />}
                          <span>{t(child.title)}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2.5 px-2.5 py-2.5 font-bold transition-all duration-200 group relative",
                config.borderRadius,
                isActive
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
              {isKids && isActive && (
                <Sparkles className="absolute right-2 top-2 w-4 h-4 text-white/50 animate-pulse" />
              )}
              {!isOpen && isActive && (
                <div
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary",
                    isKids ? "rounded-r-full h-8" : "rounded-r-md"
                  )}
                />
              )}
            </Link>
          );
        })}
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

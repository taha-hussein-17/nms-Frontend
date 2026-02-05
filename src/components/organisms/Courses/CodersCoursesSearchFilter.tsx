import { motion, AnimatePresence } from "framer-motion";
import {
  SlidersHorizontal,
  BarChart3,
  ChevronDown,
  LayoutGrid,
  List,
  Terminal,
} from "lucide-react";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { cn } from "../../../utils/cn";
import type { TFunction } from "i18next";

interface CoursesSearchFilterProps {
  isAr: boolean;
  t: TFunction;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  isSortOpen: boolean;
  setIsSortOpen: (open: boolean) => void;
  currentSortLabel?: string;
  sortOptions: { value: string; label: string }[];
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export const CodersCoursesSearchFilter = ({
  isAr,
  searchQuery,
  setSearchQuery,
  categories,
  selectedCategory,
  setSelectedCategory,
  isSidebarOpen,
  setIsSidebarOpen,
  sortBy,
  setSortBy,
  isSortOpen,
  setIsSortOpen,
  currentSortLabel,
  sortOptions,
  viewMode,
  setViewMode,
}: CoursesSearchFilterProps) => {
  return (
    <div className="sticky top-24 z-40 mb-12 font-mono">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black/80 backdrop-blur-xl p-4 md:p-6 rounded-lg border-2 border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
      >
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Search with Terminal Style */}
          <div className="relative flex-1 w-full group">
            <div
              className={cn(
                "absolute top-1/2 -translate-y-1/2 text-emerald-500 w-5 h-5 z-10",
                isAr ? "right-6" : "left-6"
              )}
            >
              <Terminal />
            </div>
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "h-14 rounded-md bg-emerald-500/5 border-emerald-500/20 focus:border-emerald-500 focus:bg-emerald-500/10 transition-all text-emerald-400 placeholder:text-emerald-900 font-mono",
                isAr ? "pr-14 pl-6" : "pl-14 pr-6"
              )}
              placeholder={
                isAr ? "grep --search courses..." : "grep --search courses..."
              }
            />
            <div className="absolute bottom-0 left-0 h-[2px] bg-emerald-500 w-0 group-focus-within:w-full transition-all duration-500" />
          </div>

          {/* Categories as Tags */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-md text-xs font-bold transition-all whitespace-nowrap border uppercase tracking-tighter",
                  selectedCategory === cat
                    ? "bg-emerald-500 text-black border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    : "bg-emerald-500/5 border-emerald-500/10 text-emerald-500/60 hover:text-emerald-400 hover:border-emerald-500/30"
                )}
              >
                {cat === "All" ? (isAr ? "ALL_REPOS" : "ALL_REPOS") : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            {/* Filter Toggle */}
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              variant="outline"
              className={cn(
                "h-14 flex-1 lg:flex-none rounded-md border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-500 font-mono flex items-center gap-2 px-6",
                isSidebarOpen && "border-emerald-500 bg-emerald-500/20"
              )}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-xs uppercase font-bold">
                {isAr ? "تصفية" : "CONFIG"}
              </span>
            </Button>

            {/* Sort Dropdown */}
            <div className="relative flex-1 lg:flex-none">
              <Button
                onClick={() => setIsSortOpen(!isSortOpen)}
                variant="outline"
                className="h-14 w-full rounded-md border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-500 font-mono flex items-center justify-between gap-4 px-6"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-xs uppercase truncate">
                    {currentSortLabel}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform",
                    isSortOpen && "rotate-180"
                  )}
                />
              </Button>

              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full mt-2 right-0 w-56 bg-black border-2 border-emerald-500/20 rounded-md overflow-hidden shadow-2xl z-50"
                  >
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          "w-full text-right p-4 text-[10px] font-bold transition-colors hover:bg-emerald-500/10 uppercase tracking-widest",
                          sortBy === opt.value
                            ? "text-emerald-500 bg-emerald-500/5"
                            : "text-emerald-500/40"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* View Mode */}
            <div className="hidden md:flex bg-emerald-500/5 p-1 rounded-md border border-emerald-500/10">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-3 rounded-sm transition-all",
                  viewMode === "grid"
                    ? "bg-emerald-500 text-black"
                    : "text-emerald-500/30 hover:text-emerald-500"
                )}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-3 rounded-sm transition-all",
                  viewMode === "list"
                    ? "bg-emerald-500 text-black"
                    : "text-emerald-500/30 hover:text-emerald-500"
                )}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

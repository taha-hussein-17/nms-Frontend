import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  LayoutGrid,
  List,
  Library,
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

export const AzhariCoursesSearchFilter = ({
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
    <div className="sticky top-24 z-40 mb-12 font-serif">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#FDFCF6] dark:bg-emerald-900/10 backdrop-blur-xl p-5 md:p-8 rounded-[3rem] border-2 border-emerald-800/10 dark:border-emerald-500/10 shadow-xl"
      >
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Elegant Search */}
          <div className="relative flex-1 w-full">
            <Search
              className={cn(
                "absolute top-1/2 -translate-y-1/2 text-emerald-800 dark:text-emerald-400 w-5 h-5",
                isAr ? "right-6" : "left-6"
              )}
            />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "h-16 rounded-2xl bg-white dark:bg-emerald-900/20 border-emerald-800/10 dark:border-emerald-500/10 focus:border-emerald-800/30 dark:focus:border-emerald-500/30 transition-all text-lg placeholder:text-emerald-800/30 dark:placeholder:text-emerald-200/20",
                isAr ? "pr-14 pl-6" : "pl-14 pr-6"
              )}
              placeholder={isAr ? "ابحث عن علم..." : "Search for knowledge..."}
            />
          </div>

          {/* Calligraphy Style Categories */}
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0 px-2">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap border-2",
                  selectedCategory === cat
                    ? "bg-emerald-800 text-white border-emerald-800 shadow-lg shadow-emerald-900/20"
                    : "bg-emerald-800/5 border-emerald-800/5 text-emerald-800 dark:text-emerald-200/50 hover:border-emerald-800/20"
                )}
              >
                {cat === "All" ? (isAr ? "كل الفنون" : "All Sciences") : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              variant="outline"
              className={cn(
                "h-16 flex-1 lg:flex-none rounded-2xl border-emerald-800/10 bg-emerald-800/5 hover:bg-emerald-800/10 text-emerald-800 dark:text-emerald-400 font-bold flex items-center gap-3 px-8",
                isSidebarOpen && "bg-emerald-800 text-white border-emerald-800"
              )}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>{isAr ? "تصفية" : "Filter"}</span>
            </Button>

            {/* Sort Dropdown */}
            <div className="relative flex-1 lg:flex-none">
              <Button
                onClick={() => setIsSortOpen(!isSortOpen)}
                variant="outline"
                className="h-16 w-full rounded-2xl border-emerald-800/10 bg-emerald-800/5 hover:bg-emerald-800/10 text-emerald-800 dark:text-emerald-400 font-bold flex items-center justify-between gap-6 px-8"
              >
                <div className="flex items-center gap-3">
                  <Library className="w-5 h-5" />
                  <span className="truncate">{currentSortLabel}</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isSortOpen && "rotate-180"
                  )}
                />
              </Button>

              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-4 right-0 w-64 bg-white dark:bg-emerald-900 border-2 border-emerald-800/10 rounded-3xl overflow-hidden shadow-2xl z-50"
                  >
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          "w-full text-right p-5 text-sm font-bold transition-colors hover:bg-emerald-800/5",
                          sortBy === opt.value
                            ? "text-emerald-300 bg-emerald-800/5"
                            : "text-gray-600 "
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
            <div className="hidden md:flex bg-emerald-800/5 p-1.5 rounded-2xl border border-emerald-800/10">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-3 rounded-xl transition-all",
                  viewMode === "grid"
                    ? "bg-emerald-300 text-white"
                    : "text-emerald-300/30 hover:text-emerald-800"
                )}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-3 rounded-xl transition-all",
                  viewMode === "list"
                    ? "bg-emerald-300 text-white"
                    : "text-emerald-800/30 hover:text-emerald-800 hover:cursor-pointer"
                )}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

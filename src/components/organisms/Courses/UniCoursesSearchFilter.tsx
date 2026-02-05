import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  BarChart3,
  ChevronDown,
  LayoutGrid,
  List,
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

export const UniCoursesSearchFilter = ({
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
    <div className="sticky top-24 z-40 mb-12 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 p-4 md:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl"
      >
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          {/* Professional Search */}
          <div className="relative flex-1 w-full group">
            <Search
              className={cn(
                "absolute top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5 transition-colors",
                isAr ? "right-6" : "left-6"
              )}
            />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "h-14 rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all text-base placeholder:text-slate-400",
                isAr ? "pr-14 pl-6" : "pl-14 pr-6"
              )}
              placeholder={
                isAr
                  ? "البحث في الدليل الأكاديمي..."
                  : "Search academic catalog..."
              }
            />
          </div>

          {/* Academic Categories as Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap",
                  selectedCategory === cat
                    ? "bg-white dark:bg-slate-800 text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                )}
              >
                {cat === "All"
                  ? isAr
                    ? "جميع التخصصات"
                    : "All Disciplines"
                  : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              variant="outline"
              className={cn(
                "h-14 flex-1 lg:flex-none rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-600 text-slate-700 dark:text-slate-300 font-bold flex items-center gap-2 px-6",
                isSidebarOpen &&
                  "border-blue-600 text-blue-600 bg-blue-50 dark:bg-blue-900/10"
              )}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="text-sm">
                {isAr ? "تصفية متقدمة" : "Advanced"}
              </span>
            </Button>

            {/* Sort Dropdown */}
            <div className="relative flex-1 lg:flex-none">
              <Button
                onClick={() => setIsSortOpen(!isSortOpen)}
                variant="outline"
                className="h-14 w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-600 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-between gap-4 px-6"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm truncate">{currentSortLabel}</span>
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
                    className="absolute top-full mt-2 right-0 w-60 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-2xl z-50"
                  >
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          "w-full text-right p-4 text-sm font-semibold transition-colors hover:bg-slate-50 dark:hover:bg-slate-700",
                          sortBy === opt.value
                            ? "text-blue-600 bg-blue-50 dark:bg-blue-900/10"
                            : "text-slate-600 dark:text-slate-400"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden md:flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2.5 rounded-lg transition-all",
                  viewMode === "grid"
                    ? "bg-white dark:bg-slate-800 text-blue-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                )}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2.5 rounded-lg transition-all",
                  viewMode === "list"
                    ? "bg-white dark:bg-slate-800 text-blue-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
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

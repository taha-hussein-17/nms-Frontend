import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  BarChart3,
  ChevronDown,
  LayoutGrid,
  List as ListIcon,
  Star,
} from "lucide-react";
import { Input } from "../../atoms/Input";
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

export const KidsCoursesSearchFilter = ({
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
    <div className="sticky top-24 z-40 mb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-6 rounded-[3rem] border-4 border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden"
      >
        {/* Playful background decoration */}
        <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
          <Star className="w-20 h-20 text-yellow-400 fill-yellow-400" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Search */}
          <div className="relative flex-1 w-full group">
            <Search
              className={cn(
                "absolute top-1/2 -translate-y-1/2 text-primary w-6 h-6 transition-transform group-focus-within:scale-110",
                isAr ? "right-6" : "left-6"
              )}
            />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "h-16 rounded-[2rem] bg-slate-50 border-2 border-slate-100 focus:border-primary focus:bg-white transition-all text-xl font-bold placeholder:text-slate-400 shadow-inner",
                isAr ? "pr-16 pl-8" : "pl-16 pr-8"
              )}
              placeholder={
                isAr
                  ? "ابحث عن مغامرة تعليمية..."
                  : "Search for a learning adventure..."
              }
            />
          </div>

          {/* Quick Categories */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            {categories.slice(0, 5).map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-8 py-4 rounded-2xl text-base font-black transition-all whitespace-nowrap border-b-4",
                  selectedCategory === cat
                    ? "bg-primary border-primary-dark text-white shadow-lg shadow-primary/30"
                    : "bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200"
                )}
              >
                {cat === "All" ? (isAr ? "كل الدروس" : "All Lessons") : cat}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            {/* Advanced Filter Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={cn(
                "h-16 flex-1 lg:flex-none rounded-[1.5rem] border-2 font-black flex items-center gap-3 px-8 transition-all",
                isSidebarOpen
                  ? "bg-primary border-primary-dark text-white shadow-lg shadow-primary/30"
                  : "bg-white border-slate-200 text-slate-600 hover:border-primary/50"
              )}
            >
              <SlidersHorizontal className="w-6 h-6" />
              <span className="hidden sm:inline">
                {isAr ? "تصفية" : "Filter"}
              </span>
            </motion.button>

            {/* Sort Dropdown */}
            <div className="relative flex-1 lg:flex-none">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="h-16 w-full rounded-[1.5rem] border-2 border-slate-200 bg-white hover:border-primary/50 font-black text-slate-600 flex items-center justify-between gap-6 px-8 transition-all"
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span className="truncate">{currentSortLabel}</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform text-primary",
                    isSortOpen && "rotate-180"
                  )}
                />
              </motion.button>

              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.9 }}
                    className="absolute top-full mt-3 right-0 w-64 bg-white border-4 border-primary/10 rounded-[2rem] overflow-hidden shadow-2xl z-50 p-2"
                  >
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          "w-full text-right p-4 rounded-xl text-base font-black transition-all mb-1 last:mb-0",
                          sortBy === opt.value
                            ? "bg-primary text-white shadow-md"
                            : "text-slate-600 hover:bg-slate-50"
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
            <div className="hidden md:flex bg-slate-100 p-2 rounded-[1.5rem] border-2 border-slate-200 shadow-inner">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-3 rounded-xl transition-all",
                  viewMode === "grid"
                    ? "bg-white text-primary shadow-md scale-110"
                    : "text-slate-400 hover:text-slate-600"
                )}
              >
                <LayoutGrid className="w-6 h-6" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-3 rounded-xl transition-all ml-1",
                  viewMode === "list"
                    ? "bg-white text-primary shadow-md scale-110"
                    : "text-slate-400 hover:text-slate-600"
                )}
              >
                <ListIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

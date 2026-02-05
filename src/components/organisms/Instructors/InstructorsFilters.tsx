import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../../atoms/Reveal";
import { cn } from "../../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
  id: string;
  label: string;
}

interface SortOption {
  id: string;
  label: string;
}

interface InstructorsFiltersProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
  sortBy: string;
  setSortBy: (id: string) => void;
  isSortOpen: boolean;
  setIsSortOpen: (isOpen: boolean) => void;
  sortOptions: SortOption[];
}

export const InstructorsFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  isSortOpen,
  setIsSortOpen,
  sortOptions,
}: InstructorsFiltersProps) => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="space-y-8 mb-12">
      {/* Category Tabs - Sticky Bar */}
      <Reveal>
        <div className="bg-card/70 glass backdrop-blur-3xl border-2 border-white/10 rounded-[3rem] p-4 shadow-2xl flex items-center justify-center sticky top-28 z-30">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-8 py-4 rounded-2xl text-sm font-black transition-all duration-300 transform active:scale-95",
                  selectedCategory === cat.id
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Sort Dropdown - Above Cards, Right Aligned */}
      <Reveal delay={0.2}>
        <div
          className={cn(
            "flex items-center justify-between mb-6",
            isAr ? "flex-row" : "flex-row-reverse"
          )}
        >
          {/* Result Count or Label (Optional but adds balance) */}
          <div className="hidden md:block">
            <p className="text-[#445161] font-bold text-lg">
              {isAr ? "المدربون المتميزون" : "Featured Instructors"}
            </p>
          </div>

          <div className="relative flex items-center gap-4">
            <span className="text-sm font-black text-[#445161]/60 uppercase tracking-widest">
              {t("instructor.sort_label")}
            </span>
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className={cn(
                  "flex items-center justify-between gap-8 px-6 py-3.5 bg-white border-2 border-[#DCE5FE] rounded-2xl min-w-[240px] transition-all duration-300 group hover:border-primary hover:shadow-lg hover:shadow-primary/5",
                  isSortOpen && "border-primary shadow-lg shadow-primary/5"
                )}
              >
                <span className="font-extrabold text-[#001133]">
                  {sortOptions.find((opt) => opt.id === sortBy)?.label}
                </span>
                <div
                  className={cn(
                    "p-1 rounded-lg bg-[#EBF0FD] text-primary transition-transform duration-300",
                    isSortOpen && "rotate-180 bg-primary text-white"
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className={cn(
                      "absolute top-full mt-3 w-full bg-white border-2 border-[#DCE5FE] rounded-2xl shadow-2xl p-2 z-50 overflow-hidden",
                      isAr ? "right-0" : "left-0"
                    )}
                  >
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setSortBy(opt.id);
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          "w-full px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 mb-1 last:mb-0",
                          isAr ? "text-right" : "text-left",
                          sortBy === opt.id
                            ? "bg-[#EBF0FD] text-primary"
                            : "hover:bg-slate-50 text-[#445161] hover:text-[#001133]"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span>{opt.label}</span>
                          {sortBy === opt.id && (
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

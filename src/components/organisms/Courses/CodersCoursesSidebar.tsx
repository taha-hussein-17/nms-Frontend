import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Clock, Star, Terminal } from "lucide-react";
import { cn } from "../../../utils/cn";
import { type TFunction } from "i18next";

interface CoursesSidebarProps {
  isAr: boolean;
  t: TFunction;
  isSidebarOpen: boolean;
  levels: string[];
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  durations: string[];
  selectedDuration: string;
  setSelectedDuration: (duration: string) => void;
  ratings: number[];
  selectedRating: number;
  setSelectedRating: (rating: number) => void;
}

export const CodersCoursesSidebar = ({
  isAr,
  isSidebarOpen,
  levels,
  selectedLevel,
  setSelectedLevel,
  durations,
  selectedDuration,
  setSelectedDuration,
  ratings,
  selectedRating,
  setSelectedRating,
}: CoursesSidebarProps) => {
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.aside
          initial={{ opacity: 0, x: isAr ? 30 : -30, width: 0 }}
          animate={{ opacity: 1, x: 0, width: 300 }}
          exit={{ opacity: 0, x: isAr ? 30 : -30, width: 0 }}
          className="hidden lg:block shrink-0 font-mono"
        >
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border-2 border-emerald-500/10 sticky top-48">
            <div className="flex items-center justify-between mb-8 border-b border-emerald-500/10 pb-4">
              <h3 className="text-lg font-black text-emerald-500 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                {isAr ? "المعامل" : "FILTERS"}
              </h3>
              <button
                onClick={() => {
                  setSelectedLevel("All");
                  setSelectedDuration("All");
                  setSelectedRating(0);
                }}
                className="text-emerald-500/40 text-[10px] hover:text-emerald-500 transition-colors uppercase tracking-widest"
              >
                {isAr ? "تصفير" : "RESET_ALL"}
              </button>
            </div>

            {/* Level Filter */}
            <div className="mb-8">
              <h4 className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <BarChart3 className="w-3 h-3" />
                {isAr ? "المستوى" : "LEVEL_COMPLEXITY"}
              </h4>
              <div className="space-y-1.5">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded border-2 transition-all text-xs uppercase tracking-tighter",
                      selectedLevel === level
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                        : "bg-transparent border-transparent text-emerald-500/40 hover:bg-emerald-500/5"
                    )}
                  >
                    <span>{level === "All" ? "ALL_LEVELS" : level}</span>
                    {selectedLevel === level && (
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div className="mb-8">
              <h4 className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Clock className="w-3 h-3" />
                {isAr ? "المدة" : "RUNTIME_DURATION"}
              </h4>
              <div className="space-y-1.5">
                {durations.map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded border-2 transition-all text-xs uppercase tracking-tighter",
                      selectedDuration === duration
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                        : "bg-transparent border-transparent text-emerald-500/40 hover:bg-emerald-500/5"
                    )}
                  >
                    <span>
                      {duration === "All" ? "ANY_DURATION" : duration}
                    </span>
                    {selectedDuration === duration && (
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h4 className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Star className="w-3 h-3" />
                {isAr ? "التقييم" : "USER_FEEDBACK"}
              </h4>
              <div className="space-y-1.5">
                {ratings.map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded border-2 transition-all text-xs uppercase tracking-tighter",
                      selectedRating === rating
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                        : "bg-transparent border-transparent text-emerald-500/40 hover:bg-emerald-500/5"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{rating}.0+</span>
                      <div className="flex gap-0.5">
                        {[...Array(rating)].map((_, i) => (
                          <div key={i} className="w-1 h-3 bg-emerald-500/40" />
                        ))}
                      </div>
                    </div>
                    {selectedRating === rating && (
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

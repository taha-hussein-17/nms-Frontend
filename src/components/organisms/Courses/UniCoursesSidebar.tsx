import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Star,
  GraduationCap,
  Library,
  Target,
  Filter,
} from "lucide-react";
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

export const UniCoursesSidebar = ({
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
          initial={{ opacity: 0, x: isAr ? 20 : -20 }}
          animate={{ opacity: 1, x: 0, width: 300 }}
          exit={{ opacity: 0, x: isAr ? 20 : -20 }}
          className="hidden lg:block shrink-0 font-sans"
        >
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 sticky top-48 shadow-sm">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Filter className="w-5 h-5 text-maroon-600" />
                {isAr ? "معايير البحث" : "Search Criteria"}
              </h3>
              <button
                onClick={() => {
                  setSelectedLevel("All");
                  setSelectedDuration("All");
                  setSelectedRating(0);
                }}
                className="text-maroon-600 text-xs font-semibold hover:text-maroon-700 transition-colors"
              >
                {isAr ? "تصفير الكل" : "Clear All"}
              </button>
            </div>

            {/* Level Filter */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Target className="w-4 h-4" />
                {isAr ? "المستوى الدراسي" : "ACADEMIC_LEVEL"}
              </h4>
              <div className="space-y-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-2.5 rounded-lg border transition-all text-sm font-medium",
                      selectedLevel === level
                        ? "bg-maroon-600 border-maroon-600 text-white shadow-md"
                        : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-maroon-600/30"
                    )}
                  >
                    <span>
                      {level === "All"
                        ? isAr
                          ? "جميع المستويات"
                          : "ALL_LEVELS"
                        : level}
                    </span>
                    {selectedLevel === level && (
                      <GraduationCap className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {isAr ? "المدة الزمنية" : "COURSE_DURATION"}
              </h4>
              <div className="space-y-2">
                {durations.map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-2.5 rounded-lg border transition-all text-sm font-medium",
                      selectedDuration === duration
                        ? "bg-maroon-600 border-maroon-600 text-white shadow-md"
                        : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-maroon-600/30"
                    )}
                  >
                    <span>
                      {duration === "All"
                        ? isAr
                          ? "أي مدة"
                          : "ANY_DURATION"
                        : duration}
                    </span>
                    {selectedDuration === duration && (
                      <Library className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Star className="w-4 h-4" />
                {isAr ? "تقييم الأكاديميين" : "ACADEMIC_RATING"}
              </h4>
              <div className="space-y-2">
                {ratings.map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-2.5 rounded-lg border transition-all text-sm font-medium",
                      selectedRating === rating
                        ? "bg-maroon-600 border-maroon-600 text-white shadow-md"
                        : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-maroon-600/30"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{rating}.0+</span>
                      <div className="flex gap-0.5">
                        {[...Array(rating)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1.5 h-3 bg-maroon-600/40 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                    {selectedRating === rating && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
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

import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Clock, Star, CheckCircle2, RotateCcw } from "lucide-react";
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

export const KidsCoursesSidebar = ({
  isAr,
  t,
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
          initial={{ opacity: 0, x: isAr ? 50 : -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1, width: 320 }}
          exit={{ opacity: 0, x: isAr ? 50 : -50, scale: 0.9, width: 0 }}
          className="hidden lg:block shrink-0"
        >
          <div className="bg-white p-8 rounded-[3rem] border-4 border-primary/10 sticky top-48 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black text-slate-800 font-din">
                {isAr ? "خيارات البحث" : "Search Options"}
              </h3>
              <motion.button
                whileHover={{ rotate: -180 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setSelectedLevel("All");
                  setSelectedDuration("All");
                  setSelectedRating(0);
                }}
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Level Filter */}
            <div className="mb-10">
              <h4 className="text-base font-black text-primary mb-5 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BarChart3 className="w-5 h-5" />
                </div>
                {isAr ? "المستوى الدراسي" : "Learning Level"}
              </h4>
              <div className="space-y-3">
                {levels.map((level) => (
                  <motion.button
                    key={level}
                    whileHover={{ x: isAr ? -5 : 5 }}
                    onClick={() => setSelectedLevel(level)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all font-black text-sm",
                      selectedLevel === level
                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                        : "bg-slate-50 border-slate-100 text-slate-500 hover:border-primary/30"
                    )}
                  >
                    {t(
                      `courses.filters.${level === "All" ? "all_levels" : level}`
                    )}
                    {selectedLevel === level && (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div className="mb-10">
              <h4 className="text-base font-black text-accent mb-5 flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                {isAr ? "مدة المغامرة" : "Adventure Time"}
              </h4>
              <div className="space-y-3">
                {durations.map((duration) => (
                  <motion.button
                    key={duration}
                    whileHover={{ x: isAr ? -5 : 5 }}
                    onClick={() => setSelectedDuration(duration)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all font-black text-sm",
                      selectedDuration === duration
                        ? "bg-accent border-accent text-white shadow-lg shadow-accent/30"
                        : "bg-slate-50 border-slate-100 text-slate-500 hover:border-accent/30"
                    )}
                  >
                    {t(
                      `courses.filters.${duration === "All" ? "all_levels" : duration}`
                    )}
                    {selectedDuration === duration && (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h4 className="text-base font-black text-yellow-500 mb-5 flex items-center gap-3">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <Star className="w-5 h-5 fill-yellow-500" />
                </div>
                {isAr ? "التقييم بالنجوم" : "Star Rating"}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {ratings.map((rating) => (
                  <motion.button
                    key={rating}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedRating(rating)}
                    className={cn(
                      "flex items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all font-black text-base",
                      selectedRating === rating
                        ? "bg-yellow-500 border-yellow-500 text-white shadow-lg shadow-yellow-500/30"
                        : "bg-slate-50 border-slate-100 text-slate-500 hover:border-yellow-500/30"
                    )}
                  >
                    <span>{rating}+</span>
                    <Star
                      className={cn(
                        "w-4 h-4",
                        selectedRating === rating
                          ? "fill-white"
                          : "fill-yellow-500"
                      )}
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

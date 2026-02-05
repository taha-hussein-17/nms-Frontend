import { motion, AnimatePresence } from "framer-motion";
import { Clock, Star, BookOpen, Scroll, Award } from "lucide-react";
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

export const AzhariCoursesSidebar = ({
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, width: 320 }}
          exit={{ opacity: 0, y: 20 }}
          className="hidden lg:block shrink-0 font-serif"
        >
          <div className="bg-[#fcfbf7] dark:bg-[#1a1c14] p-8 rounded-2xl border-4 border-[#8b7355]/20 sticky top-48 shadow-[0_10px_40px_rgba(139,115,85,0.1)] relative overflow-hidden">
            {/* Islamic Geometric Pattern Background Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 20h20l-15 12 5 20-15-12-15 12 5-20-15-12h20z' fill='%238b7355' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            />

            <div className="flex items-center justify-between mb-10 border-b-2 border-[#8b7355]/10 pb-6 relative z-10">
              <h3 className="text-2xl font-bold text-[#2d3a2d] dark:text-[#e2e8e2] flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#8b7355]" />
                {isAr ? "تصفية العلوم" : "Filter Sciences"}
              </h3>
              <button
                onClick={() => {
                  setSelectedLevel("All");
                  setSelectedDuration("All");
                  setSelectedRating(0);
                }}
                className="text-[#8b7355] text-sm font-bold hover:text-[#5d4d39] transition-colors border-b border-transparent hover:border-[#8b7355]"
              >
                {isAr ? "إعادة ضبط" : "Reset"}
              </button>
            </div>

            {/* Level Filter */}
            <div className="mb-10 relative z-10">
              <h4 className="text-xs font-bold text-[#8b7355] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                <Scroll className="w-4 h-4" />
                {isAr ? "الدرجة العلمية" : "KNOWLEDGE_LEVEL"}
              </h4>
              <div className="space-y-3">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={cn(
                      "w-full flex items-center justify-between px-5 py-3.5 rounded-lg border-2 transition-all text-sm font-bold",
                      selectedLevel === level
                        ? "bg-[#2d3a2d] border-[#2d3a2d] text-[#fcfbf7] shadow-lg"
                        : "bg-white/50 dark:bg-black/20 border-[#8b7355]/10 text-[#2d3a2d]/60 dark:text-[#e2e8e2]/60 hover:border-[#8b7355]/30 hover:bg-[#8b7355]/5"
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
                      <div className="w-2 h-2 rotate-45 bg-[#8b7355]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div className="mb-10 relative z-10">
              <h4 className="text-xs font-bold text-[#8b7355] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                <Clock className="w-4 h-4" />
                {isAr ? "مدة الطلب" : "STUDY_DURATION"}
              </h4>
              <div className="space-y-3">
                {durations.map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={cn(
                      "w-full flex items-center justify-between px-5 py-3.5 rounded-lg border-2 transition-all text-sm font-bold",
                      selectedDuration === duration
                        ? "bg-[#2d3a2d] border-[#2d3a2d] text-[#fcfbf7] shadow-lg"
                        : "bg-white/50 dark:bg-black/20 border-[#8b7355]/10 text-[#2d3a2d]/60 dark:text-[#e2e8e2]/60 hover:border-[#8b7355]/30 hover:bg-[#8b7355]/5"
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
                      <div className="w-2 h-2 rotate-45 bg-[#8b7355]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="relative z-10">
              <h4 className="text-xs font-bold text-[#8b7355] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                <Award className="w-4 h-4" />
                {isAr ? "تزكية الطلاب" : "STUDENT_RATING"}
              </h4>
              <div className="space-y-3">
                {ratings.map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={cn(
                      "w-full flex items-center justify-between px-5 py-3.5 rounded-lg border-2 transition-all text-sm font-bold",
                      selectedRating === rating
                        ? "bg-[#2d3a2d] border-[#2d3a2d] text-[#fcfbf7] shadow-lg"
                        : "bg-white/50 dark:bg-black/20 border-[#8b7355]/10 text-[#2d3a2d]/60 dark:text-[#e2e8e2]/60 hover:border-[#8b7355]/30 hover:bg-[#8b7355]/5"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{rating}.0+</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-3 h-3",
                              i < rating
                                ? "text-[#8b7355] fill-[#8b7355]"
                                : "text-[#8b7355]/20"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    {selectedRating === rating && (
                      <div className="w-2 h-2 rotate-45 bg-[#8b7355]" />
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

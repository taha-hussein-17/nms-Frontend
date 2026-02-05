import { motion, AnimatePresence } from "framer-motion";
import { Scroll, PenTool } from "lucide-react";
import { CourseCard } from "../../molecules/CourseCard";
import { cn } from "../../../utils/cn";
import { type Course } from "../../../types";

interface CoursesListProps {
  isAr: boolean;
  filteredCourses: Course[];
  viewMode: "grid" | "list";
}

export const AzhariCoursesList = ({
  isAr,
  filteredCourses,
  viewMode,
}: CoursesListProps) => {
  return (
    <div className="flex-1 font-serif">
      {filteredCourses.length > 0 ? (
        <div
          className={cn(
            "grid gap-8 transition-all duration-500",
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <CourseCard
                  course={course}
                  variant={viewMode === "list" ? "horizontal" : "vertical"}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#fcfbf7] dark:bg-[#1a1c14] border-4 border-[#8b7355]/20 rounded-2xl p-20 text-center relative overflow-hidden"
        >
          {/* Decorative patterns */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b7355]/5 rounded-bl-[100px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8b7355]/5 rounded-tr-[100px]" />

          <div className="w-24 h-24 bg-[#8b7355]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Scroll className="w-12 h-12 text-[#8b7355]" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-[#2d3a2d] dark:text-[#e2e8e2] mb-4">
              {isAr ? "لم نجد ما تبحث عنه من العلوم" : "Knowledge Not Found"}
            </h3>
            <p className="text-[#8b7355]/80 text-lg max-w-md mx-auto leading-relaxed italic">
              {isAr
                ? "ربما يكون العلم الذي تبحث عنه متاحاً تحت مسمى آخر، حاول تغيير كلمات البحث."
                : "The knowledge you seek might be available under a different name. Please try adjusting your search."}
            </p>
            <div className="mt-10 flex items-center justify-center gap-2 text-[#8b7355]/40">
              <div className="h-[1px] w-12 bg-current" />
              <PenTool className="w-4 h-4" />
              <div className="h-[1px] w-12 bg-current" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

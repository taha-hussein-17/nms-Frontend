import { motion, AnimatePresence } from "framer-motion";
import { Library, Search } from "lucide-react";
import { CourseCard } from "../../molecules/CourseCard";
import { cn } from "../../../utils/cn";
import { type Course } from "../../../types";

interface CoursesListProps {
  isAr: boolean;
  filteredCourses: Course[];
  viewMode: "grid" | "list";
}

export const UniCoursesList = ({
  isAr,
  filteredCourses,
  viewMode,
}: CoursesListProps) => {
  return (
    <div className="flex-1 font-sans">
      {filteredCourses.length > 0 ? (
        <div
          className={cn(
            "grid gap-6 transition-all duration-500",
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-20 text-center shadow-sm"
        >
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Library className="w-10 h-10 text-maroon-600" />
          </div>

          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              {isAr
                ? "لم يتم العثور على مقررات دراسية"
                : "No Academic Courses Found"}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              {isAr
                ? "نأسف، لم نتمكن من العثور على نتائج تطابق معايير البحث الحالية في السجل الأكاديمي."
                : "We couldn't find any results matching your current search criteria in the academic registry."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-6 py-2.5 bg-maroon-600 text-white rounded-lg font-semibold hover:bg-maroon-700 transition-colors"
              >
                <Search className="w-4 h-4" />
                {isAr ? "محاولة بحث جديد" : "New Search"}
              </button>
              <button className="px-6 py-2.5 text-slate-600 dark:text-slate-400 font-semibold hover:text-maroon-600 transition-colors">
                {isAr ? "تصفح جميع الأقسام" : "Browse All Departments"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

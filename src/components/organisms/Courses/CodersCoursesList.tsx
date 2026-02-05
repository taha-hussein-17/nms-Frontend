import { motion, AnimatePresence } from "framer-motion";
import { Database } from "lucide-react";
import { CourseCard } from "../../molecules/CourseCard";
import { cn } from "../../../utils/cn";
import { type Course } from "../../../types";

interface CoursesListProps {
  isAr: boolean;
  filteredCourses: Course[];
  viewMode: "grid" | "list";
}

export const CodersCoursesList = ({
  isAr,
  filteredCourses,
  viewMode,
}: CoursesListProps) => {
  return (
    <div className="flex-1 font-mono">
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="relative group"
              >
                {/* Cyberpunk corner accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-all duration-300 z-10" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-all duration-300 z-10" />

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
          className="bg-black/40 backdrop-blur-md border-2 border-emerald-500/10 rounded-lg p-20 text-center relative overflow-hidden"
        >
          {/* Matrix-like falling text effect would be cool here, but for now just stylized content */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>

          <div className="w-24 h-24 bg-emerald-500/10 rounded-lg border border-emerald-500/20 flex items-center justify-center mx-auto mb-8 group">
            <Database className="w-12 h-12 text-emerald-500 group-hover:animate-pulse" />
          </div>

          <div className="space-y-4 relative z-10">
            <h3 className="text-2xl font-black text-emerald-500 uppercase tracking-tighter">
              {isAr ? "خطأ: لم يتم العثور على بيانات" : "404: DATA_NOT_FOUND"}
            </h3>
            <p className="text-emerald-500/60 text-sm max-w-md mx-auto leading-relaxed">
              {isAr
                ? "تعذر تحديد موقع الكورسات المطلوبة في قاعدة البيانات. يرجى محاولة تعديل معايير البحث."
                : "Unable to locate requested courses in the primary database. Please adjust your query parameters."}
            </p>
            <div className="pt-6">
              <code className="text-[10px] text-emerald-500/40 bg-emerald-500/5 px-4 py-2 rounded">
                SYSTEM_STATUS: IDLE_WAITING_FOR_INPUT
              </code>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

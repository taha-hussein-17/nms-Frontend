import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CourseCard } from "../../molecules/CourseCard";
import { cn } from "../../../utils/cn";
import { type Course } from "../../../types";

interface CoursesListProps {
  isAr: boolean;
  filteredCourses: Course[];
  viewMode: "grid" | "list";
}

export const KidsCoursesList = ({
  isAr,
  filteredCourses,
  viewMode,
}: CoursesListProps) => {
  return (
    <div className="flex-1">
      {filteredCourses.length > 0 ? (
        <div
          className={cn(
            "grid gap-10 transition-all duration-500",
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 1 : -1,
                  transition: { duration: 0.2 },
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[4rem] p-20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-dashed border-primary/20 relative overflow-hidden"
        >
          {/* Playful background elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-28 h-28 bg-gradient-to-br from-primary to-accent rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20"
          >
            <Sparkles className="w-14 h-14 text-white" />
          </motion.div>

          <h3 className="text-4xl font-black text-slate-800 mb-4 font-din">
            {isAr ? "أوه! لا توجد مغامرات هنا" : "Oops! No adventures here"}
          </h3>
          <p className="text-slate-500 text-xl font-medium max-w-md mx-auto">
            {isAr
              ? "جرب البحث بكلمات أخرى لتجد دروساً ممتعة!"
              : "Try searching for other words to find fun lessons!"}
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-10 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/30"
            onClick={() => window.location.reload()}
          >
            {isAr ? "إعادة البحث" : "Search Again"}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

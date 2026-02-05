import { useTranslation } from "react-i18next";
import { CourseCard } from "../../../molecules/CourseCard";
import { getMockCourses } from "../../../../data/mockData";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "../../../atoms/Button";
export const KidsFeaturedCourses = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredCourses = useMemo(
    () =>
      getMockCourses(i18n.language)
        .slice(0, 6)
        .map((course) => ({
          ...course,
          students: Number(course.students),
        })),
    [i18n.language]
  );

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % featuredCourses.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length
    );

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-accent text-accent-foreground font-black shadow-lg transform rotate-2"
          >
            <Sparkles className="w-6 h-6" />
            <span className="text-xl uppercase">
              {isAr ? "أجمل الكورسات! 🌈" : "Best Courses! 🌈"}
            </span>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black text-primary drop-shadow-sm">
            {isAr ? "اختر مغامرتك القادمة" : "Choose Your Next Adventure"}
          </h2>
        </div>

        <div className="relative px-12 lg:px-24">
          <div className="flex items-center justify-center gap-8 overflow-hidden py-10">
            <AnimatePresence mode="popLayout">
              {featuredCourses.slice(currentIndex, currentIndex + 3).length <
                3 && currentIndex + 3 > featuredCourses.length
                ? // Handle wrap around if needed, but for simplicity let's just show 3
                  [...featuredCourses, ...featuredCourses]
                    .slice(currentIndex, currentIndex + 3)
                    .map((course, i) => (
                      <motion.div
                        key={`${course.id}-${currentIndex + i}`}
                        layout
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                          x: i ? -100 : 100,
                        }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: i ? 100 : -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-[400px] shrink-0"
                      >
                        <CourseCard course={course} />
                      </motion.div>
                    ))
                : featuredCourses
                    .slice(currentIndex, currentIndex + 3)
                    .map((course, i) => (
                      <motion.div
                        key={`${course.id}-${currentIndex + i}`}
                        layout
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                          x: i ? -100 : 100,
                        }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: i ? 100 : -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-[400px] shrink-0"
                      >
                        <CourseCard course={course} />
                      </motion.div>
                    ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-8">
            <Button
              variant="secondary"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-16 h-16 shadow-xl border-4 border-white bg-primary text-white hover:bg-primary/90"
            >
              <ChevronLeft size={32} />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-8">
            <Button
              variant="secondary"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-16 h-16 shadow-xl border-4 border-white bg-primary text-white hover:bg-primary/90"
            >
              <ChevronRight size={32} />
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="h-16 px-16 text-2xl font-black rounded-full bg-secondary hover:bg-secondary/90 shadow-[0_10px_0_0_#3bbbb2] active:shadow-none active:translate-y-2 transition-all"
          >
            {isAr ? "عرض كل الكورسات 🚀" : "View All Courses 🚀"}
          </Button>
        </div>
      </div>
    </section>
  );
};

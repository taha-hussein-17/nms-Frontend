import { useTranslation } from "react-i18next";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";
import { CourseCard } from "../../../molecules/CourseCard";
import { getMockCourses } from "../../../../data/mockData";
import { useMemo } from "react";
import { ArrowRight, Terminal, Github } from "lucide-react";
import { motion } from "framer-motion";

export const CodersFeaturedCourses = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const featuredCourses = useMemo(
    () =>
      getMockCourses(i18n.language)
        .slice(0, 3)
        .map((course) => ({
          ...course,
          students: Number(course.students),
        })),
    [i18n.language]
  );

  return (
    <section className="py-24 bg-black font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isRTL ? "text-right" : "text-left"}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-green-500/30 bg-green-500/10 text-xs text-green-500 mb-4">
              <Terminal className="w-3 h-3" />
              <span>git fetch origin courses/latest</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-green-400">
              {"> "} {t("home.latest_courses")}
            </h2>
            <p className="text-lg text-green-600/80 max-w-xl">
              {t("home.explore_best")}
            </p>
          </motion.div>

          <Button
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-mono"
          >
            <Github className="w-4 h-4 mr-2" />
            cd all-courses/
            <ArrowRight className={cn("ml-2 w-4 h-4", isRTL && "rotate-180")} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="coders-course-card"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .coders-course-card :global(.glass) {
          background: #111 !important;
          border-color: rgba(34, 197, 94, 0.2) !important;
          border-radius: 4px !important;
        }
        .coders-course-card :global(img) {
          filter: grayscale(1) !important;
        }
        .coders-course-card :global(.group:hover img) {
          filter: grayscale(0) !important;
        }
      `}</style>
    </section>
  );
};

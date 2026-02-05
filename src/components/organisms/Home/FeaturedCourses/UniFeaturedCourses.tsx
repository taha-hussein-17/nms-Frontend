import { useTranslation } from "react-i18next";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";
import { CourseCard } from "../../../molecules/CourseCard";
import { getMockCourses } from "../../../../data/mockData";
import { useMemo } from "react";
import { ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const UniFeaturedCourses = () => {
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
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn("max-w-2xl", isRTL ? "text-right" : "text-left")}
          >
            <div className="flex items-center gap-3 text-maroon-700 dark:text-maroon-500 font-bold mb-4 uppercase tracking-widest text-sm">
              <GraduationCap className="w-6 h-6" />
              <span>{isRTL ? "البرامج الأكاديمية المتاحة" : "Available Academic Programs"}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8">
              {t("home.latest_courses")}
            </h2>
            <div className="h-1.5 w-24 bg-maroon-700" />
          </motion.div>

          <Button
            variant="primary"
            className="bg-maroon-700 hover:bg-maroon-800 text-white rounded-none h-16 px-12 text-lg font-bold shadow-xl transition-all hover:-translate-y-1"
          >
            {isRTL ? "استعراض المساقات" : "Explore Courses"}
            <ArrowRight className={cn("ml-3 w-5 h-5", isRTL && "rotate-180")} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="uni-course-card"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .uni-course-card :global(.glass) {
          background: white !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 0 !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
        }
        .dark .uni-course-card :global(.glass) {
          background: #1e293b !important;
          border-color: #334155 !important;
        }
        .uni-course-card :global(.group:hover .glass) {
          border-color: #800000 !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </section>
  );
};

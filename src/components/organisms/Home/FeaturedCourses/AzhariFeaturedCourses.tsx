import { useTranslation } from "react-i18next";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";
import { CourseCard } from "../../../molecules/CourseCard";
import { getMockCourses } from "../../../../data/mockData";
import { useMemo } from "react";
import { ArrowRight, Book } from "lucide-react";
import { motion } from "framer-motion";

export const AzhariFeaturedCourses = () => {
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
    <section className="py-24 bg-[#FAF9F6] dark:bg-[#1A1814] relative overflow-hidden">
       {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23064e3b' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("max-w-2xl", isRTL ? "text-right font-serif-ar" : "text-left font-serif")}
          >
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-500 mb-4">
              <Book className="w-5 h-5" />
              <span className="text-sm font-bold tracking-[0.3em] uppercase">
                {isRTL ? "جديد المتون والدروس" : "New Texts & Lessons"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              {t("home.latest_courses")}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed italic">
              {t("home.explore_best")}
            </p>
          </motion.div>

          <Button
            variant="outline"
            className="border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white rounded-none font-bold px-10"
          >
            {isRTL ? "تصفح المكتبة كاملة" : "Browse Full Library"}
            <ArrowRight className={cn("ml-2 w-4 h-4", isRTL && "rotate-180")} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="azhari-course-card"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .azhari-course-card :global(.glass) {
          background: white !important;
          border-top: 4px solid #065f46 !important;
          border-radius: 0 !important;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1) !important;
        }
        .dark .azhari-course-card :global(.glass) {
          background: #25231F !important;
          border-color: #10b981 !important;
        }
      `}</style>
    </section>
  );
};

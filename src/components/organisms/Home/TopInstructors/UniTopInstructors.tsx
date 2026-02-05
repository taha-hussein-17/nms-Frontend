import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, CheckCircle } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { getMockInstructors } from "../../../../data/mockData";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../atoms/Button";
import { ROUTES } from "../../../../constants/routes";

export const UniTopInstructors = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const instructors = useMemo(
    () => getMockInstructors(i18n.language).slice(0, 4),
    [i18n.language]
  );

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-maroon-600 to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn("flex-1", isRTL ? "text-right" : "text-left")}
          >
            <div className="flex items-center gap-3 text-maroon-700 dark:text-maroon-500 font-bold mb-4 uppercase tracking-[0.2em] text-sm">
              <GraduationCap className="w-6 h-6" />
              <span>{isRTL ? "هيئة التدريس الأكاديمية" : "Academic Faculty"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
              {t("home.top_instructors")}
            </h2>
            <div className="h-1.5 w-24 bg-maroon-600 mb-8" />
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {t("home.learn_from_best")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <Link to={ROUTES.INSTRUCTORS}>
              <Button
                variant="primary"
                className="bg-maroon-700 hover:bg-maroon-800 text-white rounded-none px-10 py-7 text-lg shadow-xl"
              >
                {isRTL ? "تصفح الدليل الأكاديمي" : "Browse Academic Directory"}
                <ArrowRight className={cn("ml-2 w-5 h-5", isRTL && "rotate-180")} />
              </Button>
            </Link>
            <p className="text-sm text-slate-500 font-medium">
              {isRTL ? "أكثر من ٢٠٠ أستاذ دكتور متخصص" : "Over 200 specialized professors"}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((ins, i) => (
            <motion.div
              key={ins.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="w-full sm:w-48 h-64 sm:h-auto relative overflow-hidden shrink-0">
                  <img
                    src={ins.image}
                    alt={ins.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-maroon-700 text-white text-[10px] font-bold px-2 py-1 uppercase">
                    Faculty Member
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 text-maroon-600 dark:text-maroon-400 text-xs font-bold mb-2">
                    <Award className="w-4 h-4" />
                    <span>{ins.specialty.toUpperCase()}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-maroon-700 transition-colors">
                    {ins.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>{isRTL ? "معتمد أكاديمياً" : "Academically Certified"}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>{isRTL ? "مستشار في مجاله" : "Consultant in their field"}</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-xl font-black text-slate-900 dark:text-white">{ins.rating}</span>
                      <span className="text-xs text-slate-400">/ 5.0</span>
                    </div>
                    <Link to={`/instructor/${ins.id}`} className="text-maroon-700 dark:text-maroon-500 text-sm font-bold hover:underline">
                      {isRTL ? "عرض السيرة الذاتية" : "View Curriculum Vitae"}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

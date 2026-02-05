import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Star, PenTool } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { getMockInstructors } from "../../../../data/mockData";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../atoms/Button";
import { ROUTES } from "../../../../constants/routes";

export const AzhariTopInstructors = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const instructors = useMemo(
    () => getMockInstructors(i18n.language).slice(0, 4),
    [i18n.language]
  );

  return (
    <section className="py-20 bg-[#FDFBF7] dark:bg-[#1A1814] relative overflow-hidden">
      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30-15 30-15-30z' fill='%238B4513' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("max-w-2xl", isRTL ? "text-right font-serif-ar" : "text-left font-serif")}
          >
            <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-500 mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">
                {isRTL ? "نخبة العلماء والمعلمين" : "Elite Scholars & Teachers"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              {t("home.top_instructors")}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed italic">
              " {t("home.learn_from_best")} "
            </p>
          </motion.div>

          <Link to={ROUTES.INSTRUCTORS}>
            <Button
              variant="outline"
              className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white rounded-none border-2 font-bold px-8"
            >
              {isRTL ? "عرض جميع المعلمين" : "View All Teachers"}
              <ArrowRight className={cn("ml-2 w-4 h-4", isRTL && "rotate-180")} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {instructors.map((ins, i) => (
            <motion.div
              key={ins.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="group relative bg-white dark:bg-[#25231F] p-1 border-t-4 border-emerald-700 shadow-xl hover:-translate-y-2 transition-transform duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={ins.image}
                    alt={ins.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-sm italic">
                      {isRTL ? "أكثر من ١٥ عاماً من الخبرة في تدريس العلوم الشرعية" : "Over 15 years of experience in teaching Islamic sciences"}
                    </p>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <PenTool className="w-5 h-5 text-emerald-700/30" />
                  </div>
                  <h3 className={cn("text-xl font-bold text-slate-900 dark:text-white mb-2", isRTL ? "font-serif-ar" : "font-serif")}>
                    {ins.name}
                  </h3>
                  <p className="text-emerald-700 dark:text-emerald-500 font-bold text-sm mb-4">
                    {ins.specialty}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <Star key={starIdx} className={cn("w-3 h-3 fill-current", starIdx >= Math.floor(ins.rating) && "opacity-30")} />
                    ))}
                    <span className="text-xs ml-2 text-slate-400">({ins.rating})</span>
                  </div>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-700/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-700/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

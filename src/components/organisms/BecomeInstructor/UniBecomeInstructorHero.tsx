import { motion } from "framer-motion";
import { GraduationCap, Library, Award } from "lucide-react";
import { type TFunction } from "i18next";

interface BecomeInstructorHeroProps {
  isAr: boolean;
  t: TFunction;
}

export const UniBecomeInstructorHero = ({
  isAr,
}: BecomeInstructorHeroProps) => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden font-sans bg-slate-50 dark:bg-slate-950">
      {/* Professional subtle pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#641b1b_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-maroon-600/10 border border-maroon-600/20 rounded-full mb-8"
          >
            <Award className="w-4 h-4 text-maroon-600" />
            <span className="text-maroon-600 text-xs font-bold uppercase tracking-wider">
              {isAr ? "التميز الأكاديمي" : "Academic Excellence"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight"
          >
            {isAr
              ? "شارك في تشكيل المستقبل الأكاديمي"
              : "Shape the Future of Higher Education"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {isAr
              ? "نحن نبحث عن الأكاديميين والخبراء المتميزين لتقديم دورات جامعية متقدمة. انضم إلى هيئة التدريس العالمية لدينا وساهم في تمكين الطلاب حول العالم."
              : "We are seeking distinguished academics and experts to deliver advanced university-level courses. Join our global faculty and contribute to empowering students worldwide."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <button className="px-10 py-4 bg-maroon-600 text-white font-bold text-lg rounded-lg hover:bg-maroon-700 transition-all shadow-lg shadow-maroon-600/20 flex items-center gap-3">
              <GraduationCap className="w-5 h-5" />
              {isAr ? "تقديم طلب انضمام" : "Apply for Faculty"}
            </button>
            <button className="px-10 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-lg rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-all flex items-center gap-3">
              <Library className="w-5 h-5" />
              {isAr ? "دليل المحاضرين" : "Faculty Handbook"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

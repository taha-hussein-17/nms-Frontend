import { useTranslation } from "react-i18next";
import { GraduationCap, ArrowRight, BookMarked, Globe } from "lucide-react";
import { Button } from "../../../atoms/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

export const UniFinalCTA = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 lg:p-24 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle University Shield background */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <GraduationCap size={400} />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-maroon-700 dark:text-maroon-500 font-bold uppercase tracking-widest text-sm">
                <Globe className="w-5 h-5" />
                <span>
                  {isAr ? "مستقبل أكاديمي واعد" : "Promising Academic Future"}
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                {isAr
                  ? "التحق بجامعتنا الرقمية اليوم"
                  : "Enroll in Our Digital University Today"}
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {isAr
                  ? "ابدأ مسيرتك الأكاديمية مع أفضل البرامج التعليمية المعتمدة عالمياً والأساتذة المتميزين."
                  : "Start your academic journey with the best globally accredited educational programs and distinguished professors."}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to={ROUTES.REGISTER}>
                  <Button
                    size="lg"
                    className="bg-maroon-700 text-white hover:bg-maroon-800 px-10 h-16 rounded-sm font-bold text-lg flex items-center gap-2"
                  >
                    <span>
                      {isAr ? "قدم طلب الالتحاق" : "Apply for Admission"}
                    </span>
                    <ArrowRight className={isAr ? "rotate-180" : ""} />
                  </Button>
                </Link>
                <Link to={ROUTES.COURSES}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-300 dark:border-slate-700 px-10 h-16 rounded-sm font-bold text-lg flex items-center gap-2"
                  >
                    <BookMarked className="w-5 h-5" />
                    <span>{isAr ? "تصفح الكليات" : "Browse Colleges"}</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-800 p-8 border border-slate-100 dark:border-slate-700">
                  <h4 className="text-3xl font-black text-maroon-700 mb-1">
                    98%
                  </h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Employment Rate
                  </p>
                </div>
                <div className="bg-slate-900 p-8 text-white">
                  <h4 className="text-3xl font-black text-white mb-1">50+</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Accredited Programs
                  </p>
                </div>
              </div>
              <div className="pt-12 space-y-6">
                <div className="bg-maroon-700 p-8 text-white">
                  <h4 className="text-3xl font-black text-white mb-1">12k+</h4>
                  <p className="text-xs text-white/60 font-bold uppercase tracking-wider">
                    Active Alumni
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-8 border border-slate-100 dark:border-slate-700">
                  <h4 className="text-3xl font-black text-maroon-700 mb-1">
                    200+
                  </h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Expert Faculty
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

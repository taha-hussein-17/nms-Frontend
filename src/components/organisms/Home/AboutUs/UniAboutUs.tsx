import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Globe2, Users } from "lucide-react";
// import { cn } from "../../../../utils/cn";

export const UniAboutUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="flex items-center gap-3 text-maroon-700 dark:text-maroon-500 font-bold mb-4 uppercase tracking-[0.2em] text-sm">
                <GraduationCap className="w-6 h-6" />
                <span>{isRTL ? "عن الأكاديمية" : "About the Academy"}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {t("home.about.title") || "Excellence in Higher Education"}
              </h2>
              <div className="h-1.5 w-24 bg-maroon-700 mt-6" />
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              {isRTL
                ? "نسعى لتقديم تعليم أكاديمي متميز يواكب المعايير العالمية ويفتح آفاقاً جديدة لمستقبل طلابنا المهني."
                : "We strive to provide distinguished academic education that meets global standards and opens new horizons for our students' professional future."}
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-maroon-700 dark:text-maroon-500 font-bold">
                  <Award className="w-5 h-5" />
                  <span>Accredited</span>
                </div>
                <p className="text-sm text-slate-500">
                  Recognized by top institutions
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-maroon-700 dark:text-maroon-500 font-bold">
                  <Globe2 className="w-5 h-5" />
                  <span>Global</span>
                </div>
                <p className="text-sm text-slate-500">
                  Students from 50+ countries
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=600&fit=crop"
                  alt="Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-maroon-700 p-8 text-white">
                <BookOpen className="w-10 h-10 mb-4" />
                <h4 className="text-2xl font-bold">500+</h4>
                <p className="text-sm opacity-80">Research Papers</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900 p-8 text-white">
                <Users className="w-10 h-10 mb-4 text-maroon-500" />
                <h4 className="text-2xl font-bold">12k+</h4>
                <p className="text-sm opacity-80">Active Students</p>
              </div>
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?w=400&h=600&fit=crop"
                  alt="Students"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

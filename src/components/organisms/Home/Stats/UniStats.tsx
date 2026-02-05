import { useTranslation } from "react-i18next";
import { BarChart3, Globe2, FileText, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export const UniStats = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const stats = [
    {
      label: t("home.stats.courses"),
      value: "500+",
      sub: isRTL ? "برنامج أكاديمي" : "Academic Programs",
      icon: FileText,
    },
    {
      label: t("home.stats.instructors"),
      value: "120+",
      sub: isRTL ? "عضو هيئة تدريس" : "Faculty Members",
      icon: UserCheck,
    },
    {
      label: t("home.stats.hours"),
      value: "10k+",
      sub: isRTL ? "ساعة تعليمية" : "Learning Hours",
      icon: Globe2,
    },
    {
      label: t("home.stats.rating"),
      value: "98%",
      sub: isRTL ? "رضا الطلاب" : "Student Satisfaction",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x dark:divide-slate-800 rtl:divide-x-reverse">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right"
            >
              <stat.icon className="w-8 h-8 text-maroon-700 dark:text-maroon-500 mb-6" />
              <div className="space-y-1">
                <div className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-maroon-700 dark:text-maroon-500 font-bold text-sm">
                  {stat.label}
                </div>
                <p className="text-slate-400 text-xs font-medium">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { User, Clock, Users, Star, PlayCircle } from "lucide-react";
import { cn } from "../../../../utils/cn";

export const AzhariClasses = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const liveMajlis = [
    {
      id: 1,
      title: isRTL
        ? "شرح كتاب رياض الصالحين"
        : "Explanation of Riyadh al-Salihin",
      instructor: isRTL ? "د. محمد عثمان" : "Dr. Mohamed Osman",
      time: "17:00",
      students: 450,
      type: isRTL ? "حديث شريف" : "Hadith",
    },
    {
      id: 2,
      title: isRTL ? "أصول الفقه المقارن" : "Comparative Jurisprudence",
      instructor: isRTL ? "أ.د. محمود علي" : "Prof. Mahmoud Ali",
      time: "19:00",
      students: 320,
      type: isRTL ? "فقه" : "Fiqh",
    },
    {
      id: 3,
      title: isRTL ? "بلاغة القرآن الكريم" : "Quranic Eloquence",
      instructor: isRTL ? "د. أحمد سالم" : "Dr. Ahmed Salem",
      time: "21:00",
      students: 280,
      type: isRTL ? "لغة عربية" : "Arabic",
    },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#1A1814] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23064e3b' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 border-2 border-emerald-800/20 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400"
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold tracking-widest uppercase">
              {isRTL ? "مجالس العلم المباشرة" : "Live Knowledge Circles"}
            </span>
          </motion.div>

          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold text-slate-900 dark:text-white",
              isRTL ? "font-serif-ar" : "font-serif"
            )}
          >
            {isRTL ? "احضر مجالسنا الحية الآن" : "Join Our Live Circles"}
          </h2>
          <div className="w-24 h-1 bg-emerald-800 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {liveMajlis.map((majlis, i) => (
            <motion.div
              key={majlis.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white dark:bg-[#222] border-t-4 border-emerald-800 shadow-xl p-8 transition-transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1">
                  {majlis.type}
                </span>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{majlis.time}</span>
                </div>
              </div>

              <h3
                className={cn(
                  "text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 group-hover:text-emerald-800 dark:group-hover:text-emerald-500 transition-colors",
                  isRTL ? "font-serif-ar" : "font-serif"
                )}
              >
                {majlis.title}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <User className="w-5 h-5 text-emerald-800" />
                  <span className="font-medium">{majlis.instructor}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Users className="w-5 h-5 text-emerald-800" />
                  <span>
                    {majlis.students} {isRTL ? "طالب علم" : "students"}
                  </span>
                </div>
              </div>

              <button className="w-full py-4 border-2 border-emerald-800 text-emerald-800 dark:text-emerald-500 hover:bg-emerald-800 hover:text-white dark:hover:text-white transition-all font-bold flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" />
                {isRTL ? "دخول المجلس" : "Enter Circle"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

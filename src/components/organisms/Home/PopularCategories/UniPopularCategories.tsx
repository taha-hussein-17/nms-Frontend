import { useTranslation } from "react-i18next";
import {
  Building2,
  Stethoscope,
  Gavel,
  Cpu,
  Calculator,
  Palette,
  Globe2,
  Dna,
} from "lucide-react";
// import { cn } from "../../../../utils/cn";
import { motion } from "framer-motion";

export const UniPopularCategories = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const categories = [
    {
      name: isRTL ? "كلية التجارة" : "Business School",
      icon: Building2,
      count: "15",
      departments: "Accounting, Finance, Management",
    },
    {
      name: isRTL ? "العلوم الطبية" : "Medical Sciences",
      icon: Stethoscope,
      count: "12",
      departments: "Nursing, Pharmacy, First Aid",
    },
    {
      name: isRTL ? "الحقوق" : "Law & Justice",
      icon: Gavel,
      count: "8",
      departments: "Civil Law, Criminal Law",
    },
    {
      name: isRTL ? "الهندسة" : "Engineering",
      icon: Cpu,
      count: "20",
      departments: "Civil, Mechanical, Electrical",
    },
    {
      name: isRTL ? "العلوم الرياضية" : "Mathematics",
      icon: Calculator,
      count: "10",
      departments: "Statistics, Pure Math",
    },
    {
      name: isRTL ? "الفنون الجميلة" : "Fine Arts",
      icon: Palette,
      count: "14",
      departments: "Painting, Sculpture, Design",
    },
    {
      name: isRTL ? "العلوم السياسية" : "Political Science",
      icon: Globe2,
      count: "9",
      departments: "International Relations",
    },
    {
      name: isRTL ? "العلوم التطبيقية" : "Applied Sciences",
      icon: Dna,
      count: "11",
      departments: "Biology, Chemistry, Physics",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 border-l-4 border-maroon-700 pl-6">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            {isRTL ? "الأقسام الأكاديمية" : "Academic Departments"}
          </h2>
          <p className="text-slate-500 mt-2 font-medium">
            {isRTL
              ? "تصفح الكليات والأقسام المتاحة في الأكاديمية"
              : "Browse colleges and departments available at the academy"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-slate-50 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 hover:border-maroon-700 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 mb-8 flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm text-maroon-700 group-hover:bg-maroon-700 group-hover:text-white transition-all">
                <cat.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed h-8 line-clamp-2">
                {cat.departments}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
                  {cat.count} Programs
                </span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-maroon-700/5 text-maroon-700 group-hover:bg-maroon-700 group-hover:text-white transition-all">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

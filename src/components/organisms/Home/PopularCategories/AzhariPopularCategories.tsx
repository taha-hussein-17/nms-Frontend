import { useTranslation } from "react-i18next";
import { 
  BookOpen, 
  MessageSquare, 
  Search, 
  Scale, 
  History, 
  Languages, 
  Star,
  Users
} from "lucide-react";
import { cn } from "../../../../utils/cn";
import { motion } from "framer-motion";

export const AzhariPopularCategories = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const categories = [
    {
      name: isRTL ? "علوم القرآن" : "Quranic Sciences",
      icon: BookOpen,
      count: "30+",
      desc: isRTL ? "تفسير، تجويد، وقراءات" : "Tafsir, Tajweed, & Readings",
    },
    {
      name: isRTL ? "الحديث الشريف" : "Prophetic Hadith",
      icon: MessageSquare,
      count: "25+",
      desc: isRTL ? "شرح الأحاديث وعلومها" : "Hadith Explanation",
    },
    {
      name: isRTL ? "العقيدة الإسلامية" : "Islamic Creed",
      icon: Search,
      count: "15+",
      desc: isRTL ? "أصول الدين والتوحيد" : "Principles of Faith",
    },
    {
      name: isRTL ? "الفقه الإسلامي" : "Islamic Fiqh",
      icon: Scale,
      count: "40+",
      desc: isRTL ? "العبادات والمعاملات" : "Jurisprudence",
    },
    {
      name: isRTL ? "السيرة والتاريخ" : "Seerah & History",
      icon: History,
      count: "20+",
      desc: isRTL ? "حياة الأنبياء والصحابة" : "Islamic History",
    },
    {
      name: isRTL ? "اللغة العربية" : "Arabic Language",
      icon: Languages,
      count: "35+",
      desc: isRTL ? "نحو، صرف، وبلاغة" : "Grammar & Eloquence",
    },
    {
      name: isRTL ? "التزكية والأخلاق" : "Ethics & Spirituality",
      icon: Star,
      count: "12+",
      desc: isRTL ? "تهذيب النفس والأخلاق" : "Manners & Tazkiyah",
    },
    {
      name: isRTL ? "الدعوة والفكر" : "Dawah & Thought",
      icon: Users,
      count: "18+",
      desc: isRTL ? "منهج الدعوة والفكر" : "Dawah Methodology",
    },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#1A1814] relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-8 border-t-8 border-emerald-800/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-8 border-b-8 border-emerald-800/10" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold text-slate-900 dark:text-white",
            isRTL ? "font-serif-ar" : "font-serif"
          )}>
            {isRTL ? "تخصصات العلوم الشرعية" : "Islamic Science Specialties"}
          </h2>
          <div className="w-24 h-1 bg-emerald-800 mx-auto" />
          <p className="text-slate-500 max-w-2xl mx-auto">
            {isRTL 
              ? "اختر التخصص الذي تود التعمق فيه تحت إشراف نخبة من علماء الأزهر الشريف"
              : "Choose the specialty you wish to deepen your knowledge in under Al-Azhar scholars"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white dark:bg-[#222] p-8 rounded-none border border-emerald-800/10 hover:border-emerald-800 transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400 group-hover:bg-emerald-800 group-hover:text-white transition-all">
                <cat.icon size={32} strokeWidth={1.5} />
              </div>

              <h3 className={cn(
                "text-xl font-bold mb-2 text-slate-800 dark:text-slate-200",
                isRTL ? "font-serif-ar" : "font-serif"
              )}>
                {cat.name}
              </h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-1">{cat.desc}</p>
              
              <div className="text-xs font-bold text-emerald-700 dark:text-emerald-500 uppercase tracking-widest">
                {cat.count} {isRTL ? "مادة علمية" : "Courses"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

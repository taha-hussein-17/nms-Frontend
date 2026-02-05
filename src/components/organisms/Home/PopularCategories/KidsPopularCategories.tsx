import { useTranslation } from "react-i18next";
import {
  Gamepad2,
  Paintbrush,
  Rocket,
  Music,
  Camera,
  Heart,
  Brain,
  Star,
} from "lucide-react";
import { cn } from "../../../../utils/cn";
import { motion } from "framer-motion";

export const KidsPopularCategories = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const categories = [
    {
      name: isRTL ? "ألعاب ذكية" : "Smart Games",
      icon: Gamepad2,
      count: "120+",
      color: "bg-blue-400 shadow-blue-200",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: isRTL ? "فنون وإبداع" : "Arts & Crafts",
      icon: Paintbrush,
      count: "85+",
      color: "bg-pink-400 shadow-pink-200",
      textColor: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      name: isRTL ? "رحلة الفضاء" : "Space Journey",
      icon: Rocket,
      count: "64+",
      color: "bg-purple-400 shadow-purple-200",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      name: isRTL ? "موسيقى وألحان" : "Music & Songs",
      icon: Music,
      count: "42+",
      color: "bg-yellow-400 shadow-yellow-200",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      name: isRTL ? "عالم الصور" : "Photo World",
      icon: Camera,
      count: "28+",
      color: "bg-emerald-400 shadow-emerald-200",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      name: isRTL ? "صحة الأبطال" : "Hero Health",
      icon: Heart,
      count: "15+",
      color: "bg-red-400 shadow-red-200",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: isRTL ? "تفكير ذكي" : "Smart Thinking",
      icon: Brain,
      count: "36+",
      color: "bg-cyan-400 shadow-cyan-200",
      textColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      name: isRTL ? "نجوم النجاح" : "Success Stars",
      icon: Star,
      count: "22+",
      color: "bg-orange-400 shadow-orange-200",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800">
            {isRTL ? "اختر مغامرتك القادمة!" : "Choose Your Next Adventure!"}
          </h2>
          <p className="text-xl text-slate-400 font-bold">
            {isRTL
              ? "استكشف عوالم جديدة من التعلم والمرح"
              : "Explore new worlds of learning and fun"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: i * 0.05,
              }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
              className={cn(
                "group p-8 rounded-[3rem] border-4 border-slate-50 text-center cursor-pointer transition-all",
                cat.bgColor,
                "hover:border-primary/20 hover:shadow-xl"
              )}
            >
              <div
                className={cn(
                  "w-20 h-20 mx-auto rounded-[2rem] flex items-center justify-center text-white mb-6 transform transition-transform group-hover:scale-110",
                  cat.color,
                  "shadow-lg"
                )}
              >
                <cat.icon size={40} strokeWidth={2.5} />
              </div>
              <h3 className={cn("font-black text-xl mb-2", cat.textColor)}>
                {cat.name}
              </h3>
              <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
                {cat.count} {isRTL ? "مغامرة" : "Adventures"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

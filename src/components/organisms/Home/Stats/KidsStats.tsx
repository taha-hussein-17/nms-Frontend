import { useTranslation } from "react-i18next";
import { Star, Rocket, Heart, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../../../utils/cn";

export const KidsStats = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const stats = [
    {
      label: isRTL ? "كورس ممتع" : "Fun Courses",
      value: "500+",
      icon: Rocket,
      color: "text-pink-500",
      bg: "bg-pink-100",
      borderColor: "border-pink-200",
      rotation: "-rotate-2",
    },
    {
      label: isRTL ? "مدرب بطل" : "Hero Teachers",
      value: "120+",
      icon: Heart,
      color: "text-red-500",
      bg: "bg-red-100",
      borderColor: "border-red-200",
      rotation: "rotate-3",
    },
    {
      label: isRTL ? "ساعة إبداع" : "Creative Hours",
      value: "10k+",
      icon: Sparkles,
      color: "text-yellow-500",
      bg: "bg-yellow-100",
      borderColor: "border-yellow-200",
      rotation: "-rotate-3",
    },
    {
      label: isRTL ? "بطل سعيد" : "Happy Heroes",
      value: "4.9/5",
      icon: Trophy,
      color: "text-blue-500",
      bg: "bg-blue-100",
      borderColor: "border-blue-200",
      rotation: "rotate-2",
    },
  ];

  return (
    <section className="relative py-24 bg-[#FFFAEC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: i * 0.1,
              }}
              className={cn(
                "relative p-8 rounded-[3rem] bg-white border-4 text-center transition-all duration-300",
                stat.borderColor,
                stat.rotation,
                "shadow-[0_12px_0_0_rgba(0,0,0,0.05)] hover:shadow-none hover:translate-y-2"
              )}
            >
              <div
                className={cn(
                  "w-24 h-24 mx-auto mb-6 rounded-[2rem] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110",
                  stat.bg,
                  stat.color
                )}
              >
                <stat.icon size={48} strokeWidth={2.5} />
              </div>

              <div className="space-y-2">
                <h3 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-lg font-black text-slate-400 uppercase">
                  {stat.label}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform rotate-12">
                <Star size={24} fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

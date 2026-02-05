import { motion } from "framer-motion";
import { Sparkles, Star, Trophy, Rocket, Gamepad2 } from "lucide-react";
import { cn } from "../../../utils/cn";

interface AboutStatsProps {
  isAr: boolean;
}

export const KidsAboutStats = ({ isAr }: AboutStatsProps) => {
  const stats = [
    {
      label: isAr ? "بطل صغير" : "Little Heroes",
      value: "10K+",
      icon: Trophy,
      color: "text-yellow-500",
      bg: "bg-yellow-100",
      border: "border-yellow-200",
    },
    {
      label: isAr ? "قائد مغامرة" : "Adventure Leaders",
      value: "200+",
      icon: Rocket,
      color: "text-blue-500",
      bg: "bg-blue-100",
      border: "border-blue-200",
    },
    {
      label: isAr ? "رحلة سحرية" : "Magic Journeys",
      value: "500+",
      icon: Gamepad2,
      color: "text-purple-500",
      bg: "bg-purple-100",
      border: "border-purple-200",
    },
    {
      label: isAr ? "ساعة مرح" : "Hours of Fun",
      value: "20K+",
      icon: Sparkles,
      color: "text-pink-500",
      bg: "bg-pink-100",
      border: "border-pink-200",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      {/* Playful background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/kids-pattern.svg')] bg-[length:200px_200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white border-8 border-primary/20 rounded-[5rem] p-12 md:p-24 shadow-2xl relative">
          {/* Decorative Corner Stars */}
          <Star className="absolute -top-10 -left-10 w-20 h-20 text-yellow-400 fill-yellow-400 animate-bounce" />
          <Star className="absolute -bottom-10 -right-10 w-20 h-20 text-primary fill-primary animate-bounce delay-75" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  className={cn(
                    "w-24 h-24 mx-auto mb-10 rounded-[2.5rem] flex items-center justify-center shadow-xl border-4 transition-all duration-500",
                    stat.bg,
                    stat.color,
                    stat.border
                  )}
                >
                  <stat.icon className="w-12 h-12" />
                </motion.div>
                <div className="text-6xl md:text-7xl font-black mb-4 text-slate-800 font-din tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xl text-slate-500 font-black uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

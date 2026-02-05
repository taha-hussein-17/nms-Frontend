import { motion } from "framer-motion";
import { Users, BookOpen, Globe, Star, Sparkles } from "lucide-react";
import { type TFunction } from "i18next";

interface BecomeInstructorStatsProps {
  t: TFunction;
}

export const KidsBecomeInstructorStats = ({
  t,
}: BecomeInstructorStatsProps) => {
  const stats = [
    {
      label: t("become_instructor.stats.students"),
      value: "50K+",
      icon: Users,
      color: "text-yellow-400",
    },
    {
      label: t("become_instructor.stats.courses"),
      value: "1K+",
      icon: BookOpen,
      color: "text-pink-400",
    },
    {
      label: t("become_instructor.stats.countries"),
      value: "25+",
      icon: Globe,
      color: "text-green-400",
    },
    {
      label: t("become_instructor.stats.rating"),
      value: "4.9/5",
      icon: Star,
      color: "text-orange-400",
    },
  ];

  return (
    <section className="container mx-auto px-4 mb-32">
      <div className="relative py-24 bg-sky-600 rounded-[5rem] overflow-hidden shadow-2xl border-8 border-sky-100">
        {/* Animated Background Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-[3rem] blur-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-400/20 rounded-full blur-2xl"
        />

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 place-items-center text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="space-y-4 group"
            >
              <div className="relative">
                <Sparkles className="absolute -top-4 -right-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div
                  className={`text-5xl lg:text-7xl font-black mb-2 group-hover:scale-110 transition-transform duration-500 text-white`}
                >
                  {stat.value}
                </div>
              </div>
              <div
                className={`${stat.color} font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm`}
              >
                <stat.icon className="w-6 h-6" />
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

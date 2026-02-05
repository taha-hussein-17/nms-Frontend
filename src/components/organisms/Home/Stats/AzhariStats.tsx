import { useTranslation } from "react-i18next";
import { Book, Users, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../../../utils/cn";

export const AzhariStats = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const stats = [
    {
      label: t("home.stats.courses"),
      value: "٥٠٠+",
      icon: Book,
    },
    {
      label: t("home.stats.instructors"),
      value: "١٢٠+",
      icon: Users,
    },
    {
      label: t("home.stats.hours"),
      value: "١٠ آلاف",
      icon: GraduationCap,
    },
    {
      label: t("home.stats.rating"),
      value: "٤.٩ / ٥",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Arabic calligraphy pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0l25 50-25 50-25-50z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="w-20 h-20 border-2 border-emerald-400/30 rotate-45 flex items-center justify-center bg-emerald-800/50 group hover:border-emerald-400 transition-colors">
                <div className="-rotate-45">
                  <stat.icon className="w-8 h-8 text-emerald-300" />
                </div>
              </div>

              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  className={cn("text-4xl font-bold text-emerald-100", isRTL ? "font-serif-ar" : "font-serif")}
                >
                  {stat.value}
                </motion.div>
                <p className="text-emerald-300/80 text-sm font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
              
              {/* Divider for mobile */}
              {i < stats.length - 1 && (
                <div className="lg:hidden w-12 h-0.5 bg-emerald-400/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

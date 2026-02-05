import { useTranslation } from "react-i18next";
import { BookOpen, Users, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../../../utils/cn";

export const DefaultStats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      label: t("home.stats.courses"),
      value: "500+",
      icon: BookOpen,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: t("home.stats.instructors"),
      value: "120+",
      icon: Users,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      label: t("home.stats.hours"),
      value: "10k+",
      icon: Clock,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      label: t("home.stats.rating"),
      value: "4.9/5",
      icon: Star,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
  ];

  return (
    <section className="relative py-[var(--section-py)] overflow-hidden bg-primary/[0.02]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--section-px)] relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/30 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500">
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    stat.bg,
                    stat.color
                  )}
                >
                  <stat.icon className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <motion.h3
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: i * 0.1 + 0.2,
                    }}
                    className="text-4xl lg:text-5xl font-black text-foreground tracking-tight"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

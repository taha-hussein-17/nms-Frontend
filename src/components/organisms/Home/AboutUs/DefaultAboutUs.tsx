import { useTranslation } from "react-i18next";
import { Target, Eye, Users, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { motion } from "framer-motion";

export const DefaultAboutUs = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      title: t("home.about.mission_title"),
      desc: t("home.about.mission_desc"),
      icon: Target,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: t("home.about.vision_title"),
      desc: t("home.about.vision_desc"),
      icon: Eye,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: t("home.about.community_title"),
      desc: t("home.about.community_desc"),
      icon: Users,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <section className="py-[var(--section-py)] relative overflow-hidden bg-background">
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--section-px)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 p-6">
              <div className="absolute inset-0 bg-primary/15 rounded-[4rem] blur-[100px] -z-10 opacity-40" />

              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-15222071820081-009f0129c71c?w=800&q=80"
                  alt="About WAKP Academy"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[3/3] object-cover transition-transform duration-[1200ms] hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Bottom card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-[2rem] border border-white/20">
                  <div className="flex items-center gap-5">
                    <div className="bg-primary p-4 rounded-2xl shadow-xl shadow-primary/30">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-white leading-none">
                        10k+
                      </p>
                      <p className="text-xs font-bold text-white/70 uppercase tracking-[0.25em]">
                        {t("home.about.students_community")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={cn(
                "absolute top-6 glass px-6 py-5 rounded-3xl shadow-2xl border border-white/20 flex items-center gap-4 z-20 hidden md:flex",
                i18n.language === "ar" ? "-left-10" : "-right-10"
              )}
            >
              <div className="w-11 h-11 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-wider">
                  Quality First
                </p>
                <p className="text-xs text-muted-foreground font-bold">
                  Global Standards
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className={cn(
                "absolute top-1/2 glass px-6 py-5 rounded-3xl shadow-2xl border border-white/20 flex items-center gap-4 z-20 hidden md:flex",
                i18n.language === "ar" ? "-right-16" : "-left-16"
              )}
            >
              <div className="w-11 h-11 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-wider">
                  Fast Results
                </p>
                <p className="text-xs text-muted-foreground font-bold">
                  Practical Learning
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: i18n.language === "ar" ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
              "space-y-14",
              i18n.language === "ar" ? "text-right" : "text-left"
            )}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-[0.25em]">
                  {t("home.about.badge")}
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                {t("home.about.title")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                  WAKP Academy
                </span>
              </h2>

              <p className="text-lg text-muted-foreground font-bold leading-relaxed max-w-xl opacity-85">
                {t("home.about.description")}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="
                    group flex gap-6 p-7 rounded-3xl
                    hover:bg-secondary/60
                    transition-all duration-500
                    border border-slate-200 dark:border-slate-800 shadow-sm
                  "
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-transform duration-500 group-hover:scale-110",
                      feature.bg,
                      feature.color
                    )}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-black tracking-tight group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-bold leading-relaxed opacity-80">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

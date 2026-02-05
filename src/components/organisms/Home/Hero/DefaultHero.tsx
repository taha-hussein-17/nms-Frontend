import { useTranslation, Trans } from "react-i18next";
import { Star, CheckCircle2, Trophy, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

export const DefaultHero = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-8 bg-background">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--section-px)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
              "space-y-12 max-w-2xl",
              isRTL ? "text-right lg:pr-10" : "text-left lg:pl-10"
            )}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#EBF0FD] text-primary border border-[#DCE5FE] shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">
                {t("home.hero_badge")}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-6">
              <h1 className="font-black leading-[1.03] tracking-tight">
                <span className="block text-4xl sm:text-6xl opacity-90">
                  <Trans i18nKey="home.hero_title_line1">
                    {t("home.hero_title1")}
                  </Trans>
                </span>

                <span className="block text-5xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                  <Trans i18nKey="home.hero_title_line2">
                    {t("home.hero_title2")}
                  </Trans>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground font-bold max-w-xl">
                {t("home.hero_desc")}
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Button
                size="lg"
                onClick={() => navigate(ROUTES.COURSES)}
                className="
                  h-14 px-14 text-base font-black rounded-2xl gap-4
                  bg-gradient-to-r from-primary to-purple-600
                  hover:scale-105 active:scale-95
                  shadow-2xl shadow-primary/30
                  transition-all duration-300 group
                "
              >
                <span>{t("home.start_now")}</span>
                <ArrowRight
                  className={cn(
                    "w-5 h-5 transition-transform group-hover:translate-x-2",
                    isRTL && "rotate-180 group-hover:-translate-x-2"
                  )}
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate(ROUTES.ABOUT)}
                className="
                  h-14 px-14 text-base font-black rounded-2xl gap-4
                  border-2 border-primary/20 text-primary
                  hover:bg-primary/5 hover:scale-105 active:scale-95
                  transition-all duration-300 group
                "
              >
                <span>{t("home.how_it_works")}</span>
                <ArrowRight
                  className={cn(
                    "w-5 h-5 transition-transform group-hover:translate-x-2",
                    isRTL && "rotate-180 group-hover:-translate-x-2"
                  )}
                />
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-12 pt-8">
              {/* Avatars */}
              <div className="flex flex-col gap-4">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/80?img=${i + 10}`}
                      className="w-10 h-10 rounded-full border-4 border-background object-cover"
                      alt="User avatar"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-black tracking-widest">
                    <span className="text-primary">10,000+</span>{" "}
                    {t("home.students")}
                  </span>
                </div>
              </div>

              <div className="hidden sm:block h-12 w-px bg-border/50" />

              {/* Award */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-black">{t("home.top_rated")}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">
                    {t("home.rating")} 4.9/5
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: isRTL ? -3 : 3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/20 rounded-[3rem] blur-3xl -z-10" />

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900"
              alt="Students Learning"
              className="
                rounded-[3rem]
                shadow-[0_40px_120px_-20px_rgba(124,58,237,0.6)]
                border border-white/10
                object-cover
                aspect-[2/2]
              "
              loading="eager"
            />

            {/* Floating card */}
            <div
              className={cn(
                "absolute -bottom-8 bg-card/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border animate-float",
                isRTL ? "-right-8" : "-left-8"
              )}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-black">2.5k+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">
                    {t("home.stats.courses")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card } from "../../../components/atoms/Card";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import {
  Calendar as CalendarIcon,
  BookOpen,
  GraduationCap,
  Clock,
  ArrowRight,
  ArrowLeft,
  Terminal,
  Shield,
  Target,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../../../providers/ThemeContext";
import { cn } from "../../../utils/cn";

const events = [
  {
    id: 1,
    title: "حصة البرمجة - هياكل البيانات",
    date: "2026-02-10",
    time: "10:00",
    type: "class",
  },
  {
    id: 2,
    title: "جلسة كورس تطوير الويب",
    date: "2026-02-12",
    time: "18:00",
    type: "course",
  },
  {
    id: 3,
    title: "امتحان الرياضيات",
    date: "2026-02-15",
    time: "09:00",
    type: "exam",
  },
];

export const StudentCalendar = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isAr = i18n.language === "ar";

  const getThemeConfig = () => {
    switch (theme) {
      case "kids":
        return {
          titleClass: "text-blue-600 font-kids",
          cardClass: "bg-blue-50/50 border-blue-100 rounded-[2rem]",
          itemClass: "bg-white border-blue-50 rounded-2xl",
          accentColor: "text-blue-600",
          fontClass: "font-kids",
          headerIcon: <Sparkles className="w-6 h-6 text-yellow-400" />,
        };
      case "programmers":
        return {
          titleClass: "text-emerald-500 font-mono uppercase tracking-tighter",
          cardClass: "bg-black/40 border-emerald-500/20 rounded-none",
          itemClass: "bg-emerald-500/5 border-emerald-500/10 rounded-none",
          accentColor: "text-emerald-500",
          fontClass: "font-mono",
          headerIcon: <Terminal className="w-6 h-6 text-emerald-500" />,
        };
      case "azhari":
        return {
          titleClass: "text-emerald-900 font-serif font-bold",
          cardClass: "bg-emerald-50/30 border-emerald-100 rounded-xl",
          itemClass: "bg-white border-emerald-50 rounded-xl",
          accentColor: "text-emerald-800",
          fontClass: "font-serif",
          headerIcon: <Shield className="w-6 h-6 text-emerald-700" />,
        };
      case "uni":
        return {
          titleClass: "text-slate-900 font-sans font-bold",
          cardClass: "bg-slate-50 border-slate-200 rounded-lg",
          itemClass: "bg-white border-slate-100 rounded-lg",
          accentColor: "text-maroon-700",
          fontClass: "font-sans",
          headerIcon: <Target className="w-6 h-6 text-maroon-700" />,
        };
      default:
        return {
          titleClass: "text-foreground font-black",
          cardClass: "glass border-2 rounded-[2.5rem]",
          itemClass: "bg-card border rounded-2xl",
          accentColor: "text-primary",
          fontClass: "",
          headerIcon: <CalendarIcon className="w-6 h-6 text-primary" />,
        };
    }
  };

  const config = getThemeConfig();

  const typeIcon = (type: string) => {
    switch (type) {
      case "class":
        return <Clock className={cn("w-4 h-4", config.accentColor)} />;
      case "course":
        return <BookOpen className={cn("w-4 h-4", config.accentColor)} />;
      case "exam":
        return <GraduationCap className={cn("w-4 h-4", config.accentColor)} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn("space-y-8", config.fontClass)}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "p-3 rounded-2xl bg-primary/10",
            theme === "programmers" && "rounded-none bg-emerald-500/10"
          )}
        >
          {config.headerIcon}
        </div>
        <div>
          <h2 className={cn("text-3xl", config.titleClass)}>
            {t("calendar.title", "التقويم")}
          </h2>
          <p className="text-muted-foreground font-bold mt-1">
            {theme === "programmers"
              ? "> SYSTEM_CHRONOS: ACTIVE"
              : t(
                  "calendar.subtitle",
                  "اعرض مواعيدك حسب النوع: حصص، كورسات، امتحانات"
                )}
          </p>
        </div>
      </div>

      <Card className={cn("p-8", config.cardClass)}>
        <div className={cn("flex items-center gap-2 mb-6", config.accentColor)}>
          <CalendarIcon className="w-5 h-5" />
          <span className="text-lg font-black">
            {t("calendar.events", "المواعيد")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev, i) => {
            const isExam = ev.type === "exam";
            const examPath = ROUTES.TAKE_EXAM.replace(":id", ev.id.toString());

            return (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "p-6 border flex flex-col justify-between",
                  config.itemClass
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-[11px] font-black",
                        theme === "programmers"
                          ? "bg-emerald-500/10 text-emerald-500 rounded-none border border-emerald-500/20"
                          : "bg-primary/10 text-primary"
                      )}
                    >
                      {ev.type === "class"
                        ? t("calendar.type.class", "حصة")
                        : ev.type === "course"
                          ? t("calendar.type.course", "كورس")
                          : t("calendar.type.exam", "امتحان")}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                      <Clock className="w-4 h-4 opacity-50" />
                      {ev.time}
                    </div>
                  </div>
                  <h4 className="text-lg font-black text-foreground mb-4 leading-tight">
                    {ev.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-dashed">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center",
                        theme === "programmers"
                          ? "bg-emerald-500/10 rounded-none"
                          : "bg-primary/5"
                      )}
                    >
                      {typeIcon(ev.type)}
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">
                      {ev.date}
                    </span>
                  </div>

                  {isExam && (
                    <Link
                      to={examPath}
                      className={cn(
                        "flex items-center gap-2 text-xs font-black transition-all",
                        config.accentColor,
                        "hover:gap-3"
                      )}
                    >
                      {isAr ? "ابدأ الآن" : "Start Now"}
                      {isAr ? (
                        <ArrowLeft className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

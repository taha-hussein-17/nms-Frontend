import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card } from "../../../components/atoms/Card";
import {
  Calendar as CalendarIcon,
  BookOpen,
  GraduationCap,
  Clock,
  Users,
  Terminal,
  Shield,
  Target,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../../../providers/ThemeContext";
import { cn } from "../../../utils/cn";

const childrenEvents = [
  {
    id: "c1-1",
    child: "Ahmed",
    title: "Math Class",
    date: "2026-02-11",
    time: "11:00",
    type: "class",
  },
  {
    id: "c1-2",
    child: "Ahmed",
    title: "Science Exam",
    date: "2026-02-18",
    time: "12:00",
    type: "exam",
  },
  {
    id: "c2-1",
    child: "Sara",
    title: "Design Course Live",
    date: "2026-02-20",
    time: "17:00",
    type: "course",
  },
];

export const ParentCalendar = () => {
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

  const localized = childrenEvents.map((e) => ({
    ...e,
    child: isAr ? (e.child === "Ahmed" ? "أحمد" : "سارة") : e.child,
    title: isAr
      ? e.type === "class"
        ? `حصة ${e.child === "Ahmed" ? "رياضيات" : "تصميم"}`
        : e.type === "exam"
          ? `امتحان ${e.child === "Ahmed" ? "علوم" : "تصميم"}`
          : `جلسة كورس ${e.child === "Ahmed" ? "علوم" : "تصميم"}`
      : e.title,
  }));

  return (
    <div
      className={cn("space-y-6", config.fontClass)}
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
                  "parent_exams.subtitle",
                  "درجات الأبناء وجدول الاختبارات القادمة"
                )}
          </p>
        </div>
      </div>

      <Card className={cn("p-6", config.cardClass)}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <CalendarIcon className={cn("w-5 h-5", config.accentColor)} />
            <span className={cn("text-lg font-black", config.titleClass)}>
              {t("calendar.events", "المواعيد")}
            </span>
          </div>
          <div className="text-sm font-bold text-muted-foreground flex items-center gap-2">
            <Users className="w-4 h-4" />
            {t("calendar.viewing_children", "عرض مواعيد الأبناء")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {localized.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "p-5 border transition-all duration-300 hover:scale-[1.02]",
                config.itemClass
              )}
            >
              <div className="flex items-center justify-between mb-3">
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
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                  {typeIcon(ev.type)}
                  <span>
                    {ev.date} • {ev.time}
                  </span>
                </div>
              </div>
              <p
                className={cn(
                  "font-bold text-lg mb-2",
                  theme === "programmers"
                    ? "text-emerald-400"
                    : "text-foreground"
                )}
              >
                {ev.title}
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-dashed border-muted-foreground/20">
                <Users className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-xs font-bold text-muted-foreground">
                  {t("calendar.for_child", "للطالب")}:{" "}
                  <span className={config.accentColor}>{ev.child}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

import { MainLayout } from "../../components/templates/MainLayout";
import { useTranslation } from "react-i18next";
import { SEO } from "../../components/atoms/SEO";
import { useAppSelector } from "../../store";
import { Card } from "../../components/atoms/Card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import {
  Calendar as CalendarIcon,
  BookOpen,
  GraduationCap,
  Clock,
  Users,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type EventType = "class" | "course" | "exam";
interface EventItem {
  id: string | number;
  title: string;
  date: string;
  time?: string;
  type: EventType;
  childName?: string;
}

const baseEvents: EventItem[] = [
  {
    id: 1,
    title: "حصة البرمجة - هياكل البيانات",
    date: "2026-02-10",
    time: "10:00",
    type: "class",
  },
  {
    id: 2,
    title: "كورس تطوير الويب - جلسة مباشرة",
    date: "2026-02-12",
    time: "18:00",
    type: "course",
  },
  {
    id: 3,
    title: "امتحان الرياضيات - نهاية الوحدة",
    date: "2026-02-15",
    time: "09:00",
    type: "exam",
  },
];

const CalendarPage = () => {
  const { t, i18n } = useTranslation();
  const { user, isAuthenticated } = useAppSelector((s) => s.auth);
  const isAr = i18n.language === "ar";

  const studentEvents: EventItem[] = baseEvents;

  const parentEvents: EventItem[] = [
    {
      id: "c1-1",
      title: isAr ? "حصة رياضيات - أحمد" : "Math Class - Ahmed",
      date: "2026-02-11",
      time: "11:00",
      type: "class",
      childName: isAr ? "أحمد" : "Ahmed",
    },
    {
      id: "c1-2",
      title: isAr ? "امتحان علوم - أحمد" : "Science Exam - Ahmed",
      date: "2026-02-18",
      time: "12:00",
      type: "exam",
      childName: isAr ? "أحمد" : "Ahmed",
    },
    {
      id: "c2-1",
      title: isAr ? "جلسة كورس التصميم - سارة" : "Design Course Live - Sara",
      date: "2026-02-20",
      time: "17:00",
      type: "course",
      childName: isAr ? "سارة" : "Sara",
    },
  ];

  const allEvents = !isAuthenticated
    ? baseEvents
    : user?.role === "parent"
      ? parentEvents
      : studentEvents;

  const typeIcon = (type: EventType) => {
    switch (type) {
      case "class":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "course":
        return <BookOpen className="w-4 h-4 text-purple-600" />;
      case "exam":
        return <GraduationCap className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <MainLayout>
      <SEO
        title={t("calendar.title", "التقويم")}
        description={t(
          "calendar.description",
          "مواعيد الحصص والكورسات والامتحانات"
        )}
      />
      <div
        className="container mx-auto px-4 py-10 space-y-6"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black">
              {t("calendar.title", "التقويم")}
            </h1>
            <p className="text-muted-foreground font-bold mt-2">
              {t(
                "calendar.subtitle",
                "اعرض مواعيدك حسب النوع: حصص، كورسات، امتحانات"
              )}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm font-bold text-muted-foreground">
            <CalendarIcon className="w-5 h-5" />
            <span>{t("calendar.badge", "جدولة الدراسة")}</span>
          </div>
        </div>

        <Card className="p-6 rounded-[2rem] border border-secondary">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-primary">
              <CalendarIcon className="w-5 h-5" />
              <span className="text-lg font-black">
                {t("calendar.events", "المواعيد")}
              </span>
            </div>
            {isAuthenticated && user?.role === "parent" && (
              <div className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" />
                {t("calendar.viewing_children", "عرض مواعيد الأبناء")}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allEvents.map((ev, i) => {
              const isExam = ev.type === "exam";
              const canTake = isExam && user?.role === "student";
              const examPath = ROUTES.TAKE_EXAM.replace(
                ":id",
                ev.id.toString()
              );

              return (
                <motion.div
                  key={ev.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-5 rounded-2xl bg-card border border-secondary flex flex-col justify-between ${canTake ? "hover:border-primary/50 transition-colors" : ""}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-black bg-primary/10 text-primary">
                        {ev.type === "class"
                          ? t("calendar.type.class", "حصة")
                          : ev.type === "course"
                            ? t("calendar.type.course", "كورس")
                            : t("calendar.type.exam", "امتحان")}
                      </span>
                      <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                        {typeIcon(ev.type)}
                        <span>
                          {ev.date}
                          {ev.time ? ` • ${ev.time}` : ""}
                        </span>
                      </div>
                    </div>
                    <p className="font-bold text-lg">{ev.title}</p>
                    {ev.childName && (
                      <p className="text-xs font-bold text-muted-foreground mt-1">
                        {t("calendar.for_child", "للطالب")}: {ev.childName}
                      </p>
                    )}
                  </div>

                  {canTake && (
                    <Link
                      to={examPath}
                      className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-white transition-all duration-300 font-black text-sm"
                    >
                      {t("exams.start_now", "ابدأ الاختبار الآن")}
                      {isAr ? (
                        <ArrowLeft size={16} />
                      ) : (
                        <ArrowRight size={16} />
                      )}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default CalendarPage;

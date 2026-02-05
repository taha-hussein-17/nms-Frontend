import { MainLayout } from "../../components/templates/MainLayout";
import { useTranslation } from "react-i18next";
import { SEO } from "../../components/atoms/SEO";
import { useAppSelector } from "../../store";
import { Card } from "../../components/atoms/Card";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const publicSchedule = [
  {
    id: 1,
    title: "امتحان نهاية الترم - الرياضيات",
    date: "2026-02-15",
    time: "10:00 صباحاً",
    duration: "90 دقيقة",
  },
  {
    id: 2,
    title: "امتحان الفيزياء - الوحدة 3",
    date: "2026-02-20",
    time: "12:00 مساءً",
    duration: "60 دقيقة",
  },
  {
    id: 3,
    title: "امتحان اللغة العربية",
    date: "2026-02-25",
    time: "09:00 صباحاً",
    duration: "120 دقيقة",
  },
];

const ExamsPage = () => {
  const { t, i18n } = useTranslation();
  const { user, isAuthenticated } = useAppSelector((s) => s.auth);
  const isAr = i18n.language === "ar";

  const studentExams = [
    {
      id: 1,
      title: "اختبار البرمجة - هياكل البيانات",
      date: "2026-02-16",
      duration: "60 دقيقة",
      questions: 25,
      status: "upcoming",
    },
    {
      id: 2,
      title: "اختبار التصميم - نظرية الألوان",
      date: "2026-01-12",
      score: "92/100",
      status: "completed",
    },
  ];

  const parentChildren = [
    {
      id: "c1",
      name: isAr ? "أحمد محمد" : "Ahmed Mohamed",
      exams: [
        {
          id: 11,
          title: isAr ? "رياضيات - نهاية الوحدة" : "Math - Unit Final",
          date: "2026-02-18",
          score: "88/100",
          status: "completed",
        },
        {
          id: 12,
          title: isAr ? "علوم - مراجعة" : "Science - Review",
          date: "2026-02-22",
          status: "upcoming",
        },
      ],
    },
    {
      id: "c2",
      name: isAr ? "سارة محمد" : "Sara Mohamed",
      exams: [
        {
          id: 21,
          title: isAr ? "لغة عربية" : "Arabic",
          date: "2026-02-25",
          status: "upcoming",
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <SEO
        title={t("exams.title", "الاختبارات")}
        description={t("exams.description", "مواعيد الاختبارات ونتائج الطلاب")}
      />
      <div
        className="container mx-auto px-4 py-16 space-y-12"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black">
              {t("exams.title", "الاختبارات")}
            </h1>
            <p className="text-muted-foreground font-bold mt-2">
              {t("exams.subtitle", "اعرض جدول الاختبارات ونتائجك السابقة")}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm font-bold text-muted-foreground">
            <GraduationCap className="w-5 h-5" />
            <span>{t("exams.badge", "بوابة الاختبارات")}</span>
          </div>
        </div>

        <Card className="p-8 rounded-[2rem] border border-secondary">
          <h2 className="text-xl font-black mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            {t("exams.public_schedule", "جدول الاختبارات المعلن")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicSchedule.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-secondary"
              >
                <h3 className="font-black">{e.title}</h3>
                <div className="mt-3 space-y-2 text-sm font-bold text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {e.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {e.time} • {e.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {isAuthenticated && user?.role === "student" && (
          <Card className="p-8 rounded-[2rem] border border-secondary">
            <h2 className="text-xl font-black mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              {t("exams.my_exams", "اختباراتي")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studentExams.map((exam, i) => (
                <motion.div
                  key={exam.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-2xl bg-card border border-secondary"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      {exam.status === "upcoming" ? (
                        <GraduationCap />
                      ) : (
                        <Trophy className="text-yellow-500" />
                      )}
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-black bg-primary/10 text-primary">
                      {exam.status === "upcoming"
                        ? t("exams.upcoming", "قادم")
                        : t("exams.completed", "مكتمل")}
                    </div>
                  </div>
                  <h3 className="font-black">{exam.title}</h3>
                  <p className="text-sm font-bold text-muted-foreground mt-1">
                    {exam.date}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm font-bold text-muted-foreground">
                      {exam.status === "upcoming"
                        ? exam.duration
                        : `${t("exams.score", "النتيجة")}: ${exam.score}`}
                    </div>
                    {exam.status === "upcoming" && (
                      <Link
                        to={ROUTES.TAKE_EXAM.replace(":id", exam.id.toString())}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white font-black text-xs hover:bg-primary/90 transition-colors"
                      >
                        {t("exams.start_now", "ابدأ الآن")}
                        {isAr ? (
                          <ArrowLeft size={14} />
                        ) : (
                          <ArrowRight size={14} />
                        )}
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        )}

        {isAuthenticated && user?.role === "parent" && (
          <Card className="p-8 rounded-[2rem] border border-secondary">
            <h2 className="text-xl font-black mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              {t("exams.children_exams", "اختبارات ودرجات الأبناء")}
            </h2>
            <div className="space-y-6">
              {parentChildren.map((child) => (
                <div
                  key={child.id}
                  className="p-6 rounded-2xl bg-card border border-secondary"
                >
                  <h3 className="font-black mb-4">{child.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {child.exams.map((ex) => (
                      <div
                        key={ex.id}
                        className="p-4 rounded-xl bg-secondary/30 border border-secondary/60"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-muted-foreground">
                            {ex.date}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-primary/10 text-primary">
                            {ex.status === "upcoming"
                              ? t("exams.upcoming", "قادم")
                              : t("exams.completed", "مكتمل")}
                          </span>
                        </div>
                        <p className="font-bold">{ex.title}</p>
                        {ex.score && (
                          <p className="text-sm font-black text-green-600 mt-1">
                            {t("exams.score", "النتيجة")}: {ex.score}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </MainLayout>
  );
};

export default ExamsPage;

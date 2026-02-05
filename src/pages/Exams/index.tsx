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

const ExamsPage = () => {
  const { t, i18n } = useTranslation();
  const { user, isAuthenticated } = useAppSelector((s) => s.auth);
  const isAr = i18n.language === "ar";

  const publicSchedule = [
    {
      id: 1,
      title: t("exams.math_term_final"),
      date: "2026-02-15",
      time: `10:00 ${t("exams.am")}`,
      duration: `90 ${t("exams.minutes")}`,
    },
    {
      id: 2,
      title: t("exams.physics_unit_3"),
      date: "2026-02-20",
      time: `12:00 ${t("exams.pm")}`,
      duration: `60 ${t("exams.minutes")}`,
    },
    {
      id: 3,
      title: t("exams.arabic_language"),
      date: "2026-02-25",
      time: `09:00 ${t("exams.am")}`,
      duration: `120 ${t("exams.minutes")}`,
    },
  ];

  const studentExams = [
    {
      id: 1,
      title: t("exams.programming_data_structures"),
      date: "2026-02-16",
      duration: `60 ${t("exams.minutes")}`,
      questions: 25,
      status: "upcoming",
    },
    {
      id: 2,
      title: t("exams.design_color_theory"),
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
          title: t("exams.math_unit_final"),
          date: "2026-02-18",
          score: "88/100",
          status: "completed",
        },
        {
          id: 12,
          title: t("exams.science_review"),
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
          title: t("exams.arabic"),
          date: "2026-02-25",
          status: "upcoming",
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <SEO title={t("exams.title")} description={t("exams.description")} />
      <div
        className="container mx-auto px-4 py-16 space-y-12"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black">{t("exams.title")}</h1>
            <p className="text-muted-foreground font-bold mt-2">
              {t("exams.subtitle")}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm font-bold text-muted-foreground">
            <GraduationCap className="w-5 h-5" />
            <span>{t("exams.badge")}</span>
          </div>
        </div>

        <Card className="p-8 rounded-[2rem] border border-[#38414D]/20 shadow-lg">
          <h2 className="text-xl font-black mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            {t("exams.public_schedule")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicSchedule.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-[#38414D]/40"
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
          <Card className="p-8 rounded-[2rem] border border-[#38414D]/20 shadow-lg">
            <h2 className="text-xl font-black mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              {t("exams.my_exams")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studentExams.map((exam, i) => (
                <motion.div
                  key={exam.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-2xl bg-card border border-[#38414D]/40"
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
                        ? t("exams.upcoming")
                        : t("exams.completed")}
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
                        : `${t("exams.score")}: ${exam.score}`}
                    </div>
                    {exam.status === "upcoming" && (
                      <Link
                        to={ROUTES.TAKE_EXAM.replace(":id", exam.id.toString())}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white font-black text-xs hover:bg-primary/90 transition-colors"
                      >
                        {t("exams.start_now")}
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
          <Card className="p-8 rounded-[2rem] border border-[#38414D]/20 shadow-lg">
            <h2 className="text-xl font-black mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              {t("exams.children_exams")}
            </h2>
            <div className="space-y-6">
              {parentChildren.map((child) => (
                <div
                  key={child.id}
                  className="p-6 rounded-2xl bg-card border border-[#38414D]/40"
                >
                  <h3 className="font-black mb-4">{child.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {child.exams.map((ex) => (
                      <div
                        key={ex.id}
                        className="p-4 rounded-xl bg-secondary/30 border border-[#38414D]/40"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-muted-foreground">
                            {ex.date}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-primary/10 text-primary">
                            {ex.status === "upcoming"
                              ? t("exams.upcoming")
                              : t("exams.completed")}
                          </span>
                        </div>
                        <p className="font-bold">{ex.title}</p>
                        {ex.score && (
                          <p className="text-sm font-black text-green-600 mt-1">
                            {t("exams.score")}: {ex.score}
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

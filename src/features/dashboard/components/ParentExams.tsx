import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, Trophy, GraduationCap, Calendar } from "lucide-react";
import { Card } from "../../../components/atoms/Card";

interface ChildExam {
  id: string;
  name: string;
  exams: {
    id: number;
    title: string;
    date: string;
    status: "upcoming" | "completed";
    score?: string;
  }[];
}

export const ParentExams = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const children: ChildExam[] = [
    {
      id: "c1",
      name: isAr ? "أحمد محمد" : "Ahmed Mohamed",
      exams: [
        {
          id: 11,
          title: isAr ? "رياضيات - نهاية الوحدة" : "Math - Unit Final",
          date: "2026-02-18",
          status: "completed",
          score: "88/100",
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
    <div className="space-y-8" dir={isAr ? "rtl" : "ltr"}>
      <div>
        <h2 className="text-2xl font-black">{t("dashboard.sidebar.exams")}</h2>
        <p className="text-muted-foreground font-bold mt-1">
          {t("parent_exams.subtitle", "درجات الأبناء وجدول الاختبارات القادمة")}
        </p>
      </div>

      <Card className="p-8 rounded-[2rem] border border-secondary">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-primary">
            <Users className="w-5 h-5" />
            <span className="text-lg font-black">
              {t("parent_exams.children_exams", "اختبارات الأبناء")}
            </span>
          </div>
          <div className="text-sm font-bold text-muted-foreground">
            <Calendar className="inline w-4 h-4 mx-1" />
            {t("parent_exams.overview", "نظرة عامة")}
          </div>
        </div>

        <div className="space-y-8">
          {children.map((child, index) => (
            <motion.div
              key={child.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-card border border-secondary"
            >
              <h3 className="font-black text-lg mb-4">{child.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {child.exams.map((ex) => (
                  <div
                    key={ex.id}
                    className="p-4 rounded-xl bg-secondary/30 border border-secondary/60"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-muted-foreground">
                        {ex.date}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-primary/10 text-primary">
                        {ex.status === "upcoming"
                          ? t("exams.upcoming", "قادم")
                          : t("exams.completed", "مكتمل")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      {ex.status === "upcoming" ? (
                        <GraduationCap className="w-4 h-4 text-primary" />
                      ) : (
                        <Trophy className="w-4 h-4 text-yellow-600" />
                      )}
                      <p className="font-bold">{ex.title}</p>
                    </div>
                    {ex.score && (
                      <p className="text-sm font-black text-green-600">
                        {t("exams.score", "النتيجة")}: {ex.score}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

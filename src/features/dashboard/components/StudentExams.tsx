import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  Trophy,
  Clock,
  BrainCircuit,
  ArrowRight,
  Star,
  Code,
  Book,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useTheme } from "../../../providers/ThemeContext";

const THEME_EXAMS_CONFIGS: any = {
  kids: {
    upcomingIcon: <Star size={28} className="text-yellow-400" />,
    completedIcon: <Trophy size={28} className="text-pink-500" />,
    upcomingBadge: "bg-yellow-100 text-yellow-600",
    completedBadge: "bg-pink-100 text-pink-600",
    cardHover: "hover:border-pink-300 hover:shadow-pink-100",
    btnClass: "bg-pink-500 text-white hover:bg-pink-600",
    fontClass: "font-kids",
    upcomingText: "مغامرة قادمة",
    completedText: "بطل متميز",
  },
  coders: {
    upcomingIcon: <Code size={28} className="text-emerald-500" />,
    completedIcon: <Trophy size={28} className="text-blue-500" />,
    upcomingBadge: "bg-emerald-500/10 text-emerald-400",
    completedBadge: "bg-blue-500/10 text-blue-400",
    cardHover: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    btnClass: "bg-emerald-600 text-white hover:bg-emerald-700",
    fontClass: "font-mono",
    upcomingText: "PENDING_CHALLENGE",
    completedText: "SOLVED",
  },
  azhari: {
    upcomingIcon: <Book size={28} className="text-emerald-800" />,
    completedIcon: <Trophy size={28} className="text-amber-600" />,
    upcomingBadge: "bg-emerald-50 text-emerald-800",
    completedBadge: "bg-amber-50 text-amber-700",
    cardHover: "hover:border-emerald-800/30 hover:shadow-emerald-900/5",
    btnClass: "bg-emerald-800 text-white hover:bg-emerald-900",
    fontClass: "font-serif",
    upcomingText: "اختبار مرتقب",
    completedText: "تم بنجاح",
  },
  uni: {
    upcomingIcon: <GraduationCap size={28} className="text-blue-700" />,
    completedIcon: <Trophy size={28} className="text-indigo-600" />,
    upcomingBadge: "bg-blue-50 text-blue-700",
    completedBadge: "bg-indigo-50 text-indigo-700",
    cardHover: "hover:border-blue-700/30 hover:shadow-blue-900/5",
    btnClass: "bg-blue-700 text-white hover:bg-blue-800",
    fontClass: "font-sans",
    upcomingText: "امتحان مقرر",
    completedText: "ناجح",
  },
  default: {
    upcomingIcon: <BrainCircuit size={28} />,
    completedIcon: <Trophy size={28} className="text-yellow-500" />,
    upcomingBadge: "bg-blue-500/10 text-blue-500",
    completedBadge: "bg-green-500/10 text-green-500",
    cardHover: "hover:border-primary/50",
    btnClass: "bg-secondary hover:bg-primary hover:text-white",
    fontClass: "",
    upcomingText: "قادم",
    completedText: "مكتمل",
  },
};

const exams = [
  {
    id: 1,
    title: {
      kids: "تحدي الأبطال: البرمجة السحرية",
      coders: "Data Structures Mastery Quiz",
      azhari: "اختبار متن الآجرومية",
      uni: "Web Systems Final Exam",
      default: "اختبار نهاية الوحدة: هياكل البيانات",
    },
    course: {
      kids: "مغامرة البرمجة الممتعة",
      coders: "Full-Stack Development",
      azhari: "دورة اللغة العربية",
      uni: "Advanced Web Systems",
      default: "دورة تطوير تطبيقات الويب",
    },
    date: "2024-01-12",
    duration: "60 دقيقة",
    questions: 25,
    status: "upcoming",
  },
  {
    id: 2,
    title: {
      kids: "لغز الألوان العجيب",
      coders: "UI/UX Design Patterns Test",
      azhari: "اختبار مصطلح الحديث",
      uni: "Graphic Design Fundamentals",
      default: "اختبار تجريبي: نظرية الألوان",
    },
    course: {
      kids: "عالم الألوان والرسوم",
      coders: "Modern UI/UX Design",
      azhari: "علوم الحديث",
      uni: "Principles of Graphic Design",
      default: "أساسيات التصميم الجرافيكي",
    },
    date: "2023-12-28",
    score: "92/100",
    status: "completed",
  },
];

export const StudentExams = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const config = THEME_EXAMS_CONFIGS[theme as keyof typeof THEME_EXAMS_CONFIGS] || THEME_EXAMS_CONFIGS.default;

  return (
    <div className={`space-y-8 ${config.fontClass}`}>
      <div>
        <h2 className="text-2xl font-black">{t("dashboard.sidebar.exams")}</h2>
        <p className="text-muted-foreground font-bold mt-1">
          {theme === 'kids' ? 'هل أنت مستعد لمغامرات وتحديات جديدة يا بطل؟' : 'الاختبارات القادمة ونتائجك السابقة'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {exams.map((exam, index) => (
          <motion.div
            key={exam.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-card p-8 rounded-[2rem] border border-secondary relative overflow-hidden group transition-all duration-300 ${config.cardHover} shadow-sm`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${theme === 'kids' ? 'bg-pink-500/5' : 'bg-primary/5'} rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500`} />

            <div className="relative space-y-6">
              <div className="flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl ${theme === 'kids' ? 'bg-pink-100' : 'bg-primary/10'} flex items-center justify-center shadow-inner`}>
                  {exam.status === "upcoming" ? config.upcomingIcon : config.completedIcon}
                </div>
                <div className={`${exam.status === "upcoming" ? config.upcomingBadge : config.completedBadge} px-4 py-1.5 rounded-full text-xs font-black`}>
                  {exam.status === "upcoming" ? config.upcomingText : config.completedText}
                </div>
              </div>

              <div>
                <h3 className="font-black text-xl leading-tight">
                  {exam.title[theme as keyof typeof exam.title] || exam.title.default}
                </h3>
                <p className="text-muted-foreground font-bold mt-1">
                  {exam.course[theme as keyof typeof exam.course] || exam.course.default}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                  <Clock size={16} />
                  {exam.duration || exam.date}
                </div>
                {exam.status === "upcoming" ? (
                  <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                    <GraduationCap size={16} />
                    {exam.questions} {theme === 'kids' ? 'تحدي' : 'سؤال'}
                  </div>
                ) : (
                  <div className={`flex items-center gap-2 text-sm font-black ${theme === 'kids' ? 'text-pink-500' : 'text-green-500'}`}>
                    <Trophy size={16} />
                    {theme === 'kids' ? 'تقييمك البطل: ' : 'النتيجة: '} {exam.score}
                  </div>
                )}
              </div>

              {exam.status === "upcoming" ? (
                <Link
                  to={ROUTES.TAKE_EXAM.replace(":id", exam.id.toString())}
                  className={`w-full py-4 rounded-2xl font-black transition-all duration-300 flex items-center justify-center gap-2 ${config.btnClass}`}
                >
                  {theme === 'kids' ? 'ابدأ التحدي الآن' : t("exams.start_exam", "بدء الاختبار")}
                  <ArrowRight size={18} />
                </Link>
              ) : (
                <button className={`w-full py-4 rounded-2xl font-black transition-all duration-300 flex items-center justify-center gap-2 ${config.btnClass}`}>
                  {theme === 'kids' ? 'شاهد إنجازاتك' : t("exams.view_answers", "عرض الإجابات")}
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

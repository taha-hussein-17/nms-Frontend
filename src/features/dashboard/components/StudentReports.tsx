import { useTranslation } from "react-i18next";
import {
  BarChart3,
  TrendingUp,
  Target,
  Award,
  Calendar,
  Star,
  Code,
  Book,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../../providers/ThemeContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const THEME_REPORTS_CONFIGS: any = {
  kids: {
    fontClass: "font-kids",
    headerDesc: "واو! انظر إلى كل هذه الإنجازات والنجوم التي جمعتها!",
    leaderboardTitle: "أنت بطل حقيقي!",
    leaderboardDesc:
      "أنت في المركز العاشر! استمر في اللعب والتعلم لتصبح المركز الأول!",
    skillColors: [
      "bg-pink-400",
      "bg-yellow-400",
      "bg-blue-400",
      "bg-purple-400",
    ],
    awardIcon: <Star size={48} className="text-yellow-400" />,
    awardBg: "bg-pink-100",
    awardBtn: "bg-pink-500 hover:bg-pink-600 shadow-pink-200",
    statsColors: [
      "text-pink-500",
      "text-yellow-500",
      "text-blue-500",
      "text-purple-500",
    ],
    statsBgs: ["bg-pink-100", "bg-yellow-100", "bg-blue-100", "bg-purple-100"],
  },
  programmers: {
    fontClass: "font-mono",
    headerDesc: "PERFORMANCE_ANALYTICS_V1.0",
    leaderboardTitle: "TOP_CONTRIBUTOR_DETECTED",
    leaderboardDesc:
      "Current Rank: 10. You need 50 more points to bypass the next developer.",
    skillColors: [
      "bg-emerald-500",
      "bg-blue-500",
      "bg-purple-500",
      "bg-orange-500",
    ],
    awardIcon: <Code size={48} className="text-emerald-500" />,
    awardBg: "bg-emerald-500/10",
    awardBtn: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20",
    statsColors: [
      "text-emerald-400",
      "text-blue-400",
      "text-purple-400",
      "text-orange-400",
    ],
    statsBgs: [
      "bg-emerald-500/10",
      "bg-blue-500/10",
      "bg-purple-500/10",
      "bg-orange-500/10",
    ],
  },
  azhari: {
    fontClass: "font-serif",
    headerDesc: "تحليل مستوى التحصيل العلمي والتقدم في الطلب",
    leaderboardTitle: "المتسابقون في الخيرات",
    leaderboardDesc:
      "أنت في المركز العاشر بين طلاب العلم، زادك الله حرصاً وتوفيقاً.",
    skillColors: [
      "bg-emerald-700",
      "bg-amber-600",
      "bg-blue-700",
      "bg-emerald-900",
    ],
    awardIcon: <Book size={48} className="text-emerald-800" />,
    awardBg: "bg-emerald-50",
    awardBtn: "bg-emerald-800 hover:bg-emerald-900 shadow-emerald-900/10",
    statsColors: [
      "text-emerald-800",
      "text-amber-700",
      "text-blue-800",
      "text-emerald-900",
    ],
    statsBgs: ["bg-emerald-50", "bg-amber-50", "bg-blue-50", "bg-emerald-50"],
  },
  uni: {
    fontClass: "font-sans",
    headerDesc: "التقرير الأكاديمي الفصلي لمستوى الطالب",
    leaderboardTitle: "لوحة الشرف الجامعية",
    leaderboardDesc:
      "ترتيبك الحالي هو العاشر على مستوى الدفعة، استمر في التميز الأكاديمي.",
    skillColors: [
      "bg-blue-700",
      "bg-indigo-700",
      "bg-emerald-700",
      "bg-blue-900",
    ],
    awardIcon: <GraduationCap size={48} className="text-blue-700" />,
    awardBg: "bg-blue-50",
    awardBtn: "bg-blue-700 hover:bg-blue-800 shadow-blue-900/10",
    statsColors: [
      "text-blue-700",
      "text-indigo-700",
      "text-emerald-700",
      "text-blue-900",
    ],
    statsBgs: ["bg-blue-50", "bg-indigo-50", "bg-emerald-50", "bg-blue-50"],
  },
  default: {
    fontClass: "",
    headerDesc: "تحليل شامل لأدائك الدراسي وتطور مهاراتك",
    leaderboardTitle: "أنت في المركز العاشر!",
    leaderboardDesc:
      "استمر في التقدم، تفصلك 50 نقطة فقط عن المركز التاسع في قائمة المتصدرين.",
    skillColors: [
      "bg-primary",
      "bg-primary/80",
      "bg-primary/60",
      "bg-primary/40",
    ],
    awardIcon: <Award size={48} className="text-primary" />,
    awardBg: "bg-primary/10",
    awardBtn: "bg-primary hover:scale-105 shadow-primary/20",
    statsColors: [
      "text-blue-500",
      "text-green-500",
      "text-purple-500",
      "text-yellow-500",
    ],
    statsBgs: [
      "bg-blue-500/10",
      "bg-green-500/10",
      "bg-purple-500/10",
      "bg-yellow-500/10",
    ],
  },
};

export const StudentReports = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const config =
    THEME_REPORTS_CONFIGS[theme as keyof typeof THEME_REPORTS_CONFIGS] ||
    THEME_REPORTS_CONFIGS.default;

  const stats = [
    {
      label: theme === "kids" ? "حضور المغامرات" : "معدل الحضور",
      value: "95%",
      icon: Calendar,
      color: config.statsColors[0],
      bg: config.statsBgs[0],
    },
    {
      label: theme === "kids" ? "نمو مهاراتك" : "التقدم الدراسي",
      value: "+12%",
      icon: TrendingUp,
      color: config.statsColors[1],
      bg: config.statsBgs[1],
    },
    {
      label: theme === "kids" ? "تحديات فزت بها" : "المهام المكتملة",
      value: "24/28",
      icon: Target,
      color: config.statsColors[2],
      bg: config.statsBgs[2],
    },
    {
      label: theme === "kids" ? "نجومك الذهبية" : "النقاط المكتسبة",
      value: "1,250",
      icon: Award,
      color: config.statsColors[3],
      bg: config.statsBgs[3],
    },
  ];

  const skills = [
    {
      label:
        theme === "kids"
          ? "ذكاء البرمجة"
          : theme === "programmers"
            ? "Frontend_Dev"
            : "برمجة Frontend",
      value: 85,
    },
    {
      label:
        theme === "kids"
          ? "جمال التصميم"
          : theme === "programmers"
            ? "UI_Design"
            : "تصميم واجهات UI",
      value: 60,
    },
    {
      label:
        theme === "kids"
          ? "حل الألغاز"
          : theme === "programmers"
            ? "Algorithm_Solving"
            : "حل المشكلات",
      value: 75,
    },
    {
      label:
        theme === "kids"
          ? "سرعة الإنجاز"
          : theme === "programmers"
            ? "Time_Complexity"
            : "إدارة الوقت",
      value: 90,
    },
  ];

  return (
    <div className={`space-y-8 ${config.fontClass}`}>
      <div>
        <h2 className="text-2xl font-black">
          {t("dashboard.sidebar.reports")}
        </h2>
        <p className="text-muted-foreground font-bold mt-1">
          {config.headerDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card p-6 rounded-3xl border border-secondary flex flex-col items-center text-center gap-4"
          >
            <div
              className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shadow-inner`}
            >
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground">
                {stat.label}
              </p>
              <h4 className="text-2xl font-black mt-1">{stat.value}</h4>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card p-8 rounded-[2rem] border border-secondary">
          <h3 className="font-black text-xl mb-6 flex items-center gap-3">
            <BarChart3
              className={theme === "kids" ? "text-pink-500" : "text-primary"}
            />
            {theme === "kids" ? "خريطة مهاراتك" : "تحليل المهارات"}
          </h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.label} className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full ${config.skillColors[index]} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card p-8 rounded-[2rem] border border-secondary flex flex-col justify-center items-center text-center space-y-4">
          <div
            className={`w-24 h-24 rounded-full ${config.awardBg} flex items-center justify-center`}
          >
            {config.awardIcon}
          </div>
          <div>
            <h3 className="font-black text-2xl">{config.leaderboardTitle}</h3>
            <p className="text-muted-foreground font-bold mt-2 max-w-[250px]">
              {config.leaderboardDesc}
            </p>
          </div>
          <button
            className={`px-8 py-3 rounded-2xl text-white font-black shadow-lg transition-transform ${config.awardBtn}`}
          >
            {theme === "kids" ? "شاهد قائمة الأبطال" : "عرض قائمة المتصدرين"}
          </button>
        </div>
      </div>
    </div>
  );
};

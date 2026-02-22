/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useTranslation } from "react-i18next";
import { Card } from "../../../components/atoms/Card";
import { Button } from "../../../components/atoms/Button";
import { cn } from "../../../utils/cn";
import { motion } from "framer-motion";
import { useTheme } from "../../../providers/ThemeContext";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import {
  BookOpen,
  Clock,
  CheckCircle,
  BarChart3,
  Users,
  CheckSquare,
  Trophy,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { UpcomingTasks } from "./UpcomingTasks";
import { RecentMessages } from "./RecentMessages";
import type { UpcomingItem } from "./UpcomingTasks";
import { SectionHeader } from "../../../components/molecules/SectionHeader";
import { StatsGrid } from "./StatsGrid";

interface StudentDashboardProps {
  user?: { name?: string; role?: string; children?: any[] } | null;
}

// Theme-specific configurations
const THEME_DASHBOARD_CONFIGS: any = {
  kids: {
    statsColors: [
      "text-pink-500",
      "text-yellow-500",
      "text-blue-500",
      "text-purple-500",
    ],
    statsBg: ["bg-pink-100", "bg-yellow-100", "bg-blue-100", "bg-purple-100"],
    chartColor: "#FF6B6B",
    headerIcon: <Sparkles className="w-8 h-8 text-yellow-400" />,
    fontClass: "font-kids",
  },
  programmers: {
    statsColors: [
      "text-emerald-400",
      "text-blue-400",
      "text-purple-400",
      "text-orange-400",
    ],
    statsBg: [
      "bg-emerald-500/10",
      "bg-blue-500/10",
      "bg-purple-500/10",
      "bg-orange-500/10",
    ],
    chartColor: "#10B981",
    headerIcon: <Zap className="w-8 h-8 text-emerald-500" />,
    fontClass: "font-mono",
  },
  azhari: {
    statsColors: [
      "text-emerald-800",
      "text-amber-700",
      "text-blue-800",
      "text-purple-800",
    ],
    statsBg: ["bg-emerald-50", "bg-amber-50", "bg-blue-50", "bg-purple-50"],
    chartColor: "#065F46",
    headerIcon: <Trophy className="w-8 h-8 text-amber-500" />,
    fontClass: "font-serif",
  },
  uni: {
    statsColors: [
      "text-blue-600",
      "text-maroon-600",
      "text-emerald-600",
      "text-indigo-600",
    ],
    statsBg: ["bg-blue-50", "bg-maroon-50", "bg-emerald-50", "bg-indigo-50"],
    chartColor: "#2563EB",
    headerIcon: <Target className="w-8 h-8 text-blue-600" />,
    fontClass: "font-sans",
  },
  default: {
    statsColors: [
      "text-blue-500",
      "text-orange-500",
      "text-emerald-500",
      "text-violet-500",
    ],
    statsBg: [
      "bg-blue-500/10",
      "bg-orange-500/10",
      "bg-emerald-500/10",
      "bg-violet-500/10",
    ],
    chartColor: "var(--primary)",
    headerIcon: <BarChart3 className="w-8 h-8 text-primary" />,
    fontClass: "",
  },
};

// Sample placeholders: replace with real data from store / API
const sampleStats = (t: any, userRole?: string, theme = "default") => {
  const config =
    THEME_DASHBOARD_CONFIGS[theme] || THEME_DASHBOARD_CONFIGS.default;

  const base = [
    {
      key: "courses",
      label: t("dashboard.enrolled_courses", "Enrolled Courses"),
      value: "12",
      icon: BookOpen,
      color: config.statsColors[0],
      bg: config.statsBg[0],
    },
    {
      key: "hours",
      label: t("dashboard.hours_learned", "Study Hours"),
      value: "48h",
      icon: Clock,
      color: config.statsColors[1],
      bg: config.statsBg[1],
    },
    {
      key: "completed",
      label: t("dashboard.completed_courses", "Completed Courses"),
      value: "4",
      icon: CheckCircle,
      color: config.statsColors[2],
      bg: config.statsBg[2],
    },
  ];
  if (userRole === "parent") {
    base.push({
      key: "children",
      label: t("dashboard.children_count", "Children"),
      value: "2",
      icon: Users,
      color: config.statsColors[3],
      bg: config.statsBg[3],
    });
  } else {
    base.push({
      key: "certs",
      label: t("dashboard.certificates", "Certificates"),
      value: "1",
      icon: CheckSquare,
      color: config.statsColors[3],
      bg: config.statsBg[3],
    });
  }
  return base;
};

const progressData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 72 },
  { name: "May", value: 86 },
  { name: "Jun", value: 92 },
];

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ user }) => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isAr = i18n.language === "ar";
  const navigate = useNavigate();

  const dashboardConfig =
    THEME_DASHBOARD_CONFIGS[theme] || THEME_DASHBOARD_CONFIGS.default;
  const stats = sampleStats(t, user?.role, theme);

  // Sample data sets — in a real app replace with API/store data
  const courses = [
    {
      id: 1,
      title:
        theme === "programmers"
          ? "Advanced React & Next.js"
          : theme === "azhari"
            ? "تفسير القرآن الكريم"
            : "Full Stack Web Development",
      instructor: theme === "azhari" ? "د. محمد علي" : "Dr. Ahmed",
      progress: 65,
      lessonsLeft: 8,
    },
    {
      id: 2,
      title:
        theme === "programmers"
          ? "Data Structures in C++"
          : theme === "azhari"
            ? "فقه العبادات"
            : "Data Structures",
      instructor: theme === "azhari" ? "د. فاطمة الزهراء" : "Dr. Sara",
      progress: 40,
      lessonsLeft: 12,
    },
  ];

  const upcoming: UpcomingItem[] = [
    {
      id: 1,
      title:
        theme === "programmers"
          ? "Algorithm Design Assignment"
          : theme === "azhari"
            ? "اختبار الحديث"
            : t("dashboard.assignment_linear", "Linear Algebra"),
      date: "2026-02-10",
      type: "assignment",
    },
    {
      id: 2,
      title:
        theme === "programmers"
          ? "System Design Quiz"
          : theme === "azhari"
            ? "تسميع جزء عم"
            : t("dashboard.exam_calculus", "Calculus Exam"),
      date: "2026-02-15",
      type: "exam",
    },
  ];

  const messages = [
    {
      id: 1,
      from: "Instructor Ahmed",
      text: t("dashboard.msg_welcome", "Welcome to the course!"),
      time: "2h",
    },
    {
      id: 2,
      from: "Support",
      text: t("dashboard.msg_payment", "Your payment was processed."),
      time: "1d",
    },
  ];

  const handleViewClick = (key: string) => {
    switch (key) {
      case "courses":
        navigate(ROUTES.DASHBOARD_COURSES);
        break;
      case "hours":
        navigate(ROUTES.DASHBOARD_REPORTS);
        break;
      case "completed":
        navigate(`${ROUTES.DASHBOARD_COURSES}?filter=completed`);
        break;
      case "certs":
        navigate(ROUTES.DASHBOARD_CERTIFICATES);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`space-y-8 ${dashboardConfig.fontClass}`}>
      {/* Theme specific background decorative elements */}
      {theme === "programmers" && (
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
        </div>
      )}
      {theme === "kids" && (
        <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-yellow-400 blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-pink-400 blur-2xl animate-bounce" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-blue-400 blur-lg" />
        </div>
      )}
      {theme === "azhari" && (
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.png')] bg-repeat opacity-10" />
        </div>
      )}

      {/* Header / Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10"
      >
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "p-4 rounded-2xl hidden sm:flex transition-transform hover:scale-110 duration-300",
              theme === "kids"
                ? "bg-yellow-100 rotate-12"
                : theme === "programmers"
                  ? "bg-emerald-500/10 rounded-none border border-emerald-500/20"
                  : theme === "azhari"
                    ? "bg-emerald-50 rounded-full border border-emerald-100 shadow-sm"
                    : theme === "uni"
                      ? "bg-blue-50 rounded-lg border border-blue-100"
                      : "bg-primary/10"
            )}
          >
            {dashboardConfig.headerIcon}
          </div>
          <div>
            <h1
              className={cn(
                "text-4xl font-extrabold tracking-tight",
                theme === "azhari"
                  ? "font-serif text-emerald-950"
                  : theme === "programmers"
                    ? "font-mono text-emerald-500 uppercase"
                    : theme === "kids"
                      ? "font-kids text-blue-600"
                      : ""
              )}
            >
              {isAr
                ? `${theme === "programmers" ? "> " : ""}${isAr ? "مرحبا،" : "Welcome,"} ${user?.name || ""}`
                : `${theme === "programmers" ? "> " : ""}Welcome, ${user?.name || ""}`}
            </h1>
            <p
              className={cn(
                "text-muted-foreground mt-1 font-medium",
                theme === "programmers" && "font-mono text-xs opacity-70"
              )}
            >
              {theme === "programmers"
                ? "SYNAPSE_LINK: ESTABLISHED"
                : t(
                    "dashboard.subheading",
                    "Overview of your learning and activities"
                  )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            className={cn(
              "rounded-full px-5",
              theme === "kids"
                ? "bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-200"
                : theme === "programmers"
                  ? "rounded-none bg-emerald-500 hover:bg-emerald-600 text-black font-bold"
                  : theme === "azhari"
                    ? "bg-emerald-800 hover:bg-emerald-900 rounded-xl"
                    : ""
            )}
            variant="primary"
            onClick={() => navigate(ROUTES.DASHBOARD_BUY_COURSES)}
          >
            {isAr ? "شراء دورات" : "Buy Courses"}
          </Button>
        </div>
      </motion.div>

      {/* Top stats */}
      <StatsGrid stats={stats} theme={theme} onView={handleViewClick} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {/* Main column: courses + progress */}
        <div className="lg:col-span-2 space-y-6">
          <Card
            className={cn(
              "p-6 rounded-2xl",
              theme === "programmers" ? "bg-black/40 border-emerald-500/20" : ""
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <SectionHeader
                title={t("dashboard.enrolled_courses", "Your Courses")}
                icon={<BookOpen className="w-5 h-5" />}
                color="#0D358C"
                size="xl"
              />
              <Button
                size="sm"
                className="bg-[#EBF0FD] border border-[#0D358C] text-[#0D358C] hover:bg-[#EBF0FD]/80"
                onClick={() => navigate(ROUTES.DASHBOARD_COURSES)}
              >
                {t("home.view_all", "View All")}
              </Button>
            </div>
            <div className="space-y-6">
              {courses.map((c, idx) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={cn(
                    "flex flex-col sm:flex-row sm:items-center gap-6 p-4 rounded-xl border border-[#C7CED9] hover:bg-secondary/5 transition group",
                    theme === "programmers" ? "hover:bg-emerald-500/5" : ""
                  )}
                >
                  <div className="w-full sm:w-32 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={`https://picsum.photos/seed/course-${c.id}/400/240`}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">{c.title}</h3>
                      <span className="text-xs font-bold text-muted-foreground">
                        {c.lessonsLeft} {isAr ? "دروس متبقية" : "lessons left"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      {c.instructor}
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span>{isAr ? "التقدم" : "Progress"}</span>
                        <span className="text-primary">{c.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#C7CED9] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${c.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={cn(
                            "h-full rounded-full",
                            theme === "kids"
                              ? "bg-pink-400"
                              : theme === "programmers"
                                ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                : theme === "azhari"
                                  ? "bg-emerald-800"
                                  : "bg-primary"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className={cn(
                      "sm:self-center",
                      theme === "programmers"
                        ? "rounded-none border border-emerald-500/50 text-emerald-500 hover:bg-emerald-500 hover:text-black"
                        : ""
                    )}
                    onClick={() => navigate(`/courses/${c.id}`)}
                  >
                    {isAr ? "متابعة" : "Continue"}
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card
            className={cn(
              "p-6 rounded-2xl",
              theme === "programmers" ? "bg-black/40 border-emerald-500/20" : ""
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <SectionHeader
                title={isAr ? "نشاط التعلم" : "Learning Activity"}
                icon={<BarChart3 className="w-5 h-5" />}
                color="var(--primary)"
                size="xl"
              />
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={progressData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor={dashboardConfig.chartColor}
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor={dashboardConfig.chartColor}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      fontFamily:
                        theme === "programmers" ? "monospace" : "inherit",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={dashboardConfig.chartColor}
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Sidebar column: Upcoming + Messages */}
        <div className="space-y-6">
          <UpcomingTasks isAr={isAr} upcoming={upcoming} theme={theme} />
          <RecentMessages isAr={isAr} messages={messages} theme={theme} />
        </div>
      </div>
    </div>
  );
};

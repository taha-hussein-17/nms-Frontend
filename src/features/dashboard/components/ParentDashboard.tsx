import { useTranslation } from "react-i18next";
import {
  Users,
  TrendingUp,
  Bell,
  Calendar,
  FileText,
  Award,
  ShieldCheck,
  Heart,
  Zap,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../../components/atoms/Button";
import { cn } from "../../../utils/cn";
import { useTheme } from "../../../providers/ThemeContext";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Card } from "../../../components/atoms/Card";

// Theme-specific configurations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const THEME_DASHBOARD_CONFIGS: any = {
  kids: {
    statsColors: ["text-blue-500", "text-pink-500", "text-yellow-500"],
    statsBg: ["bg-blue-100", "bg-pink-100", "bg-yellow-100"],
    barColors: ["#60A5FA", "#F472B6", "#FBBF24"],
    headerIcon: <Heart className="w-8 h-8 text-pink-400" />,
    fontClass: "font-kids",
  },
  programmers: {
    statsColors: ["text-emerald-400", "text-blue-400", "text-purple-400"],
    statsBg: ["bg-emerald-500/10", "bg-blue-500/10", "bg-purple-500/10"],
    barColors: ["#10B981", "#3B82F6", "#8B5CF6"],
    headerIcon: <Zap className="w-8 h-8 text-emerald-500" />,
    fontClass: "font-mono",
  },
  azhari: {
    statsColors: ["text-emerald-800", "text-amber-700", "text-blue-800"],
    statsBg: ["bg-emerald-50", "bg-amber-50", "bg-blue-50"],
    barColors: ["#065F46", "#B45309", "#1E40AF"],
    headerIcon: <ShieldCheck className="w-8 h-8 text-emerald-700" />,
    fontClass: "font-serif",
  },
  uni: {
    statsColors: ["text-blue-600", "text-maroon-600", "text-emerald-600"],
    statsBg: ["bg-blue-50", "bg-maroon-50", "bg-emerald-50"],
    barColors: ["#2563EB", "#800000", "#10B981"],
    headerIcon: <Target className="w-8 h-8 text-blue-600" />,
    fontClass: "font-sans",
  },
  default: {
    statsColors: ["text-blue-500", "text-emerald-500", "text-purple-500"],
    statsBg: ["bg-blue-500/10", "bg-emerald-500/10", "bg-purple-500/10"],
    barColors: ["#3B82F6", "#10B981", "#8B5CF6"],
    headerIcon: <Users className="w-8 h-8 text-primary" />,
    fontClass: "",
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-empty-pattern
export const ParentDashboard = ({}: { user: any }) => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const isAr = i18n.language === "ar";

  const dashboardConfig =
    THEME_DASHBOARD_CONFIGS[theme] || THEME_DASHBOARD_CONFIGS.default;

  const stats = [
    {
      label: isAr ? "الأبناء المسجلين" : "Enrolled Children",
      value: "2",
      icon: <Users className="w-6 h-6" />,
      color: dashboardConfig.statsColors[0],
      bg: dashboardConfig.statsBg[0],
    },
    {
      label: isAr ? "متوسط التقدم" : "Average Progress",
      value: "75%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: dashboardConfig.statsColors[1],
      bg: dashboardConfig.statsBg[1],
    },
    {
      label: isAr ? "الشهادات المحصلة" : "Certificates Earned",
      value: "4",
      icon: <Award className="w-6 h-6" />,
      color: dashboardConfig.statsColors[2],
      bg: dashboardConfig.statsBg[2],
    },
  ];

  const children = [
    {
      name: isAr ? "أحمد محمد" : "Ahmed Mohamed",
      grade: isAr ? "الصف العاشر" : "Grade 10",
      progress: 85,
      lastActive: isAr ? "منذ ساعتين" : "2 hours ago",
      avatar: "https://i.pravatar.cc/150?u=a",
    },
    {
      name: isAr ? "سارة محمد" : "Sara Mohamed",
      grade: isAr ? "الصف الثامن" : "Grade 8",
      progress: 65,
      lastActive: isAr ? "منذ 5 ساعات" : "5 hours ago",
      avatar: "https://i.pravatar.cc/150?u=s",
    },
  ];

  const childrenPerformanceData = [
    {
      name: isAr ? "أحمد" : "Ahmed",
      math: 90,
      science: 85,
      history: 70,
    },
    {
      name: isAr ? "سارة" : "Sara",
      math: 75,
      science: 80,
      history: 95,
    },
  ];

  const payments = [
    {
      id: "PAY-001",
      child: isAr ? "أحمد محمد" : "Ahmed Mohamed",
      title: isAr ? "دورة الرياضيات المتقدمة" : "Advanced Math",
      amount: "$150.00",
      status: "Paid",
      date: isAr ? "10 يناير 2026" : "Jan 10, 2026",
    },
    {
      id: "PAY-002",
      child: isAr ? "سارة محمد" : "Sara Mohamed",
      title: isAr ? "دورة اللغة الإنجليزية" : "English Language",
      amount: "$120.00",
      status: "Pending",
      date: isAr ? "15 يناير 2026" : "Jan 15, 2026",
    },
  ];

  return (
    <div className={cn("space-y-6", dashboardConfig.fontClass)}>
      {/* Theme specific background decorative elements */}
      {theme === "programmers" && (
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      )}
      {theme === "kids" && (
        <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl -ml-32 -mb-32" />
        </div>
      )}
      {theme === "azhari" && (
        <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.png')] bg-repeat opacity-20" />
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "p-4 rounded-2xl hidden sm:flex transition-transform hover:scale-110 duration-300",
              theme === "kids"
                ? "bg-pink-100 rotate-12"
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
                "text-3xl font-extrabold tracking-tight",
                theme === "azhari"
                  ? "font-serif text-emerald-950"
                  : theme === "programmers"
                    ? "font-mono text-emerald-500 uppercase"
                    : theme === "kids"
                      ? "font-kids text-blue-600"
                      : ""
              )}
            >
              {isAr ? "لوحة تحكم ولي الأمر" : "Parent Dashboard"}
            </h1>
            <p
              className={cn(
                "text-muted-foreground mt-1 font-medium",
                theme === "programmers" && "font-mono text-xs opacity-70"
              )}
            >
              {theme === "programmers"
                ? "> PARENT_CONTROL_LINK: ACTIVE"
                : isAr
                  ? "متابعة أداء أبنائك والأنشطة التعليمية"
                  : "Monitor your children's performance and learning activities"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Calendar className="w-4 h-4 mr-2" />
            {isAr ? "الجدول الزمني" : "Schedule"}
          </Button>
          <Button
            className={cn(
              "rounded-full px-6",
              theme === "kids"
                ? "bg-blue-500 hover:bg-blue-600"
                : theme === "programmers"
                  ? "rounded-none bg-emerald-500 hover:bg-emerald-600 text-black font-bold"
                  : theme === "azhari"
                    ? "bg-emerald-800 hover:bg-emerald-900 rounded-xl"
                    : ""
            )}
          >
            <Bell className="w-4 h-4 mr-2" />
            {isAr ? "التنبيهات" : "Notifications"}
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className={cn(
                "p-6",
                theme === "programmers"
                  ? "bg-black/40 border-emerald-500/20"
                  : ""
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <h3 className="text-3xl font-black">{stat.value}</h3>
                </div>
                <div className={cn("p-4 rounded-2xl", stat.bg)}>
                  {stat.icon}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Children Progress */}
        <div className="lg:col-span-2 space-y-6">
          <Card
            className={cn(
              "p-6",
              theme === "programmers" ? "bg-black/40 border-emerald-500/20" : ""
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-extrabold flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                {isAr ? "تقدم الأبناء" : "Children's Progress"}
              </h2>
              <Button variant="ghost" size="sm">
                {isAr ? "عرض الكل" : "View All"}
              </Button>
            </div>
            <div className="space-y-6">
              {children.map((child, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col sm:flex-row sm:items-center gap-6 p-4 rounded-2xl border border-transparent hover:border-primary/10 hover:bg-secondary/5 transition",
                    theme === "programmers" ? "hover:bg-emerald-500/5" : ""
                  )}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={child.avatar}
                      alt={child.name}
                      className="w-16 h-16 rounded-full border-2 border-primary/20 p-1"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{child.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {child.grade}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span>{isAr ? "معدل الإنجاز" : "Completion Rate"}</span>
                      <span className="text-primary">{child.progress}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-secondary/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${child.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={cn(
                          "h-full rounded-full",
                          theme === "kids"
                            ? "bg-pink-400"
                            : theme === "programmers"
                              ? "bg-emerald-500"
                              : theme === "azhari"
                                ? "bg-emerald-800"
                                : "bg-primary"
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-2 text-right">
                    <p className="text-xs text-muted-foreground">
                      {isAr ? "آخر نشاط:" : "Last active:"}
                    </p>
                    <p className="text-sm font-bold">{child.lastActive}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Performance Chart */}
          <Card
            className={cn(
              "p-6",
              theme === "programmers" ? "bg-black/40 border-emerald-500/20" : ""
            )}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-extrabold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                {isAr ? "مقارنة الأداء" : "Performance Comparison"}
              </h2>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={childrenPerformanceData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f0f0f0"
                  />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Bar
                    dataKey="math"
                    fill={dashboardConfig.barColors[0]}
                    radius={[4, 4, 0, 0]}
                    name={isAr ? "رياضيات" : "Math"}
                  />
                  <Bar
                    dataKey="science"
                    fill={dashboardConfig.barColors[1]}
                    radius={[4, 4, 0, 0]}
                    name={isAr ? "علوم" : "Science"}
                  />
                  <Bar
                    dataKey="history"
                    fill={dashboardConfig.barColors[2]}
                    radius={[4, 4, 0, 0]}
                    name={isAr ? "تاريخ" : "History"}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Recent Activities & Payments */}
        <div className="space-y-6">
          <Card
            className={cn(
              "p-6",
              theme === "programmers" ? "bg-black/40 border-emerald-500/20" : ""
            )}
          >
            <h2 className="text-lg font-extrabold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              {isAr ? "الشهادات المحصلة" : "Recent Certificates"}
            </h2>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">
                      {isAr ? "شهادة إتمام دورة" : "Completion Certificate"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {isAr ? "منذ يومين" : "2 days ago"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card
            className={cn(
              "p-6",
              theme === "programmers" ? "bg-black/40 border-emerald-500/20" : ""
            )}
          >
            <h2 className="text-lg font-extrabold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              {isAr ? "المدفوعات الأخيرة" : "Recent Payments"}
            </h2>
            <div className="space-y-4">
              {payments.map((payment, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/5 space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-sm">{payment.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {payment.child}
                      </p>
                    </div>
                    <span className="text-sm font-black text-primary">
                      {payment.amount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-secondary/10">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">
                      {payment.date}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                      {isAr ? "ناجح" : "Success"}
                    </span>
                  </div>
                </div>
              ))}
              <Button
                variant="ghost"
                className="w-full text-xs font-bold"
                size="sm"
              >
                {isAr ? "عرض كل الفواتير" : "View All Invoices"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

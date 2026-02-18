import { useTranslation } from "react-i18next";
import {
  FileText,
  CheckCircle,
  Upload,
  Calendar,
  Code,
  Book,
  GraduationCap,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../../providers/ThemeContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const THEME_ASSIGNMENTS_CONFIGS: any = {
  kids: {
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    pendingBadge: "bg-yellow-100 text-yellow-600",
    submittedBadge: "bg-green-100 text-green-600",
    lateBadge: "bg-red-100 text-red-600",
    cardHover: "hover:shadow-pink-200/50 hover:border-pink-300",
    btnClass: "bg-pink-500 hover:bg-pink-600 text-white rounded-xl",
    fontClass: "font-kids",
  },
  coders: {
    icon: <Code className="w-6 h-6 text-emerald-500" />,
    pendingBadge:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    submittedBadge: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    lateBadge: "bg-red-500/10 text-red-400 border border-red-500/20",
    cardHover: "hover:shadow-emerald-500/20 hover:border-emerald-500/50",
    btnClass: "bg-emerald-600 hover:bg-emerald-700 text-white rounded-none",
    fontClass: "font-mono",
  },
  azhari: {
    icon: <Book className="w-6 h-6 text-emerald-800" />,
    pendingBadge: "bg-amber-50 text-amber-700 border border-amber-200",
    submittedBadge: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    lateBadge: "bg-red-50 text-red-800 border border-red-200",
    cardHover: "hover:shadow-emerald-900/10 hover:border-emerald-800/30",
    btnClass: "bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg",
    fontClass: "font-serif",
  },
  uni: {
    icon: <GraduationCap className="w-6 h-6 text-blue-700" />,
    pendingBadge: "bg-blue-50 text-blue-700 border border-blue-200",
    submittedBadge: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    lateBadge: "bg-red-50 text-red-700 border border-red-200",
    cardHover: "hover:shadow-blue-900/10 hover:border-blue-700/30",
    btnClass: "bg-blue-700 hover:bg-blue-800 text-white rounded-md",
    fontClass: "font-sans",
  },
  default: {
    icon: <FileText className="w-6 h-6 text-primary" />,
    pendingBadge: "bg-orange-100 text-orange-600",
    submittedBadge: "bg-green-100 text-green-600",
    lateBadge: "bg-red-100 text-red-600",
    cardHover: "hover:shadow-lg hover:border-primary/50",
    btnClass: "bg-primary hover:bg-primary/90 text-white rounded-lg",
    fontClass: "",
  },
};

const assignments = [
  {
    id: 1,
    title: {
      kids: "ارسم بطل قصتك",
      coders: "Build a React Component",
      azhari: "تسميع سورة الملك",
      uni: "Research Paper: AI Ethics",
      default: "تطوير واجهة المستخدم",
    },
    course: {
      kids: "فن الرسم",
      coders: "React Fundamentals",
      azhari: "القرآن الكريم",
      uni: "Artificial Intelligence",
      default: "تطوير الويب",
    },
    dueDate: "2024-03-20",
    status: "pending",
    grade: null,
  },
  {
    id: 2,
    title: {
      kids: "حل لغز الأرقام",
      coders: "Algorithm Challenge: Sorting",
      azhari: "إعراب سورة الفاتحة",
      uni: "Database Design Schema",
      default: "مشروع قواعد البيانات",
    },
    course: {
      kids: "الحساب الممتع",
      coders: "Algorithms & Data Structures",
      azhari: "النحو العربي",
      uni: "Database Systems",
      default: "قواعد البيانات",
    },
    dueDate: "2024-03-15",
    status: "submitted",
    grade: "95/100",
  },
  {
    id: 3,
    title: {
      kids: "تجربة العلوم المنزلية",
      coders: "Debug the API",
      azhari: "بحث في السيرة النبوية",
      uni: "Network Security Analysis",
      default: "تحليل الشبكات",
    },
    course: {
      kids: "العلوم المرحة",
      coders: "Backend Development",
      azhari: "السيرة النبوية",
      uni: "Cybersecurity",
      default: "أمن المعلومات",
    },
    dueDate: "2024-03-10",
    status: "late",
    grade: null,
  },
];

export const StudentAssignments = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isAr = i18n.language === "ar";

  const config =
    THEME_ASSIGNMENTS_CONFIGS[
      theme as keyof typeof THEME_ASSIGNMENTS_CONFIGS
    ] || THEME_ASSIGNMENTS_CONFIGS.default;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "submitted":
        return config.submittedBadge;
      case "late":
        return config.lateBadge;
      default:
        return config.pendingBadge;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "submitted":
        return isAr ? "تم التسليم" : "Submitted";
      case "late":
        return isAr ? "متأخر" : "Late";
      default:
        return isAr ? "قيد الانتظار" : "Pending";
    }
  };

  return (
    <div className={`space-y-8 ${config.fontClass}`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
            {config.icon}
            {t("dashboard.sidebar.assignments", "Assignments")}
          </h2>
          <p className="text-muted-foreground font-medium">
            {theme === "kids"
              ? "واجباتك الممتعة تنتظرك يا بطل!"
              : isAr
                ? "تتبع واجباتك الدراسية ومواعيد التسليم"
                : "Track your assignments and deadlines"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {assignments.map((assignment, index) => (
          <motion.div
            key={assignment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group bg-card p-6 rounded-2xl border border-secondary transition-all duration-300 ${config.cardHover}`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl ${
                    assignment.status === "submitted"
                      ? "bg-green-100 text-green-600"
                      : assignment.status === "late"
                        ? "bg-red-100 text-red-600"
                        : "bg-secondary"
                  }`}
                >
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {assignment.title[theme as keyof typeof assignment.title] ||
                      assignment.title.default}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {assignment.course[
                      theme as keyof typeof assignment.course
                    ] || assignment.course.default}
                  </p>

                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {isAr ? "موعد التسليم:" : "Due:"} {assignment.dueDate}
                      </span>
                    </div>
                    {assignment.grade && (
                      <div className="flex items-center gap-1.5 font-bold text-primary">
                        <CheckCircle className="w-4 h-4" />
                        <span>
                          {isAr ? "الدرجة:" : "Grade:"} {assignment.grade}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 self-end md:self-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(assignment.status)}`}
                >
                  {getStatusText(assignment.status)}
                </span>

                {assignment.status === "pending" && (
                  <button
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-transform hover:scale-105 active:scale-95 ${config.btnClass}`}
                  >
                    <Upload className="w-4 h-4" />
                    {isAr ? "رفع الواجب" : "Upload"}
                  </button>
                )}

                {assignment.status !== "pending" && (
                  <button className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                    {isAr ? "عرض التفاصيل" : "View Details"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { useTranslation } from "react-i18next";
import {
  BookOpen,
  PlayCircle,
  Clock,
  CheckCircle2,
  Star,
  Code,
  GraduationCap,
  Book,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../../providers/ThemeContext";
import { useSearchParams } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const THEME_COURSES_CONFIGS: any = {
  kids: {
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    badgeBg: "bg-pink-100 text-pink-600",
    cardHover: "hover:shadow-pink-200/50",
    progressBar: "bg-gradient-to-r from-pink-400 to-yellow-400",
    fontClass: "font-kids",
    playBtnBg: "bg-pink-500",
    instructorLabel: "المعلم المبدع",
  },
  coders: {
    icon: <Code className="w-5 h-5 text-emerald-500" />,
    badgeBg: "bg-emerald-500/10 text-emerald-400",
    cardHover: "hover:shadow-emerald-500/20",
    progressBar: "bg-emerald-500",
    fontClass: "font-mono",
    playBtnBg: "bg-emerald-600",
    instructorLabel: "المدرب التقني",
  },
  azhari: {
    icon: <Book className="w-5 h-5 text-emerald-800" />,
    badgeBg: "bg-emerald-50 text-emerald-800",
    cardHover: "hover:shadow-emerald-900/10",
    progressBar: "bg-emerald-700",
    fontClass: "font-serif",
    playBtnBg: "bg-emerald-800",
    instructorLabel: "الشيخ / الأستاذ",
  },
  uni: {
    icon: <GraduationCap className="w-5 h-5 text-blue-700" />,
    badgeBg: "bg-blue-50 text-blue-700",
    cardHover: "hover:shadow-blue-900/10",
    progressBar: "bg-blue-600",
    fontClass: "font-sans",
    playBtnBg: "bg-blue-700",
    instructorLabel: "الدكتور / المحاضر",
  },
  default: {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    badgeBg: "bg-primary/10 text-primary",
    cardHover: "hover:shadow-primary/10",
    progressBar: "bg-primary",
    fontClass: "",
    playBtnBg: "bg-primary",
    instructorLabel: "المحاضر",
  },
};

const courses = [
  {
    id: 1,
    title: {
      kids: "مغامرة البرمجة الممتعة",
      coders: "Mastering Full-Stack Development",
      azhari: "شرح المقدمة الآجرومية في النحو",
      uni: "Advanced Web Systems Architecture",
      default: "دورة تطوير تطبيقات الويب الشاملة",
    },
    instructor: {
      kids: "كابتن برمج",
      coders: "Eng. Yousef Reda",
      azhari: "د. محمد شاكر",
      uni: "Prof. Ahmed Ali",
      default: "د. محمد شاكر",
    },
    progress: 75,
    lessons: 48,
    completedLessons: 36,
    lastAccessed: "منذ ساعتين",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: {
      kids: "عالم الألوان والرسوم",
      coders: "Modern UI/UX Design Patterns",
      azhari: "تيسير مصطلح الحديث",
      uni: "Principles of Graphic Design",
      default: "أساسيات التصميم الجرافيكي و UI/UX",
    },
    instructor: {
      kids: "أبلة فنانة",
      coders: "Laila Hassan",
      azhari: "الشيخ يحيى كمال",
      uni: "Dr. Sarah Johnson",
      default: "أ. ليلى حسن",
    },
    progress: 30,
    lessons: 32,
    completedLessons: 10,
    lastAccessed: "أمس",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: {
      kids: "الروبوت الذكي الصغير",
      coders: "Deep Learning & Neural Networks",
      azhari: "تاريخ الفقه الإسلامي",
      uni: "Introduction to Artificial Intelligence",
      default: "تعلم الآلة والذكاء الاصطناعي",
    },
    instructor: {
      kids: "مستر آلي",
      coders: "Matrix Architect",
      azhari: "د. محمود عبد الهادي",
      uni: "Dr. Robert Smith",
      default: "م. يوسف رضا",
    },
    progress: 10,
    lessons: 54,
    completedLessons: 5,
    lastAccessed: "منذ 3 أيام",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: {
      kids: "المبرمج الصغير المحترف",
      coders: "Advanced React Patterns",
      azhari: "علوم القرآن",
      uni: "Software Engineering Ethics",
      default: "أساسيات البرمجة",
    },
    instructor: {
      kids: "كابتن كود",
      coders: "Sarah Connor",
      azhari: "د. أحمد علي",
      uni: "Prof. John Doe",
      default: "أ. محمد أحمد",
    },
    progress: 100,
    lessons: 20,
    completedLessons: 20,
    lastAccessed: "منذ أسبوع",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
  },
];

export const StudentCourses = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const config =
    THEME_COURSES_CONFIGS[theme as keyof typeof THEME_COURSES_CONFIGS] ||
    THEME_COURSES_CONFIGS.default;

  const filteredCourses = courses.filter((course) => {
    if (filter === "completed") {
      return course.progress === 100;
    }
    return true;
  });

  return (
    <div className={`space-y-8 ${config.fontClass}`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black">
            {t("dashboard.sidebar.courses")}
          </h2>
          <p className="text-muted-foreground font-bold mt-1">
            {theme === "kids"
              ? "واو! انظر إلى كل هذه المغامرات التعليمية الرائعة!"
              : "تابع تقدمك في دوراتك التعليمية"}
          </p>
        </div>
        <div className="flex gap-2">
          <div
            className={`${config.badgeBg} px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2`}
          >
            {config.icon}
            {filteredCourses.length}{" "}
            {theme === "kids" ? "مغامرات ممتعة" : "دورات نشطة"}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group bg-card rounded-3xl border border-secondary overflow-hidden transition-all duration-300 ${config.cardHover} hover:shadow-2xl`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={course.image}
                alt={
                  course.title[theme as keyof typeof course.title] ||
                  course.title.default
                }
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center">
                <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-black flex items-center gap-1.5">
                  <Clock size={14} />
                  {course.lastAccessed}
                </div>
              </div>
              <button
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 ${config.playBtnBg} text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-xl`}
              >
                <PlayCircle size={32} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-black text-lg line-clamp-1 group-hover:text-primary transition-colors">
                  {course.title[theme as keyof typeof course.title] ||
                    course.title.default}
                </h3>
                <p className="text-sm text-muted-foreground font-bold mt-1">
                  <span className="opacity-70">{config.instructorLabel}: </span>
                  {course.instructor[theme as keyof typeof course.instructor] ||
                    course.instructor.default}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black">
                  <span>
                    {theme === "kids" ? "أنجزت" : "إكمال"} {course.progress}%
                  </span>
                  <span className="text-muted-foreground">
                    {course.completedLessons}/{course.lessons}{" "}
                    {theme === "kids" ? "نجمة" : "درس"}
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${config.progressBar} rounded-full`}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-secondary flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-black text-muted-foreground">
                  <CheckCircle2
                    size={16}
                    className={
                      theme === "kids" ? "text-pink-500" : "text-green-500"
                    }
                  />
                  {course.lessons - course.completedLessons}{" "}
                  {theme === "kids" ? "تحديات متبقية" : "دروس متبقية"}
                </div>
                <button
                  className={`text-sm font-black ${theme === "kids" ? "text-pink-500" : "text-primary"} hover:underline`}
                >
                  {theme === "kids" ? "هيا بنا!" : "متابعة الآن"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// import { useTranslation } from "react-i18next";
import {
  Bell,
  Shield,
  Languages,
  Palette,
  Trash2,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { LanguageToggle } from "../../../components/atoms/LanguageToggle";
import { ThemeToggle } from "../../../components/atoms/ThemeToggle";
import { useTheme } from "../../../providers/ThemeContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const THEME_SETTINGS_CONFIGS: any = {
  kids: {
    fontClass: "font-kids",
    title: "إعدادات الأبطال",
    desc: "خصص مغامرتك الخاصة في المنصة",
    dangerTitle: "منطقة الحذر!",
    dangerDesc: "حذف الحساب سيؤدي إلى فقدان جميع نجومك وإنجازاتك!",
    iconColors: {
      notifications: "text-yellow-500",
      privacy: "text-blue-500",
      appearance: "text-pink-500",
      language: "text-purple-500",
    },
    bgColors: {
      notifications: "bg-yellow-100",
      privacy: "bg-blue-100",
      appearance: "bg-pink-100",
      language: "bg-purple-100",
    },
  },
  coders: {
    fontClass: "font-mono",
    title: "SYSTEM_PREFERENCES",
    desc: "Configure your development environment",
    dangerTitle: "CRITICAL_ACTION",
    dangerDesc:
      "Account deletion is irreversible. All repositories will be wiped.",
    iconColors: {
      notifications: "text-emerald-400",
      privacy: "text-blue-400",
      appearance: "text-purple-400",
      language: "text-orange-400",
    },
    bgColors: {
      notifications: "bg-emerald-500/10",
      privacy: "bg-blue-500/10",
      appearance: "bg-purple-500/10",
      language: "bg-orange-500/10",
    },
  },
  azhari: {
    fontClass: "font-serif",
    title: "إعدادات الحساب",
    desc: "تخصيص تجربة طالب العلم",
    dangerTitle: "تنبيه هام",
    dangerDesc: "حذف الحساب سيؤدي إلى فقدان جميع سجلاتك التعليمية بشكل نهائي.",
    iconColors: {
      notifications: "text-emerald-800",
      privacy: "text-amber-700",
      appearance: "text-blue-800",
      language: "text-purple-800",
    },
    bgColors: {
      notifications: "bg-emerald-50",
      privacy: "bg-amber-50",
      appearance: "bg-blue-50",
      language: "bg-purple-50",
    },
  },
  uni: {
    fontClass: "font-sans",
    title: "الإعدادات الأكاديمية",
    desc: "تخصيص ملفك الجامعي",
    dangerTitle: "إجراء خطير",
    dangerDesc: "سيتم مسح جميع بياناتك الأكاديمية وسجلات الحضور والغياب.",
    iconColors: {
      notifications: "text-blue-600",
      privacy: "text-maroon-600",
      appearance: "text-emerald-600",
      language: "text-indigo-600",
    },
    bgColors: {
      notifications: "bg-blue-50",
      privacy: "bg-maroon-50",
      appearance: "bg-emerald-50",
      language: "bg-indigo-50",
    },
  },
  default: {
    fontClass: "",
    title: "الإعدادات",
    desc: "تخصيص تجربتك داخل المنصة",
    dangerTitle: "منطقة الخطر",
    dangerDesc: "حذف الحساب سيؤدي إلى فقدان جميع بياناتك ودوراتك بشكل نهائي.",
    iconColors: {
      notifications: "text-blue-500",
      privacy: "text-green-500",
      appearance: "text-purple-500",
      language: "text-orange-500",
    },
    bgColors: {
      notifications: "bg-blue-500/10",
      privacy: "bg-green-500/10",
      appearance: "bg-purple-500/10",
      language: "bg-orange-500/10",
    },
  },
};

export const StudentSettings = () => {
  const { theme } = useTheme();
  const config =
    THEME_SETTINGS_CONFIGS[theme as keyof typeof THEME_SETTINGS_CONFIGS] ||
    THEME_SETTINGS_CONFIGS.default;

  const sections = [
    {
      title: "الإشعارات",
      icon: theme === "kids" ? Star : Bell,
      desc:
        theme === "kids"
          ? "تحكم في تنبيهات النجوم والجوائز"
          : "تحكم في كيفية تلقي التنبيهات والرسائل",
      color: config.iconColors.notifications,
      bg: config.bgColors.notifications,
    },
    {
      title: "الخصوصية",
      icon: theme === "kids" ? Shield : Shield,
      desc:
        theme === "kids"
          ? "إدارة أمان ملفك الشخصي"
          : "إدارة من يمكنه رؤية ملفك الشخصي ونشاطك",
      color: config.iconColors.privacy,
      bg: config.bgColors.privacy,
    },
    {
      title: "المظهر",
      icon: theme === "kids" ? Palette : Palette,
      desc:
        theme === "kids"
          ? "اختر ألوانك المفضلة للمنصة"
          : "تخصيص ألوان الواجهة والوضع الليلي",
      color: config.iconColors.appearance,
      bg: config.bgColors.appearance,
      action: <ThemeToggle />,
    },
    {
      title: "اللغة",
      icon: Languages,
      desc:
        theme === "kids"
          ? "اختر اللغة التي تفضلها"
          : "اختر اللغة المفضلة لاستخدام المنصة",
      color: config.iconColors.language,
      bg: config.bgColors.language,
      action: <LanguageToggle />,
    },
  ];

  return (
    <div className={`max-w-4xl mx-auto space-y-8 ${config.fontClass}`}>
      <div>
        <h2 className="text-2xl font-black">{config.title}</h2>
        <p className="text-muted-foreground font-bold mt-1">{config.desc}</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`group bg-card p-6 rounded-[2rem] border border-secondary flex items-center justify-between hover:border-primary/50 transition-all duration-300 ${theme === "kids" ? "hover:shadow-lg hover:shadow-pink-100" : ""}`}
          >
            <div className="flex items-center gap-5">
              <div
                className={`w-14 h-14 rounded-2xl ${section.bg} ${section.color} flex items-center justify-center shadow-inner`}
              >
                <section.icon size={28} />
              </div>
              <div>
                <h3 className="font-black text-lg">{section.title}</h3>
                <p className="text-sm text-muted-foreground font-bold">
                  {section.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {section.action || (
                <button
                  className={`p-3 rounded-xl hover:bg-secondary text-muted-foreground transition-colors ${theme === "kids" ? "hover:text-pink-500" : ""}`}
                >
                  <ChevronRight size={24} className="rtl:rotate-180" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-8 border-t border-secondary">
        <div
          className={`${theme === "kids" ? "bg-pink-50" : "bg-destructive/5"} p-8 rounded-[2rem] border ${theme === "kids" ? "border-pink-100" : "border-destructive/10"} flex items-center justify-between`}
        >
          <div className="space-y-1">
            <h3
              className={`font-black ${theme === "kids" ? "text-pink-600" : "text-destructive"} text-lg`}
            >
              {config.dangerTitle}
            </h3>
            <p
              className={`text-sm ${theme === "kids" ? "text-pink-400" : "text-destructive/70"} font-bold`}
            >
              {config.dangerDesc}
            </p>
          </div>
          <button
            className={`px-6 py-3 rounded-2xl ${theme === "kids" ? "bg-pink-500" : "bg-destructive"} text-white font-black hover:scale-105 transition-transform flex items-center gap-2 shadow-lg ${theme === "kids" ? "shadow-pink-200" : "shadow-destructive/20"}`}
          >
            <Trash2 size={18} />
            حذف الحساب
          </button>
        </div>
      </div>
    </div>
  );
};

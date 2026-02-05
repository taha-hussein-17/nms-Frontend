import { useTranslation } from "react-i18next";
import { User, Mail, Phone, MapPin, Camera, Save, Lock } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { Button } from "../../../components/atoms/Button";
import { useTheme } from "../../../providers/ThemeContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const THEME_PROFILE_CONFIGS: any = {
  kids: {
    headerGradient: "from-pink-400 via-yellow-300 to-blue-300",
    iconColor: "text-pink-500",
    btnClass: "bg-pink-500 hover:bg-pink-600 rounded-3xl",
    cardBorder: "border-pink-200",
    fontClass: "font-kids",
    avatarBg: "bg-pink-100",
    label: "معلومات البطل",
  },
  coders: {
    headerGradient: "from-emerald-900 via-emerald-800 to-transparent",
    iconColor: "text-emerald-500",
    btnClass: "bg-emerald-600 hover:bg-emerald-700 rounded-lg",
    cardBorder: "border-emerald-500/20",
    fontClass: "font-mono",
    avatarBg: "bg-emerald-500/10",
    label: "USER_PROFILE_DATA",
  },
  azhari: {
    headerGradient: "from-emerald-900 via-emerald-800 to-amber-900/20",
    iconColor: "text-emerald-800",
    btnClass: "bg-emerald-800 hover:bg-emerald-900 rounded-xl",
    cardBorder: "border-emerald-800/10",
    fontClass: "font-serif",
    avatarBg: "bg-emerald-50",
    label: "بيانات طالب العلم",
  },
  uni: {
    headerGradient: "from-blue-900 via-blue-800 to-indigo-900/20",
    iconColor: "text-blue-700",
    btnClass: "bg-blue-700 hover:bg-blue-800 rounded-2xl",
    cardBorder: "border-blue-700/10",
    fontClass: "font-sans",
    avatarBg: "bg-blue-50",
    label: "المعلومات الأكاديمية",
  },
  default: {
    headerGradient: "from-primary/20 via-primary/10 to-transparent",
    iconColor: "text-primary",
    btnClass: "bg-primary hover:bg-primary/90 rounded-2xl",
    cardBorder: "border-secondary",
    fontClass: "",
    avatarBg: "bg-card",
    label: "المعلومات الشخصية",
  },
};

export const StudentProfile = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state: RootState) => state.auth);
  const { theme } = useTheme();
  const config =
    THEME_PROFILE_CONFIGS[theme as keyof typeof THEME_PROFILE_CONFIGS] ||
    THEME_PROFILE_CONFIGS.default;

  return (
    <div className={`max-w-4xl mx-auto space-y-8 ${config.fontClass}`}>
      <div className="relative">
        <div
          className={`h-48 bg-gradient-to-r ${config.headerGradient} rounded-[2.5rem] border ${config.cardBorder}`}
        />
        <div className="absolute -bottom-12 right-12 flex items-end gap-6">
          <div className="relative group">
            <div
              className={`w-32 h-32 rounded-[2rem] ${config.avatarBg} border-4 border-background flex items-center justify-center ${config.iconColor} text-4xl font-black shadow-xl overflow-hidden`}
            >
              {user?.name?.[0] || "U"}
            </div>
            <button
              className={`absolute bottom-2 left-2 p-2 ${theme === "kids" ? "bg-pink-500" : "bg-primary"} text-white rounded-xl shadow-lg hover:scale-110 transition-transform`}
            >
              <Camera size={18} />
            </button>
          </div>
          <div className="pb-4">
            <h2 className="text-3xl font-black">
              {user?.name ||
                (theme === "kids" ? "البطل المبدع" : "اسم المستخدم")}
            </h2>
            <p className="text-muted-foreground font-bold uppercase tracking-widest text-sm mt-1">
              {user?.role === "parent" ? t("auth.parent") : t("auth.student")}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="md:col-span-2 space-y-6">
          <div
            className={`bg-card p-8 rounded-[2rem] border ${config.cardBorder} space-y-6 shadow-sm`}
          >
            <h3 className="text-xl font-black flex items-center gap-2">
              <User className={config.iconColor} size={24} />
              {config.label}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-muted-foreground uppercase tracking-widest px-2">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <User
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <input
                    type="text"
                    defaultValue={user?.name}
                    className="w-full bg-secondary/30 border-none rounded-2xl py-3 pr-12 pl-4 text-sm font-bold focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-muted-foreground uppercase tracking-widest px-2">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <Mail
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="w-full bg-secondary/30 border-none rounded-2xl py-3 pr-12 pl-4 text-sm font-bold focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-muted-foreground uppercase tracking-widest px-2">
                  رقم الهاتف
                </label>
                <div className="relative">
                  <Phone
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <input
                    type="tel"
                    placeholder="01xxxxxxxxx"
                    className="w-full bg-secondary/30 border-none rounded-2xl py-3 pr-12 pl-4 text-sm font-bold focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-muted-foreground uppercase tracking-widest px-2">
                  العنوان
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="القاهرة، مصر"
                    className="w-full bg-secondary/30 border-none rounded-2xl py-3 pr-12 pl-4 text-sm font-bold focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                className={`h-12 font-black gap-2 px-8 ${config.btnClass}`}
              >
                <Save size={18} />
                حفظ التغييرات
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div
            className={`bg-card p-8 rounded-[2rem] border ${config.cardBorder} space-y-6 shadow-sm`}
          >
            <h3 className="text-xl font-black flex items-center gap-2">
              <Lock className={config.iconColor} size={24} />
              الأمان
            </h3>
            <p className="text-sm text-muted-foreground font-bold">
              {theme === "kids"
                ? "حافظ على سرية كلمة مرورك لتكون بطلاً آمناً!"
                : "قم بتحديث كلمة المرور الخاصة بك بانتظام للحفاظ على أمان حسابك."}
            </p>
            <Button
              variant="outline"
              className={`w-full h-12 rounded-2xl font-black border-2 ${theme === "kids" ? "border-pink-200 hover:bg-pink-50" : ""}`}
            >
              تغيير كلمة المرور
            </Button>
          </div>

          <div
            className={`${theme === "kids" ? "bg-pink-500/5 border-pink-500/10" : "bg-primary/5 border-primary/10"} p-8 rounded-[2rem] border space-y-4`}
          >
            <h4
              className={`font-black ${theme === "kids" ? "text-pink-500" : "text-primary"}`}
            >
              حالة الحساب
            </h4>
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${theme === "kids" ? "bg-pink-500" : "bg-green-500"} animate-pulse`}
              />
              <span className="text-sm font-black">
                {theme === "kids" ? "أنت بطل نشط ومميز!" : "نشط ومفعل"}
              </span>
            </div>
            <p className="text-xs font-bold text-muted-foreground">
              تاريخ الانضمام: يناير 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import { LoginForm } from "../../features/auth/components/LoginForm";
import { MainLayout } from "../../components/templates/MainLayout";
import { Reveal } from "../../components/atoms/Reveal";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  ShieldCheck,
  Terminal,
  Book,
  GraduationCap,
} from "lucide-react";
import { cn } from "../../utils/cn";
import { useTheme } from "../../providers/ThemeContext";

const LoginPage = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { theme } = useTheme();

  const getThemeConfig = () => {
    switch (theme) {
      case "programmers":
        return {
          bg: "bg-black font-mono",
          accent: "text-green-500",
          card: "bg-[#111] border-green-500/30",
          icon: Terminal,
          title: "root@nms-academy:~$ login",
        };
      case "azhari":
        return {
          bg: "bg-[#FDFBF7] dark:bg-[#1A1814] font-serif",
          accent: "text-emerald-700 dark:text-emerald-500",
          card: "bg-white dark:bg-[#25231F] border-emerald-700",
          icon: Book,
          title: isAr ? "تسجيل الدخول لطالب العلم" : "Scholar Login",
        };
      case "uni":
        return {
          bg: "bg-slate-50 dark:bg-slate-900",
          accent: "text-maroon-700 dark:text-maroon-500",
          card: "bg-white dark:bg-slate-800 border-maroon-700",
          icon: GraduationCap,
          title: isAr
            ? "بوابة تسجيل الدخول الأكاديمية"
            : "Academic Login Portal",
        };
      case "kids":
        return {
          bg: "bg-yellow-50",
          accent: "text-primary",
          card: "bg-white border-primary",
          icon: Sparkles,
          title: isAr ? "مرحباً يا بطل!" : "Hello Hero!",
        };
      default:
        return {
          bg: "bg-slate-950",
          accent: "text-primary",
          card: "bg-card glass border-white/10",
          icon: Sparkles,
          title: isAr ? "تسجيل الدخول" : "Sign In",
        };
    }
  };

  const config = getThemeConfig();

  return (
    <MainLayout>
      <div
        className={cn(
          "min-h-screen relative flex items-center justify-center py-20 overflow-hidden transition-colors duration-500",
          config.bg
        )}
      >
        {/* Animated Background Elements */}
        {theme === "default" && (
          <>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent)] opacity-10" />
          </>
        )}

        {theme === "programmers" && (
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden text-[10px] text-green-500 leading-tight">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i}>
                {`01010110 01101001 01110011 01101001 01110100 01101111 01110010 01011111 01101100 01101111 01100111 01101001 01101110 `.repeat(
                  5
                )}
              </div>
            ))}
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Content */}
            <div
              className={cn(
                "hidden lg:block space-y-10",
                isAr ? "text-right" : "text-left"
              )}
            >
              <Reveal>
                <div
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-2 rounded-full bg-opacity-10 border border-opacity-20 text-sm font-black uppercase tracking-widest backdrop-blur-md mb-6",
                    theme === "programmers"
                      ? "bg-green-500/10 border-green-500/20 text-green-500"
                      : "bg-primary/10 border-primary/20 text-primary"
                  )}
                >
                  <config.icon className="w-4 h-4" />
                  {config.title}
                </div>
                <h1
                  className={cn(
                    "text-6xl font-black leading-tight",
                    theme === "programmers"
                      ? "text-green-500"
                      : theme === "azhari"
                        ? "text-slate-900 dark:text-white font-serif"
                        : theme === "uni"
                          ? "text-slate-900 dark:text-white"
                          : "text-white"
                  )}
                >
                  {isAr ? "سجل دخولك إلى" : "Login to Your"}
                  <br />
                  <span
                    className={cn(
                      "text-transparent bg-clip-text bg-gradient-to-r",
                      theme === "programmers"
                        ? "from-green-400 to-green-600"
                        : theme === "azhari"
                          ? "from-emerald-600 to-emerald-800"
                          : theme === "uni"
                            ? "from-maroon-600 to-maroon-800"
                            : "from-primary to-blue-400"
                    )}
                  >
                    NMS Academy
                  </span>
                </h1>
                <p
                  className={cn(
                    "text-xl font-medium leading-relaxed max-w-lg mt-8",
                    theme === "programmers"
                      ? "text-green-700"
                      : "text-slate-400"
                  )}
                >
                  {isAr
                    ? "تابع رحلتك التعليمية واستكمل مهاراتك مع أفضل الخبراء والمدربين في الوطن العربي."
                    : "Continue your learning journey and complete your skills with the best experts and instructors in the Arab world."}
                </p>
              </Reveal>

              <div className="space-y-6 pt-10">
                {[
                  {
                    icon: ShieldCheck,
                    title: isAr ? "بياناتك في أمان" : "Your Data is Secure",
                    desc: isAr
                      ? "نستخدم أحدث تقنيات التشفير لحماية خصوصيتك"
                      : "We use the latest encryption technologies to protect your privacy",
                  },
                  {
                    icon: config.icon,
                    title: isAr ? "تجربة مخصصة" : "Personalized Experience",
                    desc: isAr
                      ? "احصل على اقتراحات تعليمية تناسب اهتماماتك"
                      : "Get educational suggestions that fit your interests",
                  },
                ].map((item, idx) => (
                  <Reveal key={idx} delay={0.2 + idx * 0.1}>
                    <div className="flex items-start gap-6 group">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                          theme === "programmers"
                            ? "bg-green-500/10 border border-green-500/20 text-green-500 group-hover:bg-green-500 group-hover:text-black"
                            : "bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white"
                        )}
                      >
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3
                          className={cn(
                            "text-xl font-black mb-1",
                            theme === "programmers"
                              ? "text-green-400"
                              : theme === "azhari" || theme === "uni"
                                ? "text-slate-900 dark:text-white"
                                : "text-white"
                          )}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={cn(
                            "font-medium",
                            theme === "programmers"
                              ? "text-green-800"
                              : "text-slate-500"
                          )}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Side: Login Form */}
            <Reveal delay={0.3}>
              <div className="relative group">
                <div
                  className={cn(
                    "absolute -inset-1 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000",
                    theme === "programmers"
                      ? "bg-green-500"
                      : theme === "azhari"
                        ? "bg-emerald-600"
                        : theme === "uni"
                          ? "bg-maroon-600"
                          : "bg-gradient-to-r from-primary to-blue-600"
                  )}
                ></div>
                <div
                  className={cn(
                    "relative rounded-[3rem] p-10 md:p-16 shadow-2xl border-2 transition-colors",
                    config.card
                  )}
                >
                  <div className="text-center mb-10">
                    <h2
                      className={cn(
                        "text-3xl font-black mb-4",
                        theme === "programmers"
                          ? "text-green-400"
                          : "text-foreground"
                      )}
                    >
                      {isAr ? "تسجيل الدخول" : "Sign In"}
                    </h2>
                    <p className="text-muted-foreground font-medium">
                      {isAr
                        ? "أدخل بياناتك للوصول إلى حسابك"
                        : "Enter your details to access your account"}
                    </p>
                  </div>
                  <LoginForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;

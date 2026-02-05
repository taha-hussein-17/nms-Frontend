import { MainLayout } from "../../components/templates/MainLayout";
import { useTranslation } from "react-i18next";
import { cn } from "../../utils/cn";
import { RegisterHero } from "../../components/organisms/Register/Hero";
import { RegisterBenefits } from "../../components/organisms/Register/Benefits";
import { RegisterFormCard } from "../../components/organisms/Register/FormCard";
import { useTheme } from "../../providers/ThemeContext";

const RegisterPage = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { theme } = useTheme();
  const isKids = theme === "kids";

  const getThemeBackground = () => {
    switch (theme) {
      case "kids":
        return "bg-white";
      case "programmers":
        return "bg-black";
      case "azhari":
        return "bg-[#FDFBF7] dark:bg-[#1A1814]";
      case "uni":
        return "bg-slate-50 dark:bg-slate-900";
      default:
        return "bg-[#0F172A]";
    }
  };

  return (
    <MainLayout>
      <div
        className={cn(
          "min-h-screen relative flex items-center justify-center py-20 overflow-hidden transition-colors duration-500",
          getThemeBackground()
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

        {isKids && (
          <>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </>
        )}

        {theme === "programmers" && (
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden text-[10px] text-green-500 leading-tight">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i}>
                {`01010110 01101001 01110011 01101001 01110100 01101111 01110010 01011111 01110010 01100101 01100111 01101001 01110011 01110100 01100101 01110010 `.repeat(
                  5
                )}
              </div>
            ))}
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={cn(
                "hidden lg:block space-y-10",
                isAr ? "text-right" : "text-left"
              )}
            >
              <RegisterHero />
              <RegisterBenefits />
            </div>

            <RegisterFormCard />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;

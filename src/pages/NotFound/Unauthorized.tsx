import { MainLayout } from "../../components/templates/MainLayout";
import { Reveal } from "../../components/atoms/Reveal";
import { useTranslation } from "react-i18next";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/atoms/Button";
import { ROUTES } from "../../constants/routes";

const UnauthorizedPage = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full text-center">
          <Reveal>
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full" />
              <div className="relative w-32 h-32 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border-2 border-red-500/20">
                <ShieldAlert className="w-16 h-16 text-red-500" />
              </div>
            </div>

            <h1 className="text-8xl font-black text-foreground/10 absolute -top-20 left-1/2 -translate-x-1/2 select-none">
              403
            </h1>

            <h2 className="text-3xl font-black text-foreground mb-4 relative">
              {isAr ? "دخول غير مصرح" : "Access Denied"}
            </h2>

            <p className="text-muted-foreground mb-10 text-lg">
              {isAr
                ? "عذرًا، ليس لديك الصلاحيات الكافية للوصول إلى هذه الصفحة."
                : "Sorry, you don't have the required permissions to access this page."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                variant="primary"
                className="w-full sm:w-auto rounded-2xl py-6 px-8"
              >
                <Link to={ROUTES.HOME}>
                  <Home className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                  {isAr ? "الرئيسية" : "Home"}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto rounded-2xl py-6 px-8 border-secondary"
              >
                <button onClick={() => window.history.back()}>
                  <ArrowLeft className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 rtl:rotate-180" />
                  {isAr ? "العودة للخلف" : "Go Back"}
                </button>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </MainLayout>
  );
};

export default UnauthorizedPage;

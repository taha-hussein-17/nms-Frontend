import { ResetPasswordForm } from "../../features/auth/components/ResetPasswordForm";
import { MainLayout } from "../../components/templates/MainLayout";
import { Reveal } from "../../components/atoms/Reveal";
import { useTranslation } from "react-i18next";
import { LockKeyhole } from "lucide-react";

const ResetPasswordPage = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <MainLayout>
      <div className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden bg-[#0F172A]">
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto">
            <Reveal>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-card glass border-2 border-white/10 rounded-[3rem] p-10 shadow-2xl">
                  <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                      <LockKeyhole className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-black mb-4 text-white">
                      {isAr ? "تعيين كلمة المرور" : "Reset Password"}
                    </h2>
                    <p className="text-slate-400 font-medium">
                      {isAr
                        ? "قم بإنشاء كلمة مرور قوية وجديدة لحسابك"
                        : "Create a strong new password for your account"}
                    </p>
                  </div>
                  <ResetPasswordForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResetPasswordPage;

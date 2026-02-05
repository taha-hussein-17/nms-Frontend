import { MainLayout } from "../../components/templates/MainLayout";
import { Reveal } from "../../components/atoms/Reveal";
import { useTranslation } from "react-i18next";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { applyActionCode } from "firebase/auth";
import { ROUTES } from "../../constants/routes";
import { Button } from "../../components/atoms/Button";

const EmailVerificationPage = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const oobCode = searchParams.get("oobCode");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!oobCode) {
        setStatus("error");
        return;
      }
      try {
        await applyActionCode(auth, oobCode);
        setStatus("success");
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("error");
      }
    };

    verifyEmail();
  }, [oobCode]);

  return (
    <MainLayout>
      <div className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden bg-[#0F172A]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto">
            <Reveal>
              <div className="relative bg-card glass border-2 border-white/10 rounded-[3rem] p-10 shadow-2xl text-center">
                {status === "loading" && (
                  <div className="space-y-6">
                    <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto" />
                    <h2 className="text-2xl font-black text-white">
                      {isAr ? "جاري التأكيد..." : "Verifying..."}
                    </h2>
                  </div>
                )}

                {status === "success" && (
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-black text-white">
                      {isAr ? "تم التأكيد بنجاح!" : "Verified Successfully!"}
                    </h2>
                    <p className="text-slate-400">
                      {isAr
                        ? "تم تأكيد بريدك الإلكتروني بنجاح. يمكنك الآن الاستمتاع بكافة الميزات."
                        : "Your email has been verified. You can now enjoy all features."}
                    </p>
                    <Button asChild className="w-full rounded-2xl py-6">
                      <Link to={ROUTES.LOGIN}>
                        {isAr ? "تسجيل الدخول" : "Login Now"}
                      </Link>
                    </Button>
                  </div>
                )}

                {status === "error" && (
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mx-auto">
                      <XCircle className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-black text-white">
                      {isAr ? "فشل التأكيد" : "Verification Failed"}
                    </h2>
                    <p className="text-slate-400">
                      {isAr
                        ? "عذرًا، الرابط غير صالح أو منتهي الصلاحية."
                        : "Sorry, the link is invalid or has expired."}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-2xl py-6"
                    >
                      <Link to={ROUTES.HOME}>
                        {isAr ? "العودة للرئيسية" : "Back to Home"}
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EmailVerificationPage;

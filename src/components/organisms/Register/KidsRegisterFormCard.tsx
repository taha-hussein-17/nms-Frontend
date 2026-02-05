import { useTranslation } from "react-i18next";
import { Reveal } from "../../atoms/Reveal";
import { RegisterForm } from "../../../features/auth/components/RegisterForm";
import { Sparkles } from "lucide-react";

export const KidsRegisterFormCard = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Reveal delay={0.3}>
      <div className="relative group">
        {/* Animated Background blobs for kids */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative bg-white dark:bg-slate-900 border-4 border-dashed border-primary/30 rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[5rem] flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-primary animate-spin-slow" />
          </div>

          <div className="text-center mb-10">
            <h2 className="text-4xl font-black mb-4 text-primary font-handwritten tracking-wide">
              {isAr ? "هيا نبدأ المغامرة!" : "Let's Start the Adventure!"}
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-12 rounded-full bg-yellow-400"></span>
              <p className="text-slate-500 font-bold">
                {isAr ? "سجل بياناتك وانضم إلينا" : "Sign up and join the fun"}
              </p>
              <span className="h-1.5 w-12 rounded-full bg-blue-400"></span>
            </div>
          </div>

          <div className="kids-form-container">
            <RegisterForm />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

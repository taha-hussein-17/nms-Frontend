import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../../components/atoms/Button";
import { useTranslation } from "react-i18next";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { auth } from "../../../lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { cn } from "../../../utils/cn";

const schema = z.object({
  email: z.string().email("auth.errors.email_invalid"),
});

type FormValues = z.infer<typeof schema>;

export const ForgotPasswordForm = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      setIsSent(true);
      Swal.fire({
        icon: "success",
        title: isAr ? "تم الإرسال!" : "Sent!",
        text: isAr
          ? "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني."
          : "A password reset link has been sent to your email.",
        confirmButtonText: isAr ? "حسنًا" : "OK",
        confirmButtonColor: "#3B82F6",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: isAr ? "خطأ!" : "Error!",
        text: isAr
          ? "فشل إرسال البريد. تأكد من صحة البريد الإلكتروني."
          : "Failed to send email. Please check if the email is correct.",
        confirmButtonText: isAr ? "حسنًا" : "OK",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  if (isSent) {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <CheckCircle2 className="w-10 h-10" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">
            {isAr ? "تحقق من بريدك الإلكتروني" : "Check your email"}
          </h3>
          <p className="text-slate-400">
            {isAr
              ? "لقد أرسلنا تعليمات استعادة كلمة المرور إلى بريدك."
              : "We have sent password recovery instructions to your email."}
          </p>
        </div>
        <Button asChild variant="outline" className="w-full rounded-2xl py-6">
          <Link to={ROUTES.LOGIN}>
            {isAr ? "العودة لتسجيل الدخول" : "Back to Login"}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-black text-white/70 px-1">
          {isAr ? "البريد الإلكتروني" : "Email Address"}
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <input
            {...register("email")}
            type="email"
            className={z.util.joinValues([
              "w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300",
              errors.email ? "border-red-500/50" : "",
            ])}
            placeholder="example@mail.com"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs font-bold px-1">
            {t(errors.email.message as string)}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-7 text-lg font-black shadow-xl shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <div className="flex items-center gap-2">
            {isAr ? "إرسال رابط الاستعادة" : "Send Reset Link"}
            <ArrowRight className={cn("w-5 h-5", isAr && "rotate-180")} />
          </div>
        )}
      </Button>

      <div className="text-center">
        <Link
          to={ROUTES.LOGIN}
          className="text-primary hover:underline font-bold"
        >
          {isAr ? "العودة لتسجيل الدخول" : "Back to Login"}
        </Link>
      </div>
    </form>
  );
};

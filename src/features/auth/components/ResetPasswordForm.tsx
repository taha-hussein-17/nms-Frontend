import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../../components/atoms/Button";
import { useTranslation } from "react-i18next";
import { Lock, Eye, EyeOff, CheckCircle2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { auth } from "../../../lib/firebase";
import { confirmPasswordReset } from "firebase/auth";
import Swal from "sweetalert2";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { cn } from "../../../utils/cn";

const schema = z
  .object({
    password: z.string().min(6, "auth.errors.password_min"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "auth.errors.passwords_dont_match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export const ResetPasswordForm = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const oobCode = searchParams.get("oobCode");

  useEffect(() => {
    if (!oobCode) {
      Swal.fire({
        icon: "error",
        title: isAr ? "رابط غير صالح" : "Invalid Link",
        text: isAr
          ? "عذرًا، رابط إعادة التعيين هذا غير صالح أو منتهي الصلاحية."
          : "Sorry, this reset link is invalid or has expired.",
        confirmButtonText: isAr ? "العودة للدخول" : "Back to Login",
      }).then(() => navigate(ROUTES.LOGIN));
    }
  }, [oobCode, isAr, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    if (!oobCode) return;
    try {
      await confirmPasswordReset(auth, oobCode, data.password);
      setIsSuccess(true);
      Swal.fire({
        icon: "success",
        title: isAr ? "تم بنجاح!" : "Success!",
        text: isAr
          ? "تم تغيير كلمة المرور بنجاح."
          : "Your password has been reset successfully.",
        confirmButtonText: isAr ? "تسجيل الدخول" : "Login Now",
        confirmButtonColor: "#3B82F6",
      }).then(() => navigate(ROUTES.LOGIN));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: isAr ? "خطأ!" : "Error!",
        text: isAr
          ? "فشل تغيير كلمة المرور. قد يكون الرابط منتهي الصلاحية."
          : "Failed to reset password. The link might be expired.",
        confirmButtonText: isAr ? "حسنًا" : "OK",
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <CheckCircle2 className="w-10 h-10" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">
            {isAr ? "تم تغيير كلمة المرور" : "Password Changed"}
          </h3>
          <p className="text-slate-400">
            {isAr
              ? "يمكنك الآن تسجيل الدخول بكلمة المرور الجديدة."
              : "You can now login with your new password."}
          </p>
        </div>
        <Button asChild className="w-full rounded-2xl py-6">
          <Link to={ROUTES.LOGIN}>{isAr ? "تسجيل الدخول" : "Login"}</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-black text-white/70 px-1">
          {isAr ? "كلمة المرور الجديدة" : "New Password"}
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary transition-colors">
            <Lock className="w-5 h-5" />
          </div>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className={z.util.joinValues([
              "w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300",
              errors.password ? "border-red-500/50" : "",
            ])}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs font-bold px-1">
            {t(errors.password.message as string)}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-black text-white/70 px-1">
          {isAr ? "تأكيد كلمة المرور" : "Confirm Password"}
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary transition-colors">
            <Lock className="w-5 h-5" />
          </div>
          <input
            {...register("confirmPassword")}
            type={showPassword ? "text" : "password"}
            className={z.util.joinValues([
              "w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300",
              errors.confirmPassword ? "border-red-500/50" : "",
            ])}
            placeholder="••••••••"
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs font-bold px-1">
            {t(errors.confirmPassword.message as string)}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-7 text-lg font-black shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <div className="flex items-center gap-2">
            {isAr ? "حفظ كلمة المرور" : "Save Password"}
            <ArrowRight className={cn("w-5 h-5", isAr && "rotate-180")} />
          </div>
        )}
      </Button>
    </form>
  );
};

import { Reveal } from "../../atoms/Reveal";
import { Button } from "../../atoms/Button";
import { Terminal, Send, Activity } from "lucide-react";
import { cn } from "../../../utils/cn";
import type { TFunction } from "i18next";
import type {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";

export interface InstructorFormValues {
  fullName: string;
  email: string;
  specialty: string;
  experience: string;
}

interface BecomeInstructorFormProps {
  isAr: boolean;
  t: TFunction;
  register: UseFormRegister<InstructorFormValues>;
  handleSubmit: UseFormHandleSubmit<InstructorFormValues>;
  onSubmit: (data: InstructorFormValues) => Promise<void>;
  errors: FieldErrors<InstructorFormValues>;
  isSubmitting: boolean;
}

export const CodersBecomeInstructorForm = ({
  isAr,
  t,
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
}: BecomeInstructorFormProps) => {
  return (
    <section
      id="apply-form"
      className="py-24 relative overflow-hidden bg-black font-mono"
    >
      {/* Matrix background effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1 border border-emerald-500/30 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">
                <Terminal className="w-4 h-4" />
                {isAr ? "بدء عملية النشر" : "INIT_DEPLOYMENT_PROCESS"}
              </div>
              <h2 className="text-3xl lg:text-5xl font-black mb-6 text-white tracking-tighter uppercase">
                {t("become_instructor.form.title")}
              </h2>
              <p className="text-emerald-500/60 font-medium">
                {"> "} {t("become_instructor.form.description")}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative border border-emerald-500/20 bg-emerald-500/5 p-8 md:p-12 overflow-hidden group">
              {/* Corner decor */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-500/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-500/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500/40" />

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      className={cn(
                        "text-xs text-emerald-500/50 uppercase tracking-widest block px-1",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {"<"} {t("become_instructor.form.full_name")} {"/>"}
                    </label>
                    <div className="relative">
                      <input
                        {...register("fullName")}
                        placeholder={
                          isAr ? "أدخل الاسم هنا..." : "enter_name_here..."
                        }
                        className={cn(
                          "w-full h-12 bg-emerald-500/5 border border-emerald-500/20 focus:border-emerald-500/60 text-emerald-400 placeholder:text-emerald-900 outline-none transition-all px-4 text-sm",
                          isAr ? "text-right" : "text-left"
                        )}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[10px] text-red-500 mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      className={cn(
                        "text-xs text-emerald-500/50 uppercase tracking-widest block px-1",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {"<"} {t("become_instructor.form.email")} {"/>"}
                    </label>
                    <div className="relative">
                      <input
                        {...register("email")}
                        type="email"
                        placeholder={
                          isAr ? "البريد الإلكتروني..." : "email_address..."
                        }
                        className={cn(
                          "w-full h-12 bg-emerald-500/5 border border-emerald-500/20 focus:border-emerald-500/60 text-emerald-400 placeholder:text-emerald-900 outline-none transition-all px-4 text-sm",
                          isAr ? "text-right" : "text-left"
                        )}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] text-red-500 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Specialty */}
                  <div className="space-y-2">
                    <label
                      className={cn(
                        "text-xs text-emerald-500/50 uppercase tracking-widest block px-1",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {"<"} {t("become_instructor.form.specialty")} {"/>"}
                    </label>
                    <div className="relative">
                      <input
                        {...register("specialty")}
                        placeholder={
                          isAr ? "مجال الخبرة..." : "expert_field..."
                        }
                        className={cn(
                          "w-full h-12 bg-emerald-500/5 border border-emerald-500/20 focus:border-emerald-500/60 text-emerald-400 placeholder:text-emerald-900 outline-none transition-all px-4 text-sm",
                          isAr ? "text-right" : "text-left"
                        )}
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <label
                      className={cn(
                        "text-xs text-emerald-500/50 uppercase tracking-widest block px-1",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {"<"} {t("become_instructor.form.experience")} {"/>"}
                    </label>
                    <div className="relative">
                      <input
                        {...register("experience")}
                        placeholder={
                          isAr ? "سنوات الخبرة..." : "years_of_exp..."
                        }
                        className={cn(
                          "w-full h-12 bg-emerald-500/5 border border-emerald-500/20 focus:border-emerald-500/60 text-emerald-400 placeholder:text-emerald-900 outline-none transition-all px-4 text-sm",
                          isAr ? "text-right" : "text-left"
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-black font-black text-sm uppercase tracking-[0.2em] rounded-none group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 animate-spin" />
                        EXECUTING...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        {isAr ? "تأكيد الإرسال" : "EXECUTE_SUBMIT"}
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

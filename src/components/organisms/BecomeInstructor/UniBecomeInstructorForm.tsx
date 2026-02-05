import { Reveal } from "../../atoms/Reveal";
import { Button } from "../../atoms/Button";
import { FileText, User, Mail, Briefcase, Send, GraduationCap } from "lucide-react";
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

export const UniBecomeInstructorForm = ({
  isAr,
  t,
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
}: BecomeInstructorFormProps) => {
  return (
    <section id="apply-form" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-maroon-600/10 border border-maroon-600/20 text-maroon-600 text-sm font-bold uppercase tracking-wider mb-6">
                <GraduationCap className="w-4 h-4" />
                {isAr ? "التقديم الأكاديمي" : "Academic Application"}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                {t("become_instructor.form.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {t("become_instructor.form.description")}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 md:p-12 shadow-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className={cn("text-xs font-bold text-slate-500 uppercase tracking-widest block", isAr ? "text-right" : "text-left")}>
                      {t("become_instructor.form.full_name")}
                    </label>
                    <div className="relative">
                      <div className={cn("absolute inset-y-0 flex items-center text-slate-400", isAr ? "right-4" : "left-4")}>
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        {...register("fullName")}
                        placeholder={t("become_instructor.form.full_name_placeholder")}
                        className={cn(
                          "w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-maroon-600/20 focus:border-maroon-600 outline-none transition-all text-slate-900 dark:text-white",
                          isAr ? "pr-12 text-right" : "pl-12 text-left"
                        )}
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className={cn("text-xs font-bold text-slate-500 uppercase tracking-widest block", isAr ? "text-right" : "text-left")}>
                      {t("become_instructor.form.email")}
                    </label>
                    <div className="relative">
                      <div className={cn("absolute inset-y-0 flex items-center text-slate-400", isAr ? "right-4" : "left-4")}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="email@university.edu"
                        className={cn(
                          "w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-maroon-600/20 focus:border-maroon-600 outline-none transition-all text-slate-900 dark:text-white",
                          isAr ? "pr-12 text-right" : "pl-12 text-left"
                        )}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Specialty */}
                  <div className="space-y-2">
                    <label className={cn("text-xs font-bold text-slate-500 uppercase tracking-widest block", isAr ? "text-right" : "text-left")}>
                      {t("become_instructor.form.specialty")}
                    </label>
                    <div className="relative">
                      <div className={cn("absolute inset-y-0 flex items-center text-slate-400", isAr ? "right-4" : "left-4")}>
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <input
                        {...register("specialty")}
                        placeholder={isAr ? "المجال الأكاديمي..." : "Academic field..."}
                        className={cn(
                          "w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-maroon-600/20 focus:border-maroon-600 outline-none transition-all text-slate-900 dark:text-white",
                          isAr ? "pr-12 text-right" : "pl-12 text-left"
                        )}
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <label className={cn("text-xs font-bold text-slate-500 uppercase tracking-widest block", isAr ? "text-right" : "text-left")}>
                      {t("become_instructor.form.experience")}
                    </label>
                    <div className="relative">
                      <div className={cn("absolute inset-y-0 flex items-center text-slate-400", isAr ? "right-4" : "left-4")}>
                        <FileText className="w-5 h-5" />
                      </div>
                      <input
                        {...register("experience")}
                        placeholder={isAr ? "سنوات التدريس..." : "Years of teaching..."}
                        className={cn(
                          "w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-maroon-600/20 focus:border-maroon-600 outline-none transition-all text-slate-900 dark:text-white",
                          isAr ? "pr-12 text-right" : "pl-12 text-left"
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-10">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-maroon-700 hover:bg-maroon-800 text-white font-bold text-sm uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      "Processing Application..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {isAr ? "إرسال البيانات للمراجعة" : "Submit for Review"}
                      </>
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
